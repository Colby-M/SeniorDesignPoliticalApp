import { ref } from 'vue'
import supabase from "../lib/supabaseClient";
import { defineStore } from 'pinia'
import type { Session } from '@supabase/supabase-js';
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {

  const session = ref<Session>();
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session ?? undefined;
  })

  // supabase.auth.onAuthStateChange((_, _session) => {
  //   if (_session != null && _session != undefined)
  //   {
  //     router.replace("/profile");
  //   }
  //   else
  //   {
  //     router.replace("/");
  //   }
  //   router.replace({ "query": {"email": null, "password": null} } );
  //   session.value = _session ?? undefined;
  // })
  supabase.auth.onAuthStateChange(() => changedAuth())

  function changedAuth()
  {
    supabase.auth.getSession().then(({ data }) => {
      session.value = data.session ?? undefined;
    })
    router.replace({"query": {"email": undefined, "password": undefined}}).finally(() => {
      if (session.value != null && session.value != undefined)
      {
        if (router.currentRoute.value.name == "home")
        {
          // just signed in so go to profile
          router.push("/profile");
        }
      }
      else
      {
        // signed out or missing info so go to landing page
        router.push("/");
      }
    });
  }

  async function signInWithGithub()
  {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NODE_ENV === 'production' ? "https://colby-m.github.io/SeniorDesignPoliticalApp/" : "http://localhost:5173" 
      }
    });
  }

  async function logout()
  {
    await supabase.auth.signOut();
  }

  async function signInWithCredentials(username: string | null, password: string | null)
  {
    if (password == null || username == null) return;
    if (username.includes("@"))
    {
      try {
          await supabase.auth.signInWithPassword({
          email: username,
          password: password,
        }).then(() => changedAuth());
      } catch {
        console.error("The login failed! Please try again!");
      }
    }
    else if (username.length == 10)
    {
      const { data, error } = await supabase.auth.signInWithPassword({
        phone: username,
        password: password
      });
    }
  }

  async function signUp(
    username: string | null,
    password: string | null,
    firstName: string | null = null,
    lastName: string | null = null,
    age: number | null = null
  )
  {
    if (password == null || username == null) return;
    if (username.includes("@"))
    {
      const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            age: age,
            full_name: firstName + ' ' + lastName
          }
        }
      })
    }
    else if (username.length == 10 && username.matchAll(new RegExp("[0-9]")))
    {
      const { data, error } = await supabase.auth.signUp({
        phone: username,
        password: password
      })
    }
  }

  return {
    logout,
    session,
    signInWithCredentials,
    signInWithGithub,
    signUp
  }
})
