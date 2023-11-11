<script setup lang="ts">
    import toolbarBase from './toolbarBase.vue'
    import ButtonBase from '../button/ButtonBase.vue'
    import SearchBar from '../search/SearchBar.vue'
    import { ref } from 'vue';
    const emits = defineEmits(['refresh', 'change-filter']);

    const filterValue = ref(1)

    const filterClicked = (filter: number) => {
        emits('change-filter', filter);
    }

    const toggleDropdown = () => {
        document.getElementById("dropdown-lg")?.classList.toggle("hidden");
        document.getElementById("dropdown-sm")?.classList.toggle("hidden");
    }

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="toggleDropdown"></ButtonBase>
            <div id="dropdown-lg" class="hidden">
              <label>Petition Scope
                  <input id="steps-range" type="range" min="1" @input="filterClicked(filterValue)" v-model="filterValue" max="4" step="1" class="w-full accent-highlight h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
              </label>
              <div class="flex justify-between mt-0.5">
                  <span class="font-light text-dark">local</span>
                  <span class="font-light text-dark">regional</span>
                  <span class="font-light text-dark">national</span>
                  <span class="font-light text-dark">global</span>
              </div>
            </div>

        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="toggleDropdown"></ButtonBase>
            <div id="dropdown-sm" class="hidden">
              <label>Petition Scope
                  <input id="steps-range" type="range" min="1"  max="4" step="1" @input="filterClicked(filterValue)" v-model="filterValue" class="w-full accent-highlight h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
              </label>
              <div class="flex justify-between mt-0.5">
                  <span class="font-light text-dark">local</span>
                  <span class="font-light text-dark">regional</span>
                  <span class="font-light text-dark">national</span>
                  <span class="font-light text-dark">global</span>
              </div>
            </div>
        </template>

        <!-- <template #toolbar-search-filter>
            <SearchBar></SearchBar>
        </template> -->
    </toolbarBase>
</template>
<style scoped>

</style>