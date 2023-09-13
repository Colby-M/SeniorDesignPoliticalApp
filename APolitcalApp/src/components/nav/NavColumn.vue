<script setup lang="ts">
import NavElement_IconText from './NavElementIconText.vue';
import ICON64_ProfileBlack from '../icons/ICON64_ProfileBlack.vue';
import ICON64_DiscoverBlack from '../icons/ICON64_DiscoverBlack.vue';
import ICON64_ReviewBlack from '../icons/ICON64_ReviewBlack.vue';
import ICON64_CreateBlack from '../icons/ICON64_CreateBlack.vue';
import ICON64_SettingsBlack from '../icons/ICON64_SettingsBlack.vue';

</script>

<template>
    <div class="NavElementSpacing flex flex-col flex-grow self-stretch justify-between items-start gap-3 min-h-[424px] max-h-[654px]">
            <img class="w-16 h-16" src="@/logo/LogoTest2.png" />
           <RouterLink to="/profile">
               <NavElement_IconText>
                   <template #Icon>
                       <ICON64_ProfileBlack></ICON64_ProfileBlack>
                   </template>
                   <template #Header>profile</template>
               </NavElement_IconText>
           </RouterLink>
           <RouterLink to="/discover">
               <NavElement_IconText>
                   <template #Icon>
                       <ICON64_DiscoverBlack></ICON64_DiscoverBlack>
                   </template>
                   <template #Header>discover</template>
               </NavElement_IconText>
           </RouterLink>
           <RouterLink to="/review">
               <NavElement_IconText>
                   <template #Icon>
                       <ICON64_ReviewBlack></ICON64_ReviewBlack>
                   </template>
                   <template #Header>review & sign</template>
               </NavElement_IconText>
           </RouterLink>
           <RouterLink to="/create">
               <NavElement_IconText>
                   <template #Icon>
                       <ICON64_CreateBlack>
                       </ICON64_CreateBlack>
                   </template>
                   <template #Header>create petition</template>
               </NavElement_IconText>
           </RouterLink>
           <RouterLink to="/settings">
               <NavElement_IconText>
                   <template #Icon>
                       <ICON64_SettingsBlack></ICON64_SettingsBlack>
                   </template>
                   <template #Header>settings</template>
               </NavElement_IconText>
           </RouterLink>
    </div>
</template>