<script setup lang="ts">
  import AuthAccount from '@/components/Auth/AuthAccount.vue';
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import ToolbarProfilePersonal from '../components/toolbars/toolbarProfilePersonal.vue'
  import CardFullPetition from '@/components/cards/CardFullPetition.vue';
  import CardProfileName  from '@/components/cards/CardProfileNameBio.vue'
  import { useAuthStore } from '@/stores/Auth';
  import { reactive } from 'vue';
  const testPetitionObject = reactive({
  petitionTitle: '',
  petitionId: 'test2',
  petitionSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  petitionLocked: true,
})
  const authStore = useAuthStore();
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarProfilePersonal></ToolbarProfilePersonal>
    </template>
    <template #ContentSlot>
      
      <CardProfileName></CardProfileName>
    </template>
  </MainLayout>
</template>