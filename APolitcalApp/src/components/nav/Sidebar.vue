<script setup lang="ts">
import SidebarElement from './SidebarElement.vue';
import SidebarLogo from './SidebarLogo.vue';
import { RouterLink, useRoute } from 'vue-router';
import router from '@/router';
import { ref } from 'vue';
import IconBase from '../icons/IconBase.vue';

const sidebarData = ref([
    {text: 'Profile',   icon: 'profile',  path: 'profile'},
    {text: 'Discover',  icon: 'discover', path: 'discover'},
    {text: 'Review',    icon: 'review',   path: 'review'},
    /* Leaving here for future {text: 'Settings',  icon: 'settings', path: 'settings'}, */
]);


function isActive(path: string): boolean {
    return router.currentRoute.value.name == path;
}

const emit = defineEmits();

const emitShowCreatePopup = () => {
    emit('show-create-popup')
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
            <div class="w-full items-center justify-center flex">
                <button @click="emitShowCreatePopup" class="w-[36px] h-[36px] px-[7px] rounded-full py-1 bg-highlight/70 lg:w-full hover:bg-highlight/60">
                    <p class="hidden text-light font-medium lg:block">Create</p>
                    <div class="lg:hidden">
                        <IconBase iconName="create" iconColor="static-light" iconSize="medium"></IconBase>
                    </div>
                </button>
            </div>
        </nav>
</template>