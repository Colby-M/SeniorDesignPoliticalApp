<script setup lang="ts">
import NAV_COLUMN_NavColumn from '@/components/nav/NAV_COLUMN_NavColumn.vue';
</script>

<template>
    <div class="NavContainer w-1/6 flex" >
        <div class="NavFrame grow flex items-start h-screen pb-20 rounded-lg bg-light-5 border-x border-dark-5 "> 
            <NAV_COLUMN_NavColumn></NAV_COLUMN_NavColumn>
        </div>
    </div>

    <div class="ContentContainer w-5/6 bg-light-5 shrink justify-center items-start border-r min-w-500 border-dark-5">

        <slot name="Content"></slot>
    </div> 


</template>