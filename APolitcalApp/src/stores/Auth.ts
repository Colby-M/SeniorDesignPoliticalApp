import { ref, computed } from 'vue'
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
      provider: 'github'
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

  async function signUp(username: string | null, password: string | null)
  {
    console.log(username, password);
    if (password == null || username == null) return;
    if (username.includes("@"))
    {
      const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password
      })
    }
    else if (username.length == 10)
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
