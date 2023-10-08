<script lang="ts" setup>
import CardPetitionTitle from './CardPetitionTitle.vue';

const props = defineProps({
    petitionInfoArray: {
        type: Array,
        required: true,
    }
})

</script>

<template>
    <div class="flex flex-col w-53 gap-2 h-53 px-1 py-3">
        <CardPetitionTitle v-for="petition in props.petitionInfoArray" :petitionTitle="petition.petitionTitle" :petitionId="petition.petitionId"></CardPetitionTitle>
    </div>

</template>