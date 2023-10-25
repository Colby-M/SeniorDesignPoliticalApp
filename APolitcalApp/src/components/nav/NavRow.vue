<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

const Route = useRoute()

function iconColoring(path: string): string {
    if (Route.name === path) {
        return 'static-highlight'
    }
    else {
        return 'animate-dark'
    }
}

const emit = defineEmits();

const emitShowCreatePopup = () => {
    emit('show-create-popup')
}

const navRowData = ref([
    {icon: 'profile',  path: 'profile' },
    {icon: 'discover', path: 'discover'},
    {icon: 'review',   path: 'review'  },
]);

</script>

<template>
<div class="bottom-0 w-full h-16 bg-white border-t border-border">
    <div class="grid h-full w-full grid-cols-4 mx-auto font-medium">
        <div v-for="element in navRowData" class="px-5 m-auto">
                <RouterLink :to="element.path">
                    <IconBase :iconColor="iconColoring(element.path)" iconSize="medium" :iconName="element.icon"></IconBase>
                </RouterLink>
        </div>
        <div class="px-5 m-auto">
            <IconBase @click="emitShowCreatePopup" iconColor="static-dark" iconSize="medium" iconName="create"></IconBase>
        </div>
    </div>
</div>
</template>
