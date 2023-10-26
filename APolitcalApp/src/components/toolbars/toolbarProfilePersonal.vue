<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'

const createClicked = () => {
    //Add Refresh Function
}

const filterClicked = () => {
    //Add Refresh Function
}

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="create-lg" @create="createClicked"></ButtonBase>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="create-sm" @create="createClicked"></ButtonBase>
        </template>

        <template #toolbar-search-filter>
            <SearchBar></SearchBar>
        </template>
    </toolbarBase>
</template>