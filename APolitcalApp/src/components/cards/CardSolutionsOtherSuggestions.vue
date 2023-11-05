<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import ButtonBase from '../button/ButtonBase.vue';

//When linking to database we should only need suggestion ID as prop
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

const numberOfVotes = ref(0)

const calculateNumberOfVotes = computed( () => {
    return(1)
})

//Add function to convert likes to formatted (eg... 3.2K rather than 3200)

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
                <div class="w-16 h-9 z-30 left-0 absolute text-xs flex justify-end px-1 items-center bg-light rounded-[32px] border border-dark">{{uservotes}}
                </div>    
            </div>
        </div>
    </div>
</template>