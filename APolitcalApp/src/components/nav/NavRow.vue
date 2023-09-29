<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';
import IconProfile from '../icons/IconProfile.vue';
import IconDiscover from '../icons/IconDiscover.vue';
import IconCreate from '../icons/IconCreate.vue';
import IconReview from '../icons/IconReview.vue';


</script>

<template>
<div class="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-border">
    <div class="grid h-full w-full grid-cols-4 mx-auto font-medium">
        <div class="flex-col m-auto px-5">
            <RouterLink to="/profile">
                    <IconBase iconColor="dark" iconSize="medium"><IconProfile/></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/discover">
                    <IconBase iconColor="dark" iconSize="medium"><IconDiscover/></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/create">
                    <IconBase iconColor="dark" iconSize="medium"><IconCreate/></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/review">
                    <IconBase iconColor="dark" iconSize="medium"><IconReview/></IconBase>
            </RouterLink>
        </div>
    </div>
</div>
</template>

<style lang="">
    
</style>