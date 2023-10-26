<script lang="ts" setup>
import router from '@/router';
import { useAuthStore } from '../../stores/Auth';
const authStore = useAuthStore();

const emit = defineEmits(['show-sign-in', 'show-sign-up']);

const props = defineProps({
  buttonType: {
        type: String,
        required: true,
    }
});


const emitShowSignIn = () => {
  emit('show-sign-in')
};

const emitShowSignUp = () => {
  emit('show-sign-up')
};


</script>



<template>
    <button v-if="props.buttonType === 'sign-up-github'" name="sign-up-github" @click="authStore.signInWithGithub()" class="text-dark bg-light border border-border rounded-full  w-50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-dark/30 duration-300">
      <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
      </svg>
      Sign up with Github
    </button>

    <button v-if="props.buttonType === 'sign-in-github'" name="sign-in-github" @click="authStore.signInWithGithub()" class="text-dark bg-light border border-border w-50 rounded-full font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-dark/30 duration-300">
      <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
      </svg>
      Sign in with Github
    </button>

    <button v-if="props.buttonType === 'sign-up'" @click="emitShowSignUp" name="sign-up" class="text-light bg-dark/90 border w-50 border-border rounded-full font-medium text-sm px-5 py-2.5 text-center items-center dark:hover:bg-dark/80 duration-300">
      Create Account
    </button>

    <button v-if="props.buttonType === 'sign-in'" @click="emitShowSignIn" name="sign-in" class="text-light bg-highlight/90 border w-50 border-border rounded-full font-medium text-sm px-5 py-2.5 text-center items-center dark:hover:bg-highlight/80  duration-300">
      Sign In
    </button>
</template>
