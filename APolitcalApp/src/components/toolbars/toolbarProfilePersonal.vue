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
            <ButtonBase buttonType="create-lg" @show-create-popup="createClicked"></ButtonBase>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="create-sm" @show-create-popup="createClicked"></ButtonBase>
        </template>

        <template #toolbar-search-filter>
        </template>
    </toolbarBase>
</template>