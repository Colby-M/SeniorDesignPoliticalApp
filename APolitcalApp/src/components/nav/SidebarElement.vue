<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';

const props = defineProps({
    sidebarElementText: {
      type: String,
      reqiured: true
    },
    sidebarIconName: {
        type: String,
        required: true
    }
});

</script>


<template>
    <div class="group flex justify-center items-center px-2 lg:justify-start lg:gap-1 lg:pr-8"> 
        <IconBase iconColor="animate-dark" iconSize="medium" :iconName="sidebarIconName"></IconBase>
        <div class="hidden lg:block lg:w-16">
            <span class="text-dark font-medium leading-10 group-hover:text-highlight duration-200"> {{ sidebarElementText }} </span>
        </div>
    </div>
    
</template>
