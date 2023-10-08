<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import FormCreatePetition from '@/components/forms/FormCreatePetition.vue';
/* 
        <div class="w-[338px] h-[400px] bg-dark  absolute"></div>
        <div class="w-[338px] h-[400px] ml-[24px] mt-[24px] bg-highlight absolute">
          <div class=" p-4 w-full h-full border border-dotted"></div>
        </div>
*/
</script>

<template>
  <MainLayout>
    <template #ContentSlot>
    <div class="flex items-center justify-center py-2">
      <FormCreatePetition></FormCreatePetition>
    </div>

    </template>
  </MainLayout>
</template>