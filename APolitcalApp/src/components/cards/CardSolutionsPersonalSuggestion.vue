<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonBase from '../button/ButtonBase.vue';
import supabase from '@/lib/supabaseClient';
import { useAuthStore } from '@/stores/Auth';
import { Console } from 'console';

const props = defineProps({
    linkedPetition: {
        type: String,
        required: true,
    },

})

const suggestion = ref('')

async function submitSuggestion(){
    let formattedSuggestion = suggestion.value.trim()
    console.log('submitting...')

    if (formattedSuggestion !== ''){
        supabase
            .from('Solution')
            .insert({
                title: suggestion.value,
                petitionid: props.linkedPetition,
                userid: useAuthStore().session?.user.id
            });
        console.log('submitted...')
    }

    else{
        
    }
}

async function discardSuggestion() {
    suggestion.value = ''
    let { data, error } = await supabase
        .from('Solution')
        .select<"*">()
    console.log(data)
}

</script>

<template>
    <div class="w-96 h-64">
        <div class=" w-96 h-56 border border-dashed border-dark rounded-lg">
         <textarea class="w-full h-full rounded-lg bg-light-highlight px-2 text-center resize-none" v-model="suggestion" placeholder="your suggestion..." />
        </div>
        <div class="w-full flex relative bottom-5 items-end flex-row gap-2 justify-end px-2">
            <ButtonBase buttonType="discard-xs" @discard="discardSuggestion"></ButtonBase>
            <ButtonBase buttonType="suggest" @suggest="submitSuggestion"></ButtonBase>

        </div>
    </div>
</template>