<script setup lang="ts">
import NAV_ELEMENT_IconText from './NAV_ELEMENT_IconText.vue';
import ICON64_ProfileBlack from '../icons/ICON64_ProfileBlack.vue';
import ICON64_DiscoverBlack from '../icons/ICON64_DiscoverBlack.vue';
import ICON64_ReviewBlack from '../icons/ICON64_ReviewBlack.vue';
import ICON64_CreateBlack from '../icons/ICON64_CreateBlack.vue';
import ICON64_SettingsBlack from '../icons/ICON64_SettingsBlack.vue';

</script>

<template>
    <div class="NavElementSpacing flex flex-col grow shrink self-stretch justify-between items-start gap-3">
            <img class="w-16 h-16" src="@/logo/LogoTest2.png" />
           <RouterLink to="/about">
               <NAV_ELEMENT_IconText>
                   <template #Icon>
                       <ICON64_ProfileBlack></ICON64_ProfileBlack>
                   </template>
                   <template #Header>profile</template>
               </NAV_ELEMENT_IconText>
           </RouterLink>
           <RouterLink to="/about">
               <NAV_ELEMENT_IconText>
                   <template #Icon>
                       <ICON64_DiscoverBlack></ICON64_DiscoverBlack>
                   </template>
                   <template #Header>discover</template>
               </NAV_ELEMENT_IconText>
           </RouterLink>
           <RouterLink to="/about">
               <NAV_ELEMENT_IconText>
                   <template #Icon>
                       <ICON64_ReviewBlack></ICON64_ReviewBlack>
                   </template>
                   <template #Header>review & sign</template>
               </NAV_ELEMENT_IconText>
           </RouterLink>
           <RouterLink to="/about">
               <NAV_ELEMENT_IconText>
                   <template #Icon>
                       <ICON64_CreateBlack>
                       </ICON64_CreateBlack>
                   </template>
                   <template #Header>create petition</template>
               </NAV_ELEMENT_IconText>
           </RouterLink>
           <RouterLink to="/about">
               <NAV_ELEMENT_IconText>
                   <template #Icon>
                       <ICON64_SettingsBlack></ICON64_SettingsBlack>
                   </template>
                   <template #Header>settings</template>
               </NAV_ELEMENT_IconText>
           </RouterLink>
    </div>
</template>