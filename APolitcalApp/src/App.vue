<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import Account from './components/Auth/AuthAccount.vue';
import Auth from './components/Auth/AuthComponent.vue';
import supabase from './lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

const session = ref<Session>();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session ?? undefined;
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session ?? undefined;
  })
})
</script>

<template>
  <div class="text-3xl">
    HELLO
  </div>
  <div>
    <Account v-if="session != undefined" :session="session" />
    <Auth v-else />
  </div>
  <!-- <header>
    <h1 class="text-9xl font-bold underline">Tailwind Test</h1>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
</style>
