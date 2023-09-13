<script setup lang="ts">
import Nav_Column from '@/components/nav/NavColumn.vue';
</script>

<template>
    <div class="PagePadding"></div>
    <div class="flex mx-auto flex-shrink-0 flex-start">
        <div class="flex pb-[300px]">
            <Nav_Column></Nav_Column>
        </div>
    </div>

    <div class="grid grid-rows-[86px_1fr]">
        <div class="ToolbarContainer px-2 border-b border-dark-5">
            <div>
                <slot name="ToolbarSlot"></slot>
            </div>

        </div>
        <div class="ContentContainer container ">
            <slot name="ContentSlot"></slot>
        </div>

    </div>
    <div class="PagePadding"></div>


</template>