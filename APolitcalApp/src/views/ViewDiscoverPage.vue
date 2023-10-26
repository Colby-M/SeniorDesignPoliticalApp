<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import CardFullPetition from '@/components/cards/CardFullPetition.vue';
import ToolbarDiscover from '@/components/toolbars/toolbarDiscover.vue';

import { reactive } from 'vue';
/* TODO: Implement Infinite Scoll With Petition Populating Functions */

/* 
Sample Petition Object
*/
const testPetitionObject = reactive({
  petitionTitle: 'DDDDDDDDDDDDDDDDDDDDDDDDD',
  petitionId: 'test',
  petitionSummary: 'It seems like youre looking for a summary or information about a specific topic or test. It seems like youre looking for a summary or information about a specific topic or test.. It seems like youre looking for a summary or information about a specific topic or test.. Please provide more details or specify the test youre interested in, and Ill be happy to provide you with a summary or relevant information.',
  petitionLocked: true,
})

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarDiscover></ToolbarDiscover>
    </template>
    <template #ContentSlot>
        <div>
        <div class="flex flex-wrap gap-8 px-16 py-2 items-center justify-center">
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
          <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
        </div>
      </div>

    </template>
  </MainLayout>
</template>

<style>
/* Hide scrollbar in WebKit-based browsers */
::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
}

</style>