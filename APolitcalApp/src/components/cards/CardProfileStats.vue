<script setup lang="ts">

</script>

<template>

<RouterLink to="linkToPetition">
    <div class="group flex flex-row w-64 h-14 border-dark rounded-full border gap-4 items-center bg-light hover:border-dark duration-300">
        <div class="w-14 h-14 flex rounded-full items-center justify-center bg-dark">
            <!-- TODO Replace Icon Base with link to users profile image (Work with backend to define this process) -->
            <IconBase iconColor="static-light" iconName="locked" iconSize="large"></IconBase>
        </div>
        <span class="text-dark font-normal text-sm">flipper</span>
    </div>
    </RouterLink>

</template>