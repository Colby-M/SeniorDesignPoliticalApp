import { ref } from 'vue'
import supabase from "../lib/supabaseClient";
import { defineStore } from 'pinia'
import type { Session } from '@supabase/supabase-js';
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {

  const session = ref<Session>();
  const signingIn = ref(false);
  const captchaToken = ref();
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

  async function changedAuth()
  {
    const data = await supabase.auth.getSession()
    // .then(({ data }) => {
    //   session.value = data.session ?? undefined;
    //   console.log(session.value)
    // })
    if (data.error)
    {
      console.log(data.error);
    }
    console.log(data.data);
    // console.log(signingIn);
    session.value = data.data.session ?? undefined;
    if (session.value != null && session.value != undefined)
      {
        if (router.currentRoute.value.name == "home")
        {
          // just signed in so go to profile
          router.push('/profile')
        }
      }
      else
      {
        if (signingIn.value == true)
        {
          // failed to sign in
          alert("Failed to sign in! Please try again.");
        }
        // signed out or missing info so go to landing page
        router.push("/");
    }
    signingIn.value = false;
  }

  async function signInWithGithub()
  {
    signingIn.value = true;
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NODE_ENV === 'production' ? "https://colby-m.github.io/SeniorDesignPoliticalApp/" : "http://localhost:5173" 
      }
    });
  }

  async function logout()
  {
    router.push("/");
    await supabase.auth.signOut();
  }

  async function signInWithCredentials(username: string | null, password: string | null)
  {
    signingIn.value = true;
    console.log(captchaToken.value);
    if (password == null || username == null) return;
    const data = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
      options: { captchaToken: captchaToken.value }
    });
    console.log(data);
    changedAuth();
  }

  async function signUp(
    username: string | null,
    password: string | null,
    firstName: string | null = null,
    lastName: string | null = null,
    age: number | null = null,
  )
  {
    if (password == null || username == null) return;
    if (username.includes("@"))
    {
      try { 
        await supabase.auth.signUp({
        email: username,
        password: password,
        options: {
          emailRedirectTo: process.env.NODE_ENV === 'production' ? "https://colby-m.github.io/SeniorDesignPoliticalApp/" : "http://localhost:5173",
          captchaToken: captchaToken.value,
          data: {
            first_name: firstName,
            last_name: lastName,
            age: age,
            full_name: firstName + ' ' + lastName
          }
          
        }
      }).then( () => changedAuth())
    }catch {
      console.error("The login failed! Please try again!");
    }
    }
    else if (username.length == 10 && username.matchAll(new RegExp("[0-9]")))
    {
      const { data, error } = await supabase.auth.signUp({
        phone: username,
        password: password
      })
    }
  }

  async function passwordResetEmail(email: string)
  {
    if (captchaToken.value == undefined || captchaToken.value == null)
    {
      alert("Problem with captcha, please redo");
      return;
    }
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NODE_ENV === 'production' ? "https://colby-m.github.io/SeniorDesignPoliticalApp/password-reset" : "http://localhost:5173/password-reset",
      captchaToken: captchaToken.value
    })
  }

  async function passwordResetForAccount(newPassword: string)
  {
    await supabase.auth.updateUser({ password: newPassword });
  }

  return {
    logout,
    session,
    captchaToken,
    signInWithCredentials,
    signInWithGithub,
    signUp,
    passwordResetEmail,
    passwordResetForAccount
  }
})


