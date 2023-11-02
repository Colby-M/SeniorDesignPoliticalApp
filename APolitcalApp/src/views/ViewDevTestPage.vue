<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ButtonBase from '@/components/button/ButtonBase.vue';
import SearchBar from '@/components/search/SearchBar.vue';
import PetitionTitle from '@/components/cards/CardPetitionTitle.vue'
import CardTriTitle from '@/components/cards/CardTriTitle.vue';
import CardFullPetition from '@/components/cards/CardFullPetition.vue';

/* TODO: Replace with supabase calls */
const samplePetitionData = [
  {petitionTitle: "Test1", petitionId: "Test1"},
  {petitionTitle: "Test2", petitionId: "Test2"},
  {petitionTitle: "Test3", petitionId: "Test3"}
]

/* TODO: Replace with supabase calls */
const sampleFullPetitionData = {petitionTitle: "Sample", petitionId: "124124", petitionSummary: "sample petition summary. sample petition summary sample petition summary. sample petition summary"};
/* Setup Notes


*/

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
        <SearchBar></SearchBar>
    </template>
    <template #ContentSlot>
      <div class="flex flex-wrap gap-4 justify-center">

      </div>
    </template>
  </MainLayout>
</template>