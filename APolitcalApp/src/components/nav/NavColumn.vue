<script setup lang="ts">
import NavElement_IconText from './NavElement.vue';
import IconBase from '../icons/IconBase.vue';
import IconProfile from '../icons/IconProfile.vue';
import IconReview from '../icons/IconReview.vue';
import IconDiscover from '../icons/IconDiscover.vue';
import IconCreate from '../icons/IconCreate.vue';
import IconSettings from '../icons/IconSettings.vue';
import NavLogo from './NavLogo.vue';


</script>

<template>
        <nav class="NavElementSpacing flex-col flex-grow shrink items-center gap-3 justify-between inline-flex self-stretch max-h-[444px] lg:items-start">
                <NavLogo></NavLogo>
                <RouterLink to="/profile">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconProfile/> </IconBase>
                        </template>
                        <template #Header>profile</template>
                    </NavElement_IconText>
                </RouterLink>
                <RouterLink to="/discover">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconDiscover/> </IconBase>
                        </template>
                        <template #Header>discover</template>
                    </NavElement_IconText>
                </RouterLink>
                <RouterLink to="/review">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconReview/> </IconBase>
                        </template>
                        <template #Header>review</template>
                    </NavElement_IconText>
                </RouterLink>
                <RouterLink to="/create">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconCreate/> </IconBase>
                        </template>
                        <template #Header>compose</template>
                    </NavElement_IconText>
                </RouterLink>
                <RouterLink to="/settings">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconSettings/> </IconBase>
                        </template>
                        <template #Header>settings</template>
                    </NavElement_IconText>
                </RouterLink>
        </nav>
</template>