<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ButtonBase from '@/components/button/ButtonBase.vue'
</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>Button Type Tests</template>
    <template #ContentSlot>
        <ButtonBase></ButtonBase>
    </template>
  </MainLayout>
</template>