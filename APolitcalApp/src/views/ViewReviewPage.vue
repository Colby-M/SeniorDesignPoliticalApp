<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ToolbarReview from '../components/toolbars/toolbarReview.vue'
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarReview></ToolbarReview>
    </template>

    <template #ContentSlot>Review</template>
  </MainLayout>
</template>