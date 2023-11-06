<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import supabase from '@/lib/supabaseClient';
import ButtonBase from '../button/ButtonBase.vue';
import { useAuthStore } from '@/stores/Auth';

const props = defineProps({
    solutionID: {
        type: String,
        required: true,
    },
    suggestionText:  {
        type: String,
        required: true,
    },
    uservotes: {
        type: Array<string>,
        required: true
    },

})

/*--------------------------------------
           Reactive Variables
---------------------------------------*/
const upvote   = ref(false)
const downvote = ref(false)
const currentUserid = useAuthStore().session?.user.id === undefined ? '' : <string>useAuthStore().session?.user.id;
const numberOfVotes = ref(0)


const calculateNumberOfVotes = computed( () => {
    numberOfVotes.value = props.uservotes.length
})

/*--------------------------------------
            Utility Functions
---------------------------------------*/
const upvoteSuggestion = () => {
    //Add Call to Supabase
    if(upvote.value === true) {
        upvote.value = false
        numberOfVotes.value--
        denySolution()
    }
    else{
        upvote.value = true
        downvote.value = false
        numberOfVotes.value++
        approveSolution()
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
        numberOfVotes.value--
        denySolution()
    }

}

/*--------------------------------------
        Getter/Sender Functions
---------------------------------------*/
async function approveSolution(){
  let userVoteArray = props.uservotes;

  /* Check that user has not already voted on the petition */
  if (userVoteArray.indexOf(currentUserid) === -1) {
    userVoteArray.push(currentUserid)
    await supabase.from('Solution').update({uservotes: userVoteArray}).eq('id', props.solutionID)


  }
}

async function denySolution() {
  let userVoteArray = props.uservotes;
  let indexOfId = userVoteArray.indexOf(currentUserid)
  /* Check that user has not already voted on the petition */
  if (indexOfId !== -1) {
    
    userVoteArray.splice(indexOfId, 1)

    await supabase.from('Solution').update({uservotes: userVoteArray}).eq('id', props.solutionID)
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
                <div class="w-16 h-9 z-30 left-0 absolute text-xs flex justify-end px-1 items-center bg-light rounded-[32px] border border-dark">{{numberOfVotes}}
                </div>    
            </div>
        </div>
    </div>
</template>