<template>
    <div class="NavElementContainer flex justify-start gap-2 items-center sm:px-4 lg:pr-8"> 
        <div class="NavElementIcon"></div> 
            <slot name="Icon"></slot>
        <div class="NavElementText hidden lg:block lg:w-28 text-dark font-medium leading-10">
            <slot name="Header"></slot>
        </div>
    </div>
</template>



<style>
    
</style>