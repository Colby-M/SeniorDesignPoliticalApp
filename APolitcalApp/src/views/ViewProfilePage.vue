<script setup lang="ts">
  import AuthAccount from '@/components/Auth/AuthAccount.vue';
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import ToolbarProfilePersonal from '../components/toolbars/toolbarProfilePersonal.vue'
  import CardPetitionTitle from '@/components/cards/CardPetitionTitle.vue';
  import CardSolutionsOtherSuggestions from '@/components/cards/CardSolutionsOtherSuggestions.vue';
  import { useAuthStore } from '@/stores/Auth';
  import { onMounted, ref } from 'vue';
  import supabase from '@/lib/supabaseClient';
  import type IPetitionType from '../interfaces/IPetitionType';
  import type ISolutionType from '../interfaces/ISolutionType';

  const authStore = useAuthStore();
  const petitions = ref<IPetitionType[]>();
  const solutions = ref<ISolutionType[]>();
  onMounted(async () => {
    // get our own petitions
    petitions.value = (await supabase
    .from('Petitions')
    .select<"*", IPetitionType>()
    .eq('userid', authStore.session?.user.id)).data ?? [];

    // get our own solutions
    solutions.value = (await supabase
    .from('Solution')
    .select<"*", ISolutionType>()
    .eq('userid', authStore.session?.user.id)).data ?? [];

    console.log(petitions.value, solutions.value);
  });
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarProfilePersonal></ToolbarProfilePersonal>
    </template>
    <template #ContentSlot>
      <div class="flex flex-col gap-5">
        <AuthAccount @sign-out="authStore.logout()" v-if="authStore.session" :session="authStore.session" />
        <div class="flex w-full justify-between">
          <div>
            <p>Your Petitions</p>
            <div class="flex flex-col gap-2">
              <CardPetitionTitle v-for="petition in petitions" :key="petition.id" :petition-id="petition.id" :petition-title="petition.title" />
            </div>
          </div>
          <div>
            <p>Your Solutions</p>
            <div class="flex flex-col gap-2">
              <CardSolutionsOtherSuggestions v-for="post in solutions" :linkedPetition="post.id" :suggestionText="post.description" :uservotes="post.uservotes.length ?? 0" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>