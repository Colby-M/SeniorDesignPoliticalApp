<template>
    <div class="IconTextContainer w-72 h-16 justify-end items-center inline-flex"> 
        <div class="IconTextFrame justify-start items-center gap-2.5 inline-flex"></div> 
            <slot name="Icon"></slot>
        <div class="Profile w-52 h-11 text-text-dark text-3xl font-medium leading-10">
            <slot name="Header"></slot>
        </div>
    </div>
</template>



<style>
    
</style>