<script setup lang="ts">
import Sidebar_Column from '../nav/Sidebar.vue';
import NavRow from '../nav/NavRow.vue';
</script>

<template>
    <div class="grid w-screen h-screen justify-center grid-cols-mobile sm:grid-cols-sm-md-lg-xl">
        <div class="hidden sm:flex flex-start pb-48">
            <Sidebar_Column></Sidebar_Column>
        </div>

        <div class="grid w-full grid-rows-mobile sm:grid-rows-sm-md-lg-xl sm:pr-2">
            <div class="border-b border-border flex  px-2 justify-center items-center">
                <slot name="ToolbarSlot"></slot>
            </div>
            <div class="w-full flex justify-center">
                <slot name="ContentSlot"></slot>
            </div>
        </div>
        <div class="flex sm:hidden">
            <NavRow></NavRow>
        </div>
    </div>


</template>