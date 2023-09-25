<template>
    <div class="NavElementContainer flex justify-center items-center px-2 lg:justify-start lg:gap-1 lg:pr-8"> 
        <div class="NavElementIcon"></div> 
            <slot name="Icon"></slot>
        <div class="NavElementText hidden lg:block lg:w-16 text-dark font-medium leading-10 hover:text-highlight transition duration-300">
            <slot name="Header"></slot>
        </div>
    </div>
</template>



<style>
    
</style>