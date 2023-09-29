<script setup lang="ts">
import Nav_Column from '@/components/nav/NavColumn.vue';
import NavRow from '../nav/NavRow.vue';
/* sm:w-[500px] md:w-[576px] lg:w-[640px] */
</script>

<template>
    <div class="grid w-full h-screen justify-center mx-auto grid-cols-mobile sm:grid-cols-sm-md-lg-xl">
        <div class="hidden sm:flex flex-start pb-48">
            <Nav_Column></Nav_Column>
        </div>

        <div class="grid w-full grid-rows-mobile sm:grid-rows-sm-md-lg-xl">
            <div class="ToolbarContainer border-b border-dark-5">
                <slot name="ToolbarSlot"></slot>
            </div>
            <div class="w-full ">
                <slot name="ContentSlot"></slot>
            </div>
        </div>
        <div class="flex sm:hidden">
            <NavRow></NavRow>
        </div>
    </div>


</template>