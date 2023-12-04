<script setup lang="ts">
import toolbarBase from './toolbarBase.vue'
import ButtonBase from '../button/ButtonBase.vue'
import SearchBar from '../search/SearchBar.vue'
import IconBase from '../icons/IconBase.vue';

const emit = defineEmits(['approve-petition', 'deny-petition', 'next-petition']);

const approveClicked = () => { 
    emit('approve-petition')
}

const skipClicked = () => {
    emit('next-petition')
}

const denyClicked = () => {
    emit('deny-petition')
}

</script>

<template>
    <toolbarBase>
        <template #toolbar-buttons-lg>
            <ButtonBase buttonType="approve-lg" @approve-petition="approveClicked"></ButtonBase>
            <ButtonBase buttonType="deny-lg" @deny-petition="denyClicked"></ButtonBase>
            <button @click="skipClicked" type="button" class="text-dark bg-transparent h-14 w-[132px]focus:outline-none font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center ">
                <IconBase iconName="skip" iconColor="static-dark" iconSize="medium"></IconBase>
              Next
            </button>
        </template>

        <template #toolbar-buttons-sm>
            <ButtonBase buttonType="approve-sm" @approve-petition="approveClicked"></ButtonBase>
            <ButtonBase buttonType="deny-sm" @deny-petition="denyClicked"></ButtonBase>
            <button @click="skipClicked" type="button" class="text-light bg-transparent h-[56px] w-[56px] focus:outline-none font-medium rounded-full text-xs justify px-3 py-2.5 items-center ">
                <IconBase iconName="skip" iconColor="static-dark" iconSize="large"></IconBase>
            </button>
        </template>

        <template #toolbar-search-filter>
        </template>
    </toolbarBase>
</template>