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
    <div class="grid grid-cols-1 grid-rows-1 w-[83%] xxs:w-[344px] h-[386px] bg-light">
      <div class="w-[98%] h-[380px] bg-dark/90"></div>
      <div class="w-[98%] h-[380px] ml-[2%] mt-[6px] bg-highlight">
        <div class="flex group w-[91%x] h-[356px] m-[4%] border-dashed border-light border py-4 justify-center">
          <div class="flex flex-col w-[100%] items-center justify-center gap-3 pt-3">
            <div class="w-[85%] h-8 px-0.5 border-dark rounded-lg text-center border gap-1 bg-light hover:border-dark duration-300">
              <span class="text-dark font-medium text-sm">{{ props.petitionTitle }}</span>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 w-[85%] h-48 rounded-lg bg-light overflow-y-auto">
                <div class="w-6 h-6 flex rounded-full items-center justify-center bg-transparent">
                    <IconBase v-if="props.petitionLocked" iconColor="static-dark" iconName="locked" iconSize="small"></IconBase>
                    <IconBase v-if="!props.petitionLocked" iconColor="static-dark" iconName="unlocked" iconSize="small"></IconBase>
                </div>
                <p class="text-dark font-normal h-48 text-sm text-center px-4 py-2 border rounded-lg border-dark">{{ props.petitionSummary }}</p>
            </div>
            <div class="w-[85%] flex flex-row justify-between">
                <ButtonBase buttonType="deny-sm" @deny-petition="denyPetition"/>
                <ButtonBase buttonType="review-sm" @review="reviewPetition"/>
                <ButtonBase buttonType="approve-sm" @approve-petition="approvePetition"/>
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>
