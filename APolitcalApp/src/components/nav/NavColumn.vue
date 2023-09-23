<script setup lang="ts">
import NavElement_IconText from './NavElement.vue';
import IconBase from '../icons/IconBase.vue';
import IconProfile from '../icons/IconProfile.vue';
import IconReview from '../icons/IconReview.vue';
import IconDiscover from '../icons/IconDiscover.vue';
import IconCreate from '../icons/IconCreate.vue';
import IconSettings from '../icons/IconSettings.vue';


</script>

<template>
    <div>
        <div class="NavElementSpacing flex flex-col flex-grow self-stretch justify-between items-start gap-2 min-h-[424px] max-h-[654px]">
                <div class="flex py-8">
                    <RouterLink to="/profile">
                        <NavElement_IconText>
                            <template #Icon>
                                <IconBase iconColor="dark" iconSize="medium"> <IconProfile/> </IconBase>
                            </template>
                            <template #Header>tempLogo</template>
                        </NavElement_IconText>
                    </RouterLink>
                </div>

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
                        <template #Header>review & sign</template>
                    </NavElement_IconText>
                </RouterLink>
                <RouterLink to="/create">
                    <NavElement_IconText>
                        <template #Icon>
                            <IconBase iconColor="dark" iconSize="medium"> <IconCreate/> </IconBase>
                        </template>
                        <template #Header>create petition</template>
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
        </div>
    </div>
</template>