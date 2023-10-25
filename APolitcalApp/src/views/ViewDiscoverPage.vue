<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ButtonBase from '@/components/button/ButtonBase.vue';
import ToolbarDiscover from '../components/toolbars/toolbarDiscover.vue';
const testevent = () => {
  console.log('test')
}

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarDiscover></ToolbarDiscover>
    </template>
    <template #ContentSlot>Discover
     <ButtonBase buttonType="test-lg" @block="testevent"></ButtonBase>
    </template>
  </MainLayout>
</template>