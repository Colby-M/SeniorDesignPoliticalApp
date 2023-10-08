<script lang="ts" setup>
import CardPetitionTitle from './CardPetitionTitle.vue';


const props = defineProps({
    petitionObject: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div class="flex flex-col w-53 gap-2 h-53 px-1 py-3">
        <CardPetitionTitle :petitionTitle="props.petitionObject.petitionTitle" :petitionId="props.petitionObject.petitionId"></CardPetitionTitle>
        <div class="w-53 h-30 border rounded-[28px] border-border px-3 py-1">
            <p class="text-dark font-normal text-center">{{ props.petitionObject.petitionSummary }}</p>
        </div>
    </div>

</template>