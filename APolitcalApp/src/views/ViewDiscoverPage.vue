<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import CardPetitionTitle from '@/components/cards/CardPetitionTitle.vue';
import CardFullPetition from '@/components/cards/CardFullPetition.vue';

import { reactive } from 'vue';

const testPetitionObject = reactive({
  petitionTitle: 'test',
  petitionId: 'test',
  petitionSummary: 'test',
})

/* 
<template>
  <MainLayout>
    <template #ContentSlot>Discover
    <div class="flex flex-wrap gap-8 px-16 items-center j ustify-center overflow-y-auto">
      <div class="w-[350px] h-[412px] bg-light group-hover:drop-shadow-2xl duration-700">
        <div class="w-[338px] h-[400px] bg-dark/90 absolute"></div>
        <div class="w-[338px] h-[400px] ml-[6px] mt-[6px] bg-highlight absolute">
          <div class="flex group w-[314px] h-[376px] m-[12px] border-dashed border-light border py-4 justify-center">
            <CardFullPetition :petitionObject="testPetitionObject"></CardFullPetition>           
          </div>
        </div>
    </div>
    </div>
    </template>
  </MainLayout>
</template>



*/


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
