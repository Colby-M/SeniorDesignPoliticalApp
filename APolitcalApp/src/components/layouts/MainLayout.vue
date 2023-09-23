<script setup lang="ts">
import Nav_Column from '@/components/nav/NavColumn.vue';
/* sm:w-[500px] md:w-[576px] lg:w-[640px] */
</script>

<template>
    <div class="grid w-full justify-center mx-auto grid-cols-sm-md-lg-xl">
        <div class="hidden flex-shrink-0 flex-start sm:flex">
            <Nav_Column></Nav_Column>
        </div>

        <div class="grid w-full grid-rows-Content-sm-md-lg-xl pr-8">
            <div class="ToolbarContainer border-b border-dark-5">
                <slot name="ToolbarSlot"></slot>
            </div>
            <div class="ContentContainer container ">
                <slot name="ContentSlot"></slot>
            </div>
        </div>
    </div>


</template>