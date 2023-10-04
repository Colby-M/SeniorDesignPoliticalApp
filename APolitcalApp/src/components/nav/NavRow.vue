<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

const navRowData = ref([
    {icon: 'profile',  path: 'profile'},
    {icon: 'discover', path: 'discover'},
    {icon: 'review',   path: 'review'},
    {icon: 'create',   path: 'create'},
]);

const Route = useRoute()

function iconColoring(path: string): string {
    if (Route.name === path) {
        return 'static-highlight'
    }
    else {
        return 'animate-dark'
    }
}

</script>

<template>
<div class="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-border">
    <div class="grid h-full w-full grid-cols-4 mx-auto font-medium">
        <div v-for="element in navRowData" class="flex-col m-auto px-5">
            <RouterLink :to="element.path">
                    <IconBase :iconColor="iconColoring(element.path)" iconSize="medium" :iconName="element.icon"></IconBase>
            </RouterLink>
        </div>
    </div>
</div>
</template>
