<script lang="ts" setup>
import ButtonSignInOptions from '../button/ButtonSignInOptions.vue';
import FormSignIn from '../forms/FormSignIn.vue';


import { ref } from 'vue';
/* TODO: Upscale The Logo So Edges are Smooth at High Resolution */
/* TODO: Get Functions for auth from colby */
/* TODO: Redirect to this page if no user is signed in */
    
const showPopup = ref(false);
const ShowSignIn = ref(false);
const ShowSignUp = ref(false);

</script>

<template>

    <div v-if="showPopup" class="w-full h-screen absolute">
        <FormSignIn :isVisible="showPopup" @close-popup="showPopup = false"></FormSignIn>
    </div>

    <div class="grid w-full h-screen justify-center grid-cols-mobile z-10 sm:grid-cols-landing">
        <div class="hidden sm:flex justify-end border-border my-auto"> 
            <div class="flex items-center pr-8">
                <img src="../logo/VoteBoatLogo_Nero AI_Standard_x4.png" class="sm:h-[284px] sm:w-[284]"/>
            </div>
        </div>
        <div class="my-auto mx-auto sm:mr-auto sm:ml-0">
            <div class="flex flex-col gap-4 items-center justify-center sm:pl-12">
                <img src="../logo/VoteBoatLogo.png" class="w-44 h-44 sm:hidden"/>
                <ButtonSignInOptions buttonType="sign-up-github"></ButtonSignInOptions>
                <p class="font">or</p>
                <ButtonSignInOptions buttonType="sign-up"></ButtonSignInOptions>
                <div class="h-2 border-t border-dark w-50"></div>
                <ButtonSignInOptions buttonType="sign-in" @show-popup="showPopup = true"></ButtonSignInOptions>            
            </div>
        </div>
</div>



</template>