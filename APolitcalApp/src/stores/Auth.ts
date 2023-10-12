import { ref } from 'vue'
import supabase from "../lib/supabaseClient";
import { defineStore } from 'pinia'
import type { Session } from '@supabase/supabase-js';

export const useAuthStore = defineStore('auth', () => {

  const session = ref<Session>();
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session ?? undefined;
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session ?? undefined;
  })

  async function signInWithGithub()
  {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NODE_ENV === 'production' ? "https://colby-m.github.io/SeniorDesignPoliticalApp/" : "https://localhost:5173/Profile" 
      }
    });
  }

  async function logout()
  {
    const { error } = await supabase.auth.signOut();
  }

  async function signInWithCredentials(username: string | null, password: string | null)
  {
    if (password == null || username == null) return;
    if (username.includes("@"))
    {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password
      })
    }
    else if (username.length == 10)
    {
      const { data, error } = await supabase.auth.signInWithPassword({
        phone: username,
        password: password
      })
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
