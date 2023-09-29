<script setup lang="ts">
import SidebarElement from './SidebarElement.vue';
import IconBase from '../icons/IconBase.vue';
import IconProfile from '../icons/IconProfile.vue';
import IconReview from '../icons/IconReview.vue';
import IconDiscover from '../icons/IconDiscover.vue';
import IconCreate from '../icons/IconCreate.vue';
import IconSettings from '../icons/IconSettings.vue';
import SidebarLogo from './SidebarLogo.vue';
</script>

<template>
        <Sidebar class="flex-col flex-grow shrink items-center gap-3 justify-between inline-flex self-stretch max-h-112 lg:items-start">
            <SidebarLogo></SidebarLogo>
            <RouterLink to="/profile">
                <SidebarElement>
                    <template #Icon>
                        <IconBase iconColor="dark" iconSize="medium"> <IconProfile/> </IconBase>
                    </template>
                    <template #Header>profile</template>
                </SidebarElement>
            </RouterLink>
            <RouterLink to="/discover">
                <SidebarElement>
                    <template #Icon>
                        <IconBase iconColor="dark" iconSize="medium"> <IconDiscover/> </IconBase>
                    </template>
                    <template #Header>discover</template>
                </SidebarElement>
            </RouterLink>
            <RouterLink to="/review">
                <SidebarElement>
                    <template #Icon>
                        <IconBase iconColor="dark" iconSize="medium"> <IconReview/> </IconBase>
                    </template>
                    <template #Header>review</template>
                </SidebarElement>
            </RouterLink>
            <RouterLink to="/create">
                <SidebarElement>
                    <template #Icon>
                        <IconBase iconColor="dark" iconSize="medium"> <IconCreate/> </IconBase>
                    </template>
                    <template #Header>compose</template>
                </SidebarElement>
            </RouterLink>
            <RouterLink to="/settings">
                <SidebarElement>
                    <template #Icon>
                        <IconBase iconColor="dark" iconSize="medium"> <IconSettings/> </IconBase>
                    </template>
                    <template #Header>settings</template>
                </SidebarElement>
            </RouterLink>
        </Sidebar>
</template>