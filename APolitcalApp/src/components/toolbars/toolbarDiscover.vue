<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'

const refreshClicked = () => {
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
            <ButtonBase buttonType="refresh-lg" @refresh="refreshClicked"></ButtonBase>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="refresh-sm" @refresh="refreshClicked"></ButtonBase>
        </template>

        <template #toolbar-search-filter>
        </template>
    </toolbarBase>
</template>