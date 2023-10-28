<script setup lang="ts">
import { computed, ref } from 'vue';
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
})



const upvoteSuggestion = () => {
    // Send upvote to database
}

const downvoteSuggestion = () => {
    // Send downvote to database
}

</script>

<template>
    <div class="w-96 h-64">
        <div class=" w-96 h-56 border border-dark rounded-lg">
         <textarea readonly class="w-full h-full rounded-lg px-2 text-center resize-none" v-model="props.suggestionText" />
        </div>
        <div class="w-full flex relative bottom-5 items-end flex-row gap-2 justify-end px-2">
            <ButtonBase buttonType="discard-xs" @discard="downvoteSuggestion"></ButtonBase>
            <ButtonBase buttonType="approve-xs" @suggest="upvoteSuggestion"></ButtonBase>

        </div>
    </div>
</template>