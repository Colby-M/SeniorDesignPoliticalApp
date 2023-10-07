<script lang="ts" setup>
import { computed } from 'vue'
import IconApprove from './IconApprove.vue';
import IconCommunity from './IconCommunity.vue';
import IconCreate from './IconCreate.vue';
import IconDisapprove from './IconDisapprove.vue';
import IconDiscover from './IconDiscover.vue';
import IconEditable from './IconEditable.vue';
import IconFilter from './IconFilter.vue';
import IconFollow from './IconFollow.vue';
import IconLocked from './IconLocked.vue';
import IconProfile from './IconProfile.vue';
import IconReview from './IconReview.vue';
import IconSettings from './IconSettings.vue';
import IconExit from './IconExit.vue';
import IconNull from './IconSettings.vue';

const props = defineProps({
    iconSize: {
      type: String,
      required: false /* Class functions default to 'large' if invalid or empty */
    },
    iconColor: {
      type: String,
      required: false /* Class functions default to 'dark' if invalid or empty */
    }, 
    iconName: {
      type: String,
      required: true
    }
});

const iconColorClass = computed(() => {
  switch (props.iconColor) {
        case 'static-dark':
          return 'stroke-dark fill-transparent';
        case 'static-light':
          return 'stroke-light fill-transparent';
        case 'static-highlight':
          return 'stroke-highlight fill-transparent';
        case 'animate-dark':
          return 'stroke-dark fill-transparent group-hover:stroke-highlight duration-100';
        default:
          return 'stroke-dark fill-transparent'; 
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

const iconComponent = computed(() => {
  switch (props.iconName) {
        case 'approve':
          return IconApprove;
        case 'community':
          return IconCommunity;
        case 'create':
          return IconCreate;
        case 'disapprove':
          return IconDisapprove;
        case 'discover':
          return IconDiscover;
        case 'editable':
          return IconEditable;
        case 'filter':
          return IconFilter;
        case 'follow':
          return IconFollow;
        case 'locked':
          return IconLocked;
        case 'profile':
          return IconProfile;
        case 'review':
          return IconReview;
        case 'settings':
          return IconSettings;
        case 'exit':
          return IconExit;
        default:
          return IconNull; 
      }
})


</script>

<template>
    <div :class="iconSizeClass">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="iconColorClass">
            <component :is="iconComponent"/>
        </svg>
    </div>
</template>
