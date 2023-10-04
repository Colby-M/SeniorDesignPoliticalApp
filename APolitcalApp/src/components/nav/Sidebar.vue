<script setup lang="ts">
import SidebarElement from './SidebarElement.vue';
import SidebarLogo from './SidebarLogo.vue';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

/* TODO: Add dynamic routing to user specific profile page*/
const sidebarData = ref([
    {text: 'profile',  icon: 'profile',  path: 'profile'},
    {text: 'discover', icon: 'discover', path: 'discover'},
    {text: 'review',   icon: 'review',   path: 'review'},
    {text: 'create',   icon: 'create',   path: 'create'},
    {text: 'settings', icon: 'settings', path: 'settings'},
    {text: 'devTests',  icon: 'editable', path:'devTest'}
]);

const Route = useRoute()

function isActive(path: string): boolean {
    return Route.name === path
}

</script>

<template>
        <nav class="SidebarElementSpacing flex-col flex-grow shrink items-center gap-3 justify-between inline-flex self-stretch max-h-112 lg:items-start">
            <SidebarLogo></SidebarLogo>
            <div v-for="element in sidebarData" :key="element.text">
                <RouterLink :to="element.path">
                    <SidebarElement :sidebarIconName="element.icon" :sidebarElementText="element.text" :sidebarElementIsActive="isActive(element.path)"></SidebarElement>
                </RouterLink>
            </div>

        </nav>
</template>