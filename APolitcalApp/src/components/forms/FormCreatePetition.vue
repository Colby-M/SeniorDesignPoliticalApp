<script setup lang="ts">
import IconBase from '../icons/IconBase.vue';
import { reactive } from 'vue';
import formFieldsTagBox from './formFields/formFieldsTagBox.vue';
const emit = defineEmits()

const createFormData = reactive({
    contentType: null,
    contentTitle: {
        contentText: null,
        conentLocked: null,
    },
    contentDescription: {
        contentText: null,
        contentLocked: null,
    },
    contentGoalSigners: {
        contentText: null,
        contentLocked: null,
    },
    contentScope: {
        contentText: null,
        contentLocked: null,
    }

})

const emitClosePopup = () => {
    emit('close-popup')
}


</script>

<template>
    <div class="flex absolute flex-col bg-dark/50 items-center justify-center px-6 py-8 mx-auto h-full w-full">
        <div class="bg-white rounded-lg bg-light shadow w-full max-w-md">
            <div class="p-8 space-y-6">
                <div>
                    <div href="#" class="grid grid-cols-2 font-light mb-6 text-2xl text-dark">
                        <div class="flex items-center">
                            <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
                            Create
                        </div>
                        <button @click="emitClosePopup" class="justify-self-end"> <IconBase iconColor="animate-dark" iconName="exit" iconSize="medium"/> </button>                        
                    </div>
                </div>
                <h1 class="text-2xl font-bold leading-tight tracking-tight text-dark">
                </h1>
                <form class="space-y-6" action="#">
                    <formFieldsTagBox></formFieldsTagBox>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-dark">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••••••••••" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" required="true">
                    </div>
                    <a href="#" class="text-sm font-extralight justify-self-end text-dark hover:underline">Forgot password?</a>
                    <div class="flex flex-row gap-2">
                        <button type="submit" class="w-1/2 mx-auto bg-light border border-border text-dark text-sm font-medium rounded-full block hover:bg-dark/10 p-2.5 focus:border-dark">Save Draft</button>
                        <button type="submit" class="w-1/2 mx-auto bg-highlight/90 border border-border text-light text-sm font-medium rounded-full block hover:bg-highlight/70 p-2.5 focus:border-dark">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>