<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ButtonBase from '@/components/button/ButtonBase.vue';
import SearchBar from '@/components/search/SearchBar.vue';
import PetitionTitle from '@/components/cards/CardPetitionTitle.vue'
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
        <SearchBar></SearchBar>
    </template>
    <template #ContentSlot>
        <ButtonBase></ButtonBase>
        <PetitionTitle petitionTitle="Balls are dumb" petitionId="101425623"></PetitionTitle>
    </template>
  </MainLayout>
</template>