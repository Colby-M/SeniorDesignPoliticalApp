<script setup lang="ts">
import Sidebar_Column from '../nav/Sidebar.vue';
import NavRow from '../nav/NavRow.vue';
import FormCreatePetition from '../forms/FormCreatePetition.vue';


import { ref } from 'vue';
/* 
        <div class="w-[338px] h-[400px] bg-dark  absolute"></div>
        <div class="w-[338px] h-[400px] ml-[24px] mt-[24px] bg-highlight absolute">
          <div class=" p-4 w-full h-full border border-dotted"></div>
        </div>
*/

const showCreatePopup = ref(false)
</script>



<template>
    <FormCreatePetition v-if="showCreatePopup" @close-popup="showCreatePopup=false"></FormCreatePetition>
    <div class="grid w-full h-screen justify-center grid-cols-mobile sm:grid-cols-sm-md-lg-xl">
        <div class="hidden sm:flex flex-start sm:pb-24 max-h-screen">
            <Sidebar_Column @show-create-popup="showCreatePopup = true"></Sidebar_Column>
        </div>

        <div class="grid w-full h-full grid-rows-mobile max-h-screen sm:px-2 sm:grid-rows-sm-md-lg-xl">
            <div class="border-b border-border flex px-2 justify-center items-center">
                <slot name="ToolbarSlot"></slot>
            </div>
            <div class="max-h-[80vh] sm:max-h-[100vh] overflow-y-auto">
                <slot name="ContentSlot"></slot>
            </div>
            <div class="flex bg-light sm:hidden">
                <NavRow @show-create-popup="showCreatePopup = true"></NavRow>
            </div>
        </div>

    </div>


</template>