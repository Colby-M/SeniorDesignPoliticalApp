<script setup lang="ts">
import SidebarElement from './SidebarElement.vue';
import SidebarLogo from './SidebarLogo.vue';
</script>

<template>
        <nav class="SidebarElementSpacing flex-col flex-grow shrink items-center gap-3 justify-between inline-flex self-stretch max-h-112 lg:items-start">
            <SidebarLogo></SidebarLogo>
            
            <RouterLink to="profile">
                <SidebarElement sidebarElementText="profile" sidebarIconName="profile"></SidebarElement>
            </RouterLink>

            <RouterLink to="discover">
                <SidebarElement sidebarElementText="discover" sidebarIconName="discover"></SidebarElement>
            </RouterLink>

            <RouterLink to="review">            
                <SidebarElement sidebarElementText="review" sidebarIconName="review"></SidebarElement>
            </RouterLink>

            <RouterLink to="create">            
                <SidebarElement sidebarElementText="create" sidebarIconName="create"></SidebarElement>
            </RouterLink>

            <RouterLink to="settings">            
                <SidebarElement sidebarElementText="settings" sidebarIconName="settings"></SidebarElement>
            </RouterLink>

        </nav>
</template>