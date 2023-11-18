<script setup lang="ts">
import ButtonSignInOptions from '../button/ButtonSignInOptions.vue';
import IconBase from '../icons/IconBase.vue';
import {computed, reactive, ref } from 'vue';
import HCaptcha from "@hcaptcha/vue3-hcaptcha"

/* AUTH Components */
import { useAuthStore } from '../../stores/Auth';

const verified = ref(false);
const expired = ref(false);
const token = ref("");
const eKey = ref("");
const error = ref("");
const authStore = useAuthStore();

function onVerify(tokenStr: string, ekey: string) {
  verified.value = true;
  token.value = tokenStr;
  eKey.value = ekey;
  console.log(`Callback token: ${tokenStr}, ekey: ${ekey}`);
}

const input = reactive({
    username: null,
    password: null,
    confirmPassword: null,
    validated: true
});

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true
    }
})

const visible = computed( () => {
    return props.isVisible
})

const emit = defineEmits();


const validateForm = () =>{
    /* passwords do not match, do not submit and warn the user */
    if(input.password === input.confirmPassword) {
        authStore.signUp(input.username, input.password, token.value)
    }
    else {
        input.validated = false;
    }
}

const emitClosePopup = () => {
    emit('close-popup');
}

/* TODO: Redirect to Discover Page on sign in */
</script>

<template>
    <div v-if="visible" class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <div class="bg-white rounded-lg bg-light shadow mt-0 w-full max-w-md overflow-y-auto">
            <div class="p-8 space-y-6">
                <div>
                    <div href="#" class="grid grid-cols-2 font-light mb-6 text-2xl text-dark">
                        <div class="flex items-center">
                            <img class="w-8 h-8 mr-2" src="../logo/testlogo2.png" alt="logo">
                            Vote Boat
                        </div>
                        <button @click="emitClosePopup" class="justify-self-end"> <IconBase iconColor="animate-dark" iconName="exit" iconSize="medium"/> </button>                        
                    </div>
                </div>
                <h1 class="text-2xl font-bold leading-tight tracking-tight text-dark">
                    Sign Up
                </h1>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-dark">Your email or Phone number</label>
                        <input type="email" name="email" id="email" v-model="input.username" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="email or phone number" required="true">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-dark">Password</label>
                        <input type="password" name="password" id="password" v-model="input.password" @input="input.validated = true" placeholder="••••••••••••••••" class="bg-light border border-border text-dark rounded-lg text-small block w-full p-2.5 focus:border-dark" required="true">
                    </div>
                    <div>
                        <label for="confirm password" class="block mb-2 text-sm font-medium text-dark">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" v-model="input.confirmPassword" placeholder="confirm password" @input="input.validated = true" class="bg-light border border-border text-dark rounded-lg text-small block w-full p-2.5 focus:border-dark" required="true">
                        <p v-if="input.validated === false" class="text-sm font-normal justify-self-end text-dark">Passwords do not match</p>
                    </div>
                    <!-- TODO: Add Redirect to Forgot Password Page -->
                    <div class="w-full flex flex-col gap-2 items-center justify-center">
                        <HCaptcha sitekey="10000000-ffff-ffff-ffff-000000000001" @verify="onVerify"></HCaptcha>
                        <button type="button" @click="validateForm" class="w-1/2 mx-auto bg-dark/90 border font-medium text-sm border-border justify-self-auto text-light rounded-full hover:bg-dark/70 duration-300 p-2.5">Sign up</button>
                    </div>
                    <div class="flex items-center">
                        <div class="flex-1 border-b border-border"></div>
                        <span class="px-2">or</span>
                        <div class="flex-1 border-b border-border"></div>
                    </div>
                    <div class="w-full flex items-center justify-center">

                        <ButtonSignInOptions buttonType="sign-up-github"></ButtonSignInOptions>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
