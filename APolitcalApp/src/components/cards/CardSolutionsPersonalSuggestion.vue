<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonBase from '../button/ButtonBase.vue';

const props = defineProps({
    linkedPetition: {
        type: String,
        required: true,
    },

})

const suggestion = ref('')

const submitSuggestion = () => {
    // Send Suggestion to database 
}

const discardSuggestion = () => {
    // Send Suggestion to database 
}

</script>

<template>
    <div class="w-96 h-64">
        <div class=" w-96 h-56 border border-dashed border-dark rounded-lg">
         <textarea class="w-full h-full rounded-lg px-2 text-center resize-none" v-model="suggestion" placeholder="your suggestion..." />
        </div>
        <div class="w-full flex relative bottom-5 items-end flex-row gap-2 justify-end px-2">
            <ButtonBase buttonType="discard-xs" @discard="discardSuggestion"></ButtonBase>
            <ButtonBase buttonType="suggest" @suggest="submitSuggestion"></ButtonBase>

        </div>
    </div>
</template>