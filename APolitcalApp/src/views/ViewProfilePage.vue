<script setup lang="ts">
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import { useAuthStore } from '@/stores/Auth';

  const authStore = useAuthStore();
</script>

<template>
  <MainLayout>
    <template #ContentSlot>
      <h1>profile</h1>
      <button @click="authStore.logout()">
        Sign Out
      </button>
    </template>
  </MainLayout>
</template>