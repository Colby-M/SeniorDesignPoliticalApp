<script setup lang="ts">
import Sidebar_Column from '../nav/Sidebar.vue';
import NavRow from '../nav/NavRow.vue';
import ButtonSignIn from '../button/ButtonSignIn.vue';
/* TODO: Upscale The Logo So Edges are Smooth at High Resolution */
/* TODO: Get Functions for auth from colby */
</script>

<template>
    <div class="grid w-screen h-screen justify-center grid-cols-mobile sm:grid-cols-landing">
        <div class="hidden sm:flex justify-end border-border my-auto"> 
            <div class="flex items-center h-96">
                <img src="../logo/VoteBoatLogo.png" class="lg:h-[512px] lg:w-[512px]"/>
            </div>
        </div>
        <div class="my-auto mx-auto sm:mr-auto sm:ml-0">
            <div class="flex flex-col gap-4 items-center justify-center pl-4">
                <img src="../logo/VoteBoatLogo.png" class="w-44 h-44 sm:hidden"/>
                <ButtonSignIn buttonType="sign-up-github"></ButtonSignIn>
                <p class="font">or</p>
                <ButtonSignIn buttonType="sign-up"></ButtonSignIn>
                <div class="h-2 border-t border-dark w-50"></div>
                <ButtonSignIn buttonType="sign-in"></ButtonSignIn>            
            </div>
        </div>
    </div>


</template>