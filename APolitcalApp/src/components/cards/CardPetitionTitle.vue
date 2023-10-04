<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';
import { RouterLink } from 'vue-router';
import { computed } from 'vue'


const props = defineProps({
    petitionTitle: {
        type: String,
        required: true
    },
    /* Need to define this format with backend */
    petitionId: {
        type: String,
        required: true
    }
});

const linkToPetition = computed(() => {
    return '/review/' + props.petitionId
})



</script>

<template>
    <RouterLink :to="linkToPetition">
        <div class="group flex flex-row w-52 h-14 rounded-full border gap-4 items-center border-border hover:border-dark duration-300">
            <div class="w-14 h-14 flex rounded-full items-center justify-center bg-dark">
                <!-- TODO Replace Icon Base with link to users profile image (Work with backend to define this process) -->
                <IconBase iconColor="static-light" iconName="profile" iconSize="medium"></IconBase>
            </div>
            <span class="text-dark font-normal">{{ petitionTitle }}</span>
        </div>
    </RouterLink>
</template>