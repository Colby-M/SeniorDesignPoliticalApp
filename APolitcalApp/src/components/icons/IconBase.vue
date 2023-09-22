<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    iconSize: {
      type: String,
      requred: false /* Class functions default to 'large' if invalid or empty */
    },
    iconColor: {
      type: String,
      requred: false /* Class functions default to 'dark' if invalid or empty */
    }
});

const iconColorClass = computed(() => {
  switch (props.iconColor) {
        case 'dark':
          return 'stroke-icon-dark fill-transparent';
        case 'light':
          return 'stroke-icon-light fill-transparent';
        default:
          return 'stroke-icon-dark fill-transparent'; 
      }
})

const iconSizeClass = computed(() => {
  switch (props.iconSize) {
        case 'small':
          return 'w-4 h-4';
        case 'medium':
          return 'w-8 h-8';
        case 'large':
        return 'w-12 h-12';
        default:
          return 'w-12 h-12'; 
      }
})

</script>

<template>
    <div :class="iconSizeClass">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconColorClass ">
            <slot />
        </svg>
    </div>
</template>
