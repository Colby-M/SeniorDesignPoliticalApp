<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { RouterLink, RouterView } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import Account from './components/Auth/AuthAccount.vue';
import { useAuthStore } from './stores/Auth';

  const authStore = useAuthStore();
  const input = reactive({
    username: null,
    password: null
  });
</script>

<template>

   <div>
      <Account v-if="authStore.session != undefined" :session="authStore.session" />
      <button v-else @click="authStore.signInWithGithub()" >
        Sign in with Github
      </button>
    </div>
    <input type="text" name="username" v-model="input.username" placeholder="Email or Phone" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" @click="authStore.signInWithCredentials(input.username, input.password)">Login</button>
    <input type="text" name="username" v-model="input.username" placeholder="Email or Phone" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" @click="authStore.signUp(input.username, input.password)">SignUp</button>
  <!-- <div class="h-full bg-light">
      <RouterView />
  </div> -->


</template>

