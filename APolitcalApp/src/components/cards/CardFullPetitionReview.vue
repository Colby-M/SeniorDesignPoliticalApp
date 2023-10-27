<script lang="ts" setup>
import { computed } from 'vue';

import IconBase from '../icons/IconBase.vue';
import ButtonBase from '../button/ButtonBase.vue'

import router from '@/router';
import type { RouteLocationRaw } from 'vue-router';

const emit = defineEmits()

interface petitionTypeReview {
  petitionTitle: string; 
  petitionSummary: string; 
  petitionId:string;
  petitionScope: number;
  petitionGoal: number;
  petitionSignatures: number;
  petitionTags: Array<string>; 
  petitionLocked:boolean;
}

const goalString = computed( () => 
  {
    return ( `${props.petitionGoal} of ${props.petitionGoal} signatures`) 
  }
)

const props = defineProps<petitionTypeReview>(); 



const denyPetition = () => {
  emit('test')
}

const approvePetition = () => {
  //TODO: Add approve database call, save petition id to history database
}

</script>

<template>
    <div class="flex flex-col items-center bg-dark sm:bg-dark/50 justify-center px-6 py-8 mx-auto h-full w-full">
        <div class="bg-white rounded-lg border border-border bg-light drop-shadow-sm w-full max-w-md overflow-y-auto">
            <div class="p-8 space-y-6">
                <div href="#" class="flex row font-light text-start mb-6 text-2xl justify-between text-dark">
                    <div class="flex items-center">
                        <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
                        Create Petition
                    </div>                    
                </div>
                <form class="space-y-6 items-center justify-center mx-auto" action="#">
                    
                    <!-- Petition Title -->
                    <label class="">Title
                        <input type="title" name="title" id="petitionTitle" maxlength="25" v-model="props.petitionTitle" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title...">                      
                    </label> 

                    <!-- Petition Summary -->
                    <label name="summary"> Summary
                      <textarea name="summary" maxlength="512" id="petition-summary" v-model="props.petitionSummary" class="bg-light border h-32 border-border text-dark text-sm top-1 rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title..."></textarea>                       
                    </label>

                    <div class="flex-col items-center space-y-2 sm:flex sm:flex-row sm:gap-3 sm:space-y-0">    
                        <!-- Petition Goal -->
                        <div class="flex flex-col">
                            <input name="goal" id="goal" min="0" v-model="goalString" class="bg-light border border-border text-dark text-sm rounded-lg p-2.5 block focus:border-dark" placeholder="goal">                       
                        </div>
                      
                        <!-- Petition Tags -->

                    <!-- Generated Tag Elements -->
                    <div class="flex flex-wrap gap-1 justify-center">
                        <div v-for="element in props.petitionTags" class="flex flex-row border px-1 items-center border-border rounded-full hover:bg-dark/10">
                            <div class="flex items-center">
                                <p class="font-light text-dark">{{ element }}</p>
                                <IconBase iconColor="animate-dark" iconName="exit" iconSize="small"/>
                            </div>                      
                        </div>
                    </div>

                    <!-- Petition Scope Elements -->
                    <div class="flex flex-col">
                        <label>Petition Scope
                            <input id="steps-range" :value="goalString" type="range" min="1"  max="4" step="1" class="w-full accent-highlight h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
                        </label>
                        <div class="flex justify-between mt-0.5">
                            <span class="font-light text-dark">local</span>
                            <span class="font-light text-dark">regional</span>
                            <span class="font-light text-dark">national</span>
                            <span class="font-light text-dark">global</span>
                        </div>
                    </div>

                    <!-- Petition Save And Submit Buttons -->
                    <div class="flex flex-col text-center text-dark text-sm gap-2">
                        <div class="flex flex-row gap-2">

                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>