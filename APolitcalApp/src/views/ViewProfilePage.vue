<script setup lang="ts">
  import AuthAccount from '@/components/Auth/AuthAccount.vue';
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import ToolbarProfilePersonal from '../components/toolbars/toolbarProfilePersonal.vue'
  import { useAuthStore } from '@/stores/Auth';

  const authStore = useAuthStore();
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarProfilePersonal></ToolbarProfilePersonal>
    </template>
    <template #ContentSlot>
      <h1>profile</h1>
      <AuthAccount @sign-out="authStore.logout()" v-if="authStore.session" :session="authStore.session" />
    </template>
  </MainLayout>
</template>