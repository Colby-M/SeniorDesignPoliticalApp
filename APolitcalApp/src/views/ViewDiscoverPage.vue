<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import CardFullPetition from '@/components/cards/CardFullPetition.vue';

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
    <template #ContentSlot>Discover
      <div class="flex flex-wrap gap-8 px-16 items-center justify-center overflow-y-auto">
        <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
        <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
        <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>
        <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>

      </div>
    </template>
  </MainLayout>
</template>
