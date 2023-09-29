<template>
    <div class="SidebarElementContainer flex justify-center items-center px-2 lg:justify-start lg:gap-1 lg:pr-8"> 
        <div class="SidebarElementIcon"></div> 
            <slot name="Icon"></slot>
        <div class="SidebarElementText hidden lg:block lg:w-16 text-dark font-medium leading-10">
            <slot name="Header"></slot>
        </div>
    </div>
</template>
