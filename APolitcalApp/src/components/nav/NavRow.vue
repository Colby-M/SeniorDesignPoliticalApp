<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue';


</script>

<template>
<div class="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-border">
    <div class="grid h-full w-full grid-cols-4 mx-auto font-medium">
        <div class="flex-col m-auto px-5">
            <RouterLink to="/profile">
                    <IconBase iconColor="animate-dark" iconSize="medium" iconName="profile"></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/discover">
                    <IconBase iconColor="animate-dark" iconSize="medium" iconName="discover"></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/create">
                    <IconBase iconColor="animate-dark" iconSize="medium" iconName="create"></IconBase>
            </RouterLink>
        </div>
        <div class="flex-col m-auto px-5">
            <RouterLink to="/review">
                    <IconBase iconColor="animate-dark" iconSize="medium" iconName="review"></IconBase>
            </RouterLink>
        </div>
    </div>
</div>
</template>

<style lang="">
    
</style>