<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'

const followClicked = () => {
    //Add Refresh Function
}

const blockClicked = () => {
    //Add Refresh Function
}

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg>
            <ButtonBase buttonType="follow-lg" @follow="followClicked"></ButtonBase>
            <ButtonBase buttonType="block-lg" @block="blockClicked"></ButtonBase>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="follow-sm" @follow="followClicked"></ButtonBase>
            <ButtonBase buttonType="block-sm" @block="blockClicked"></ButtonBase>
        </template>

        <template #toolbar-search-filter>
            <SearchBar></SearchBar>
        </template>
    </toolbarBase>
</template>