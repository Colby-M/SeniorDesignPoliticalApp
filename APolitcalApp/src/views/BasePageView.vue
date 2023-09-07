<script setup lang="ts">
import NAV_COLUMN_NavColumn from '@/components/nav/NAV_COLUMN_NavColumn.vue';
</script>

<template>
    <div class="NavContainer w-1/8 flex" >
      <div class="NavFrame justify-top-center grow flex flex-col items-start h-screen pb-20 bg-light-5 border-0 border-x-2 border-dark-5 "> 
        <NAV_COLUMN_NavColumn></NAV_COLUMN_NavColumn>
      </div>
    </div> 
    <div class="ContentContainer w-2/3 bg-light-5 justify-center items-start border-0 border-dark-5">content column</div> 
</template>