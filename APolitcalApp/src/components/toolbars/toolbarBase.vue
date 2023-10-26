<script setup lang="ts">

</script>

<template>
    <div class="hidden sm:block">
        <div class="flex flex-row items-center justify-center gap-4">
            <div class="flex items-center justify-between">
                <slot name="toolbar-buttons-lg"></slot>
            </div>
            <div class="flex items-center justify-between">
                <slot name="toolbar-search-filter"></slot>
            </div>
        </div>
    </div>
    <div class="block sm:hidden">
        <div class="flex flex-row items-center justify-center gap-4">
            <div class="flex items-center justify-between">
                <slot name="toolbar-buttons-sm"></slot>
            </div>
            <div class="flex items-center justify-between">
                <slot name="toolbar-search-filter"></slot>
            </div>
        </div>
    </div>
</template>