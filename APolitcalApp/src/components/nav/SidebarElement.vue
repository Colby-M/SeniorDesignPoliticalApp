<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';
import { computed } from 'vue';

const props = defineProps({
    sidebarElementText: {
      type: String,
      reqiured: true
    },
    sidebarIconName: {
        type: String,
        required: true
    },
    sidebarElementIsActive: {
        type: Boolean,
        required: true
    }
});

const textClass = computed( () => {
    return props.sidebarElementIsActive ? 'text-highlight text-lg font-regular' : 'text-dark font-regular text-lg group-hover:text-highlight duration-200' ;
});

const iconClass = computed( () => {
    return props.sidebarElementIsActive ? 'static-highlight' : 'animate-dark';
});

</script>


<template>
    <div class="group flex justify-center items-center px-2 lg:justify-start lg:gap-1 lg:pr-8"> 
        <IconBase :iconColor="iconClass" iconSize="medium" :iconName="sidebarIconName"></IconBase>
        <div class="hidden lg:block lg:w-16">
            <span :class="textClass"> {{ sidebarElementText }} </span>
        </div>
    </div>
</template>
