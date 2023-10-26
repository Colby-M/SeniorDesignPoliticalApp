<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'

const approveClicked = () => { 
    //Add Refresh Function
}

const filterClicked = () => {
    //Add Refresh Function
}

const denyClicked = () => {
    //Add Refresh Function
}

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="approve-lg" @approve="approveClicked"></ButtonBase>
            <ButtonBase buttonType="deny-lg" @deny="denyClicked"></ButtonBase>

        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="filter" @filter="filterClicked"></ButtonBase>
            <ButtonBase buttonType="approve-sm" @approve="approveClicked"></ButtonBase>
            <ButtonBase buttonType="deny-sm" @deny="denyClicked"></ButtonBase>
        </template>

        <template #toolbar-search-filter>
            <SearchBar></SearchBar>
        </template>
    </toolbarBase>
</template>