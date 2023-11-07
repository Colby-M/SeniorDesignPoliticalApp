<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'
const emits = defineEmits(['refresh', 'change-filter']);

const refreshClicked = () => {
    emits("refresh");
}

const filterClicked = (filter: number) => {
    emits('change-filter', filter);
    toggleDropdown();
}

const toggleDropdown = () => {
    document.getElementById("dropdown")?.classList.toggle("hidden");
}

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg>
            <ButtonBase buttonType="filter" @filter="toggleDropdown"></ButtonBase>
            <ButtonBase buttonType="refresh-lg" @refresh="refreshClicked"></ButtonBase>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="toggleDropdown"></ButtonBase>
            <ButtonBase buttonType="refresh-sm" @refresh="refreshClicked"></ButtonBase>
        </template>

        <!-- <template #toolbar-search-filter>
            <SearchBar></SearchBar>
        </template> -->
    </toolbarBase>
    <div id="dropdown" class="hidden">
        <div class="bg-border absolute top-20 left-[47%] text-dark z-10 shadow-sm min-w-[100px] flex flex-col gap-1">
            <p class="py-1 px-5 bg-[#d4d4d4] hover:bg-[#e7e2e2]" @click="filterClicked(0)">Local</p>
            <p class="py-1 px-5 bg-[#d4d4d4] hover:bg-[#e7e2e2]" @click="filterClicked(1)">Regional</p>
            <p class="py-1 px-5 bg-[#d4d4d4] hover:bg-[#e7e2e2]" @click="filterClicked(2)">National</p>
            <p class="py-1 px-5 bg-[#d4d4d4] hover:bg-[#e7e2e2]" @click="filterClicked(3)">Global</p>
        </div>
    </div>
</template>
<style scoped>

</style>