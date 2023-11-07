<script lang="ts" setup>
import supabase from '@/lib/supabaseClient';
import IconBase from '../icons/IconBase.vue';
import ButtonBase from '../button/ButtonBase.vue'
import { useAuthStore } from '@/stores/Auth';
import router from '@/router';


/*--------------------------------------
                Types
---------------------------------------*/
const emit = defineEmits()
const currentUserid = useAuthStore().session?.user.id === undefined ? '' : <string>useAuthStore().session?.user.id;

const props = defineProps<{
  petitionTitle: string; 
  petitionSummary: string; 
  petitionId:string; 
  petitionLocked:boolean;
  uservotes:string[];
}>();

const reviewPetition = () => {
  router.push({path: 'review', query: {id: props.petitionId}})
}

async function approvePetition(){
  let userVoteArray = props.uservotes;

  /* Check that user has not already voted on the petition */
  if (userVoteArray.indexOf(currentUserid) === -1) {
    userVoteArray.push(currentUserid)
    await supabase.from('Petitions').update({uservotes: userVoteArray}).eq('id', props.petitionId)


  }
}

async function denyPetition() {
  let userVoteArray = props.uservotes;
  let indexOfId = userVoteArray.indexOf(currentUserid)
  /* Check that user has not already voted on the petition */
  if (indexOfId !== -1) {
    
    userVoteArray.splice(indexOfId, 1)

    await supabase.from('Petitions').update({uservotes: userVoteArray}).eq('id', props.petitionId)


  }

}




</script>

<template>
    <div class="grid grid-cols-1 grid-rows-1 w-[344px] h-[406px] bg-light">
      <div class="w-[338px] h-[400px] bg-dark/90"></div>
      <div class="w-[338px] h-[400px] ml-[6px] mt-[6px] bg-highlight">
        <div class="flex group w-[314px] h-[376px] m-[12px] border-dashed border-light border py-4 justify-center">
          <div class="flex flex-col gap-3 px-1 pt-3">
            <div class="group flex flex-row w-64 h-10 px-0.5 border-dark rounded-lg border gap-1 items-center bg-light hover:border-dark duration-300">
              <span class="text-dark font-medium text-sm">{{ props.petitionTitle }}</span>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 w-64 h-48 border rounded-lg shadow-inner bg-light border-dark overflow-y-auto">
                <div class="w-6 h-6 flex rounded-full items-center justify-center bg-transparent">
                    <IconBase v-if="props.petitionLocked" iconColor="static-dark" iconName="locked" iconSize="small"></IconBase>
                    <IconBase v-if="!props.petitionLocked" iconColor="static-dark" iconName="unlocked" iconSize="small"></IconBase>
                </div>
                <p class="text-dark font-normal text-sm text-center px-4 py-2">{{ props.petitionSummary }}</p>
            </div>
            <div class="w-64 flex flex-row justify-between">
                <ButtonBase buttonType="deny-sm" @deny-petition="denyPetition"/>
                <ButtonBase buttonType="review-sm" @review="reviewPetition"/>
                <ButtonBase buttonType="approve-sm" @approve-petition="approvePetition"/>
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>
