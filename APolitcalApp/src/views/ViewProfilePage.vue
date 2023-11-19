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
  const renderSolution = ref(false);
  const renderPetition = ref(false);

  
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

    if (petitions.value.length !== 0){
      renderPetition.value = true;
    };
  
    if (solutions.value.length !== 0){
      renderSolution.value = true;
    };

  });


  function formatVoteArray(uservotes: Array<string> | null){
  if (uservotes === null){
    return []
  }
  else{
    return uservotes
  }
}
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarProfilePersonal></ToolbarProfilePersonal>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] w-full overflow-y-auto py-2" ref="scrollComponent">
        <div class="flex flex-col items-center gap-5">
          <AuthAccount @sign-out="authStore.logout()" v-if="authStore.session" :session="authStore.session" />
          <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start gap-2">
            <div v-if="renderPetition">
              <p>Your Petitions</p>
              <div class="flex flex-col gap-2">
                <CardPetitionTitle v-for="petition in petitions" :key="petition.id" :petition-id="petition.id" :petition-title="petition.title" />
              </div>
            </div>
            <div v-if="renderSolution" class="text-center">            
              <p>Your Solutions</p>
              <div class="flex flex-wrap w-96 justify-center">
                <CardSolutionsOtherSuggestions v-for="post in solutions" :linkedPetition="post.id" :solution-i-d="post.id" :suggestionText="post.description" :uservotes="formatVoteArray(post.uservotes)" :key="post.id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>