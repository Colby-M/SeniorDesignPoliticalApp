<template>
    <div class="NavElementContainer flex justify-start gap-2 items-center"> 
        <div class="NavElementIcon"></div> 
            <slot name="Icon"></slot>
        <div class="NavElementText hidden md:block text-text-dark text-1xl font-medium leading-10">
            <slot name="Header"></slot>
        </div>
    </div>
</template>



<style>
    
</style>