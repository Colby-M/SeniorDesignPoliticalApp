<script setup lang="ts">
import ButtonSignInOptions from '../button/ButtonSignInOptions.vue';
import IconBase from '../icons/IconBase.vue';
import {computed, defineEmits, reactive } from 'vue';

/* AUTH Components */
import Account from '../Auth/AuthAccount.vue';
import { useAuthStore } from '../../stores/Auth';

const authStore = useAuthStore();
  const input = reactive({
    username: null,
    password: null
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

const emitClosePopup = () => {
    emit('close-popup');
}




/*    <Account v-if="authStore.session != undefined" :session="authStore.session" />
    <button v-else @click="authStore.signInWithGithub()" >
      Sign in with Github
    </button>
  </div>
  <input type="text" name="username" v-model="input.username" placeholder="Email or Phone" />
  <input type="password" name="password" v-model="input.password" placeholder="Password" />
  <button type="button" @click="authStore.signInWithCredentials(input.username, input.password)">Login</button>
  <input type="text" name="username" v-model="input.username" placeholder="Email or Phone" />
  <input type="password" name="password" v-model="input.password" placeholder="Password" />
  <button type="button" @click="authStore.signUp(input.username, input.password)">SignUp</button> */

</script>

<template>
    <div v-if="visible" class="flex flex-col bg-dark/50 items-center justify-center px-6 py-8 mx-auto h-screen">
        <div class="bg-white rounded-lg bg-light shadow md:mt-0 w-full max-w-md">
            <div class="p-8 space-y-6">
                <div>
                    <div href="#" class="grid grid-cols-2 font-light mb-6 text-2xl text-dark">
                        <div class="flex items-center">
                            <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo_Nero AI_Standard_x4.png" alt="logo">
                            Vote Boat
                        </div>
                        <button @click="emitClosePopup" class="justify-self-end"> <IconBase iconColor="dark" iconName="exit" iconSize="medium"/> </button>                        
                    </div>
                </div>
                <h1 class="text-2xl font-bold leading-tight tracking-tight text-dark">
                    Welcome Back
                </h1>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-dark">Your email or Phone number</label>
                        <input type="email" name="email" id="email" v-model="input.username" class="bg-light border border-border text-dark sm:text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="email or phone number" required="true">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-dark">Password</label>
                        <input type="password" name="password" id="password" v-model="input.password" placeholder="••••••••••••••••" class="bg-light border border-border text-dark sm:text-sm rounded-lg block w-full p-2.5 focus:border-dark" required="true">
                    </div>
                        <!--REMEMBER ME (Leaving Here If Needed Later)-->
                        <!-- <div class="flex items-start">
                                 <div class="flex items-center h-5">
                                   <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-border rounded bg-dark focus:ring-3" required="true">
                                 </div>
                                 <div class="ml-3 text-sm">
                                   <label for="remember" @click="emitRememberMe" class="text-dark">Remember me</label>
                                 </div>
                             </div> -->
                        <!-- TODO: Add Redirect to Forgot Password Page -->
                    <a href="#" class="text-sm font-extralight justify-self-end text-dark hover:underline">Forgot password?</a>
                    <button type="submit" @click="authStore.signInWithCredentials(input.username, input.password)" class="w-1/2 mx-auto bg-highlight/90 border border-border text-light sm:text-sm rounded-full block hover:bg-highlight/70 p-2.5 focus:border-dark">Sign in</button>
                    <div class="flex items-center">
                        <div class="flex-1 border-b border-border"></div>
                        <span class="px-2">or</span>
                        <div class="flex-1 border-b border-border"></div>
                    </div>
                    <div class="w-full flex items-center justify-center">
                        <ButtonSignInOptions buttonType="sign-in-github"></ButtonSignInOptions>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
