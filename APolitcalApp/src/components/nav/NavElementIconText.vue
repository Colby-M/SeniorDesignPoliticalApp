<template>
    <div class="IconTextContainer flex justify-center items-center"> 
        <div class="IconTextFrame justify-start items-center gap-2.5 inline-flex"></div> 
            <slot name="Icon"></slot>
        <div class="Profile flex grow text-text-dark text-1xl font-small leading-10 sm:hidden">
            <slot name="Header"></slot>
        </div>
    </div>
</template>



<style>
    
</style>