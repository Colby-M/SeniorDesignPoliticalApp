<script lang="ts" setup>
import CardPetitionTitle from './CardPetitionTitle.vue';
import ButtonBase from '../button/ButtonBase.vue'
import router from '@/router';
const props = defineProps({
    petitionObject: {
        type: Object,
        required: true,
    }
})

const denyPetition = () => {
  //TODO: Add deny database call
}

const reviewPetition = () => {
  //TODO: Link to petition to review
  router.push('review/' + props.petitionObject.petitionId)
}

const approvePetition = () => {
  //TODO: Add approve database call, save petition id to history database
}

</script>

<template>
  <div class="w-[350px] h-[412px] bg-light group-hover:drop-shadow-2xl duration-700">
  <div class="w-[338px] h-[400px] bg-dark/90 absolute"></div>
  <div class="w-[338px] h-[400px] ml-[6px] mt-[6px] bg-highlight absolute">
    <div class="flex group w-[314px] h-[376px] m-[12px] border-dashed border-light border py-4 justify-center">
    <div class="flex flex-col gap-2 px-1 pt-3">
        <CardPetitionTitle :petitionTitle="props.petitionObject.petitionTitle" :petitionId="props.petitionObject.petitionId"></CardPetitionTitle>
        <div class="w-64 h-48 border rounded-[28px] bg-light border-dark px-3 py-2">
            <p class="text-dark font-normal text-center">{{ props.petitionObject.petitionSummary }}</p>
        </div>
        <div class="w-64 flex flex-row justify-between">
            <ButtonBase buttonType="deny-sm" @deny="denyPetition"/>
            <ButtonBase buttonType="review-sm" @review="reviewPetition"/>
            <ButtonBase buttonType="approve-sm" @approve="approvePetition"/>
        </div>
    </div>
  </div>
  </div>
</div>
</template>