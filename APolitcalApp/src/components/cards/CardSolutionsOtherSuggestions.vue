<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonBase from '../button/ButtonBase.vue';

const props = defineProps({
    linkedPetition: {
        type: String,
        required: true,
    },
    suggestionText:  {
        type: String,
        required: true,
    },
    uservotes: {
        type: Number,
        required: true
    }
})

function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  const units = ['k', 'm', 'b', 't'];

  let unitIndex = -1;
  let scaledNum = num;

  while (scaledNum >= 1000 && unitIndex < units.length - 1) {
    scaledNum /= 1000;

    unitIndex++;
  }

  // Convert the number to a string
  const scaledNumStr = scaledNum.toString();

  // Find the position of the decimal point
  const dotIndex = scaledNumStr.indexOf('.');
  
  if (dotIndex === -1) {
    return scaledNum.toFixed(0) + units[unitIndex]
  }
  

  //If number is greater than 10000 do not display decimals
  if (scaledNum > 10){

    const end = Math.min(dotIndex + 1, scaledNumStr.length);
    scaledNum = parseFloat(scaledNumStr.substring(0, end));

    return scaledNum.toString() + units[unitIndex]
  }

  // Otherwise, truncate the number to the specified number of decimal places
  const end = Math.min(dotIndex + 1 + 1, scaledNumStr.length);
  scaledNum = parseFloat(scaledNumStr.substring(0, end));
  
  return scaledNum.toString() + units[unitIndex]

}

onMounted(() => {
    //Read Supabase Data for Solution Text and Votes from Suggestion ID
        //Check if approved or disapproved by the viewing user (populate refs upvote/downvote)
        //Get number of approvals (populate card ref)
        
})

const upvote   = ref(false)
const downvote = ref(false)
const upvoteNumber = ref(Number)

const upvoteSuggestion = () => {
    //Add Call to Supabase
    if(upvote.value === true) {
        upvote.value = false
    }
    else{
        upvote.value = true
        downvote.value = false
    }

}

const downvoteSuggestion = () => {
    //Add Call to Supabase
    if(downvote.value === true){
        downvote.value = false
    }
    else{
        downvote.value = true
        upvote.value = false
    }

}

</script>

<template>
    <div class="w-96 h-64">
        <div class=" w-96 h-56 border border-dark rounded-lg">
            <textarea readonly class="w-full bg-light-highlight h-full rounded-lg px-2 text-center resize-none" v-model="props.suggestionText" />
        </div>
        <div class="w-full flex relative bottom-5 items-end flex-row gap-2 justify-end px-2">
            <ButtonBase v-if="downvote" buttonType="discard-xs" @discard="downvoteSuggestion"></ButtonBase>
            <ButtonBase v-if="!downvote" buttonType="discard-xs-light" @discard="downvoteSuggestion"></ButtonBase>
            <div class="relative w-16 h-9">
                <div class="w-8 h-9 z-40 absolute left-0">
                    <ButtonBase v-if="upvote" buttonType="approve-xs" @approve="upvoteSuggestion"></ButtonBase>
                    <ButtonBase v-if="!upvote" buttonType="approve-xs-light" @approve="upvoteSuggestion"></ButtonBase>
                </div>
                <div class="w-[68px] h-9 z-30 left-0 absolute text-xs flex justify-end items-center px-1 bg-light-highlight rounded-[32px] border border-dark">{{formatNumber(props.uservotes)}}
                </div>    
            </div>
        </div>
    </div>
</template>