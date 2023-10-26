<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ToolbarSettings from '../components/toolbars/toolbarSettings.vue'
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarSettings></ToolbarSettings>
    </template>

    <template #ContentSlot>Settings</template>
  </MainLayout>
</template>