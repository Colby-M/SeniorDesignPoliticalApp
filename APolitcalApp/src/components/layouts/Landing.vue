<script lang="ts" setup>
import ButtonSignInOptions from '../button/ButtonSignInOptions.vue';
import FormSignIn from '../forms/FormSignIn.vue';
import FormSignUp from '../forms/FormSignUp.vue';

import { ref } from 'vue';
/* TODO: Upscale The Logo So Edges are Smooth at High Resolution */
/* TODO: Add Loading Component */
/* TODO: Redirect to this page if no user is signed in */
/* TODO: Redirect on sign in/Sign up */

const ShowSignIn = ref(false);
const ShowSignUp = ref(false);

</script>

<template>

    <div v-if="ShowSignIn || ShowSignUp" class="w-full h-screen absolute bg-dark/30">
        <FormSignIn :isVisible="ShowSignIn" @close-popup="ShowSignIn = false"></FormSignIn>
        <FormSignUp :isVisible="ShowSignUp" @close-popup="ShowSignUp = false"></FormSignUp>
    </div>

    <div class="grid w-full h-screen justify-center grid-cols-mobile z-10 sm:grid-cols-landing">
        <div class="hidden sm:flex justify-end border-border my-auto"> 
            <div class="flex items-center pr-8">
                <img src="../logo/testlogo2.png" class="sm:h-[284px] sm:w-[284]"/>
            </div>
        </div>
        <div class="my-auto mx-auto sm:mr-auto sm:ml-0">
            <div class="flex flex-col gap-5 items-center justify-center sm:pl-12">
                <img src="../logo/testlogo2.png" class="w-44 h-44 sm:hidden"/>
                <ButtonSignInOptions buttonType="sign-up-github"></ButtonSignInOptions>
                <p class="font">or</p>
                <ButtonSignInOptions buttonType="sign-up"  @show-sign-up="ShowSignUp = true"></ButtonSignInOptions>
                <div class="h-1 border-t border-dark w-50"></div>
                <ButtonSignInOptions buttonType="sign-in" @show-sign-in="ShowSignIn = true" ></ButtonSignInOptions>            
            </div>
        </div>
    </div>
</template>