<script setup lang="ts">
import Nav_Column from '@/components/nav/NavColumn.vue';
</script>

<template>
    <div class="NavContainer w-1/6 flex" >
        <div class="NavFrame grow flex items-start h-screen pb-20 rounded-lg border-x border-dark-5 "> 
            <Nav_Column></Nav_Column>
        </div>
    </div>

    <div class="ContentContainer w-5/6 shrink justify-center items-start border-r min-w-500 border-dark-5">

        <slot name="Content"></slot>
    </div> 


</template>