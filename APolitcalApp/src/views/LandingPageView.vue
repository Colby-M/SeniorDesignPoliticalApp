<script setup lang="ts">
  import Landing from '@/components/layouts/Landing.vue';
  import { useAuthStore } from '@/stores/Auth';
  import router from '@/router/index';

  const authStore = useAuthStore();
  if (authStore.session != null)
  {
    router.push("/profile");
  }
</script>

<template>
  <Landing> </Landing>
</template>