<script lang="ts" setup>
import { computed } from 'vue';

import goalSlider from '../slider/goalSlider.vue'
import IconBase from '../icons/IconBase.vue';

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

const props = defineProps<petitionTypeReview>(); 

const goalString = computed( () => 
  {
    return ( `${props.petitionGoal} of ${props.petitionGoal} signatures`) 
  }
)

</script>

<template>

    <div class="bg-white rounded-lg border w-[92.5%] border-border bg-light-highlight drop-shadow-sm overflow-y-auto xs:w-[448px]">
      <div class="p-8 space-y-6">
        <div href="#" class="flex row font-light text-start mb-6 text-xl justify-between text-dark">
          <div class="flex items-center">
            <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
            {{props.petitionTitle}}
          </div>                    
        </div>
        <form class="space-y-6 items-center justify-center mx-auto" action="#">           
          <!-- Petition Summary -->
          <label name="summary"> 
            <div class="flex items-center gap-2">
              <p>Solution</p>
              <IconBase v-if="props.petitionLocked" iconName="locked" iconColor="static-dark" iconSize="small"></IconBase>
              <IconBase v-if="!props.petitionLocked" iconName="unlocked" iconColor="static-dark" iconSize="small"></IconBase>
            </div>
            <textarea name="summary" readonly maxlength="512" id="petition-summary" v-model="props.petitionSummary" class="border h-32 border-border text-dark text-sm top-1 rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title..."></textarea>                       
          </label>

          <!-- Petition Goal -->
          <div class="flex flex-col">
            <goalSlider :currentNumber="$props.petitionSignatures" :goalNumber="props.petitionGoal"></goalSlider>
          </div>

          <!-- Petition Scope Elements -->
          <div class="flex flex-col">
              <label>Petition Scope
                  <input id="steps-range" disabled="true" readonly :value="petitionScope" type="range" min="1"  max="4" step="1" class="w-full accent-highlight h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
              </label>
              <div class="flex justify-between mt-0.5">
                  <span class="font-light text-dark">local</span>
                  <span class="font-light text-dark">regional</span>
                  <span class="font-light text-dark">national</span>
                  <span class="font-light text-dark">global</span>
              </div>
          </div>

          <!-- Generated Tag Elements -->
          <div class="flex flex-wrap gap-1 justify-center">
            <div v-for="element in props.petitionTags" class="flex flex-row border px-2 items-center border-border rounded-full hover:bg-dark/10">
              <div class="flex items-center">
                  <p class="font-light text-dark">{{ element }}</p>
              </div>                      
            </div>
          </div>

          <!-- Petition Save And Submit Buttons -->
          <div class="flex flex-col text-center text-dark text-sm gap-2">
              <div class="flex flex-row gap-2">
              </div>
            </div>
        </form>
      </div>
    </div>

</template>