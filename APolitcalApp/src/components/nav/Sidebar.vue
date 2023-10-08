<script setup lang="ts">
import SidebarElement from './SidebarElement.vue';
import SidebarLogo from './SidebarLogo.vue';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';

/* TODO: Add dynamic routing to user specific profile page*/
const sidebarData = ref([
    {text: 'Profile',   icon: 'profile',  path: 'profile'},
    {text: 'Discover',  icon: 'discover', path: 'discover'},
    {text: 'Review',    icon: 'review',   path: 'review'},
    {text: 'Create',    icon: 'create',   path: 'create'},
    {text: 'Settings',  icon: 'settings', path: 'settings'},
    {text: 'DevTests',  icon: 'editable', path: 'devTest'}
]);

const Route = useRoute()

function isActive(path: string): boolean {
    return Route.name === path
}

</script>

<template>
        <nav class="SidebarElementSpacing flex-col flex-grow shrink items-center gap-3 justify-between inline-flex self-stretch max-h-[400px] lg:items-start">
            <SidebarLogo></SidebarLogo>
            <div v-for="element in sidebarData" :key="element.text">
                <RouterLink :to="element.path">
                    <SidebarElement :sidebarIconName="element.icon" :sidebarElementText="element.text" :sidebarElementIsActive="isActive(element.path)"></SidebarElement>
                </RouterLink>
            </div>

        </nav>
</template>