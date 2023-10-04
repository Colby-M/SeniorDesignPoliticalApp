<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ButtonBase from '@/components/button/ButtonBase.vue';
import SearchBar from '@/components/search/SearchBar.vue';
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
        <SearchBar></SearchBar>
    </template>
    <template #ContentSlot>
        <ButtonBase></ButtonBase>
    </template>
  </MainLayout>
</template>