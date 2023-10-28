<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface sliderValues {
  goalNumber: number;
  currentNumber: number;
}

const props = defineProps<sliderValues>()

const value = ref(0); 
const goalReached = ref(false);

const labelStyles = computed(() => {
  value.value = (props.currentNumber / props.goalNumber) * 100

  let left = ''

  if(value.value >= 100) {
    value.value = 100
    const percentage = 100;
    goalReached.value = true
    left = `calc(${percentage}% - ${percentage * 0.35}px)`;
  }
  else{
    const percentage = value.value;
  }
  return {
    left,
    top: '35px',  // Adjust this value if needed to position the label above the progress bar
  };
});
</script>

<template>
  <div class="relative">
    <!-- Progress Bar Container -->
    <label>Goal: {{ props.goalNumber }}
      <div class="bg-light border border-border rounded h-2">
        <!-- Filled Progress -->
        <div class="bg-highlight rounded h-2" :style="{ width: `${value}%` }"></div>
      </div>
    </label>
    <!-- The Label to display the value -->
    <div class="absolute text-xs border border-border text-white rounded px-1" :style="labelStyles">
      {{ props.currentNumber }}
    </div>
  </div>
</template>
