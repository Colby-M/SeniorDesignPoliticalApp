<script setup lang="ts">
import { useAuthStore } from '@/stores/Auth';
import supabase from '../../lib/supabaseClient';
import IconBase from '../icons/IconBase.vue';
import { reactive, ref } from 'vue';
import NinjasAPIProfFilter from '@/lib/ninjaClient';

const emit = defineEmits()

const createFormData = reactive({
    contentTitle: {
        text: <string>'',
    },
    contentDescription: {
        text: <string>'',               /*  text limited to 512 characters */
        contentEditable: <boolean>true,
    },
    contentGoalSigners: {
        contentText: <number>0,
    },
    contentTagStore: {
        tagField: <string>'',
        tagArray: <string[]>[],         /*  each tag is limited to 25 characters */
    },    
    contentScope: {
        scopeNumber: <number>2,
    /*  scopeNumber =
            1: Local
            2: Regional
            3: National
            4: Global       */
    }

})

const statusPetitionContentError = ref(false)
const isLoading = ref(false);
const profanityDetected = ref(false);

async function validateCreateForm () {
    /* Reset Error Messages */
    if (isLoading.value) return;
    statusPetitionContentError.value = false
    profanityDetected.value = false

    profanityDetected.value = (await NinjasAPIProfFilter(createFormData.contentDescription.text)) || (await NinjasAPIProfFilter(createFormData.contentTitle.text))

    /* All Fields must be populated */
    /* If all fields are populated it is a petition... submit it*/
    if (   (createFormData.contentDescription.text != '')
        && (createFormData.contentTitle.text !== '')
        && (createFormData.contentGoalSigners.contentText > 0)
        && (createFormData.contentTagStore.tagArray.length > 0)) 
    {
        /* Change content type to petition and call send function*/
        submitPetitionForm()
    }
    /* Field Is Missing Show Error */
    else {
        statusPetitionContentError.value = true
    }

}



const emitClosePopup = () => {
    emit('close-popup')
}

const constructTags = () => {
    if (createFormData.contentTagStore.tagField.includes(',')){
        /* Extract tag and trim whitespace */
        let newContentTags = createFormData.contentTagStore.tagField.split(',')   
        let cleanTag = newContentTags[0].trim()

        /* always remove tags if comma is entered */
        createFormData.contentTagStore.tagField = ''

        /* If text preceding the comma exists and is not already a tag add it */
        if (cleanTag !== '' && !createFormData.contentTagStore.tagArray.includes(cleanTag)) {
            createFormData.contentTagStore.tagArray.push(cleanTag)
        }
    }
    else {
        /* Do Nothing */
    }
} 

function removeTag(tag: string){
    let indexToRemove = createFormData.contentTagStore.tagArray.indexOf(tag)
    if (indexToRemove !== -1) {
        createFormData.contentTagStore.tagArray.splice(indexToRemove, 1)
    }
}

async function submitPetitionForm() {
    isLoading.value = true;
    supabase
        .from('Petitions')
        .insert({
            title: createFormData.contentTitle.text,
            description: createFormData.contentDescription.text,
            goal: createFormData.contentGoalSigners.contentText,
            scope: createFormData.contentScope.scopeNumber,
            tags: createFormData.contentTagStore.tagArray,
            locked: createFormData.contentDescription.contentEditable,
            userid: useAuthStore().session?.user.id
        });
    setTimeout(() => {
        isLoading.value = false;
        emitClosePopup();
    }, 1000);
}

function submitPetitionDraftForm() {
    /* TODO: Send data to database form  */   
}

</script>

<template>
    <div class="flex absolute flex-col z-50 items-center bg-dark sm:bg-dark/50 justify-center px-6 py-8 mx-auto h-full w-full">
        <div class="bg-white rounded-lg border border-border bg-light drop-shadow-sm w-full max-w-md overflow-y-auto">
            <div class="p-8 space-y-6">
                <div href="#" class="flex row font-light text-start mb-6 text-2xl justify-between text-dark">
                    <div class="flex items-center">
                        <img class="w-8 h-8 mr-2" src="../logo/testlogo2.png" alt="logo">
                        Create Petition
                    </div>
                    <button @click="emitClosePopup"> <IconBase iconColor="static-dark" iconName="exit" iconSize="medium"/> </button>                        
                </div>
                <form class="space-y-6 items-center justify-center mx-auto" action="#">
                    
                    <!-- Petition Title -->
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex-row flex items-center">
                                <span class="text-dark text-left">Title</span>
                            </div>
                        </div>

                        <input type="title" name="title" id="petitionTitle" maxlength="25" v-model="createFormData.contentTitle.text" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title...">                      
                    </div>
                     
                    <!-- Petition Summary -->
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex-row flex items-center">
                                <span class="text-dark text-left">Summary</span>
                            </div>
                            <div class="text-right flex flex-row gap-2">
                                <div v-if="createFormData.contentDescription.contentEditable">
                                    <IconBase iconColor="dark" iconSize="small" iconName="editable"></IconBase>
                                </div>
                                <div v-if="!createFormData.contentDescription.contentEditable">
                                    <IconBase iconColor="dark" iconSize="small" iconName="locked"></IconBase>
                                </div>
                                <label class="relative inline-flex cursor-pointer">
                                    <input id="petition-summary-lock" type="checkbox" v-model="createFormData.contentDescription.contentEditable" class="sr-only peer">
                                    <div class="w-9 h-5 bg-dark peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-light after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light after:border-dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-highlight"></div>
                                </label>
                            </div>
                        </div>
                        <textarea name="title" maxlength="512" id="petition-summary" v-model="createFormData.contentDescription.text" class="bg-light border h-32 border-border text-dark text-sm top-1 rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title..."></textarea>                       
                    </div>

                    <div class="flex-col items-center space-y-2 sm:flex sm:flex-row sm:gap-3 sm:space-y-0">    
                        <!-- Petition Goal -->
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center justify-between">
                                <div class="flex-row flex items-center">
                                    <span class="text-dark text-left">Signature Goal</span>
                                </div>
                            </div>
                            <input type="number" name="goal" id="goal" min="0" v-model="createFormData.contentGoalSigners.contentText" class="bg-light border border-border text-dark text-sm rounded-lg p-2.5 block focus:border-dark" placeholder="goal">                       
                        </div>
                        <!-- Petition Tags -->
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center justify-between">
                                <div class="flex-row flex items-center">
                                    <span class="text-dark text-left">Tags</span>
                                </div>
                            </div>
                            <input type="tags" name="tags" id="tags" v-model="createFormData.contentTagStore.tagField" @input="constructTags" maxlength="30" class="bg-light border border-border text-dark text-sm rounded-lg block p-2.5 focus:border-dark" placeholder="tag 1, tag 2,...">                       
                        </div>
                    </div> 

                    <!-- Generated Tag Elements -->
                    <div class="flex flex-wrap gap-1 justify-center">
                        <div v-for="element in createFormData.contentTagStore.tagArray" @click="removeTag(element)" class="flex flex-row border px-1 items-center border-border rounded-full hover:bg-dark/10">
                            <div class="flex items-center">
                                <p class="font-light text-dark">{{ element }}</p>
                                <IconBase iconColor="animate-dark" iconName="exit" iconSize="small"/>
                            </div>                      
                        </div>
                    </div>

                    <!-- Petition Scope Elements -->
                    <div class="flex flex-col">
                        <label>Petition Scope
                            <input id="steps-range" v-model="createFormData.contentScope.scopeNumber" type="range" min="1"  max="4" step="1" class="w-full accent-highlight h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
                        </label>
                        <div class="flex justify-between mt-0.5">
                            <span class="font-light text-dark">local</span>
                            <span class="font-light text-dark">regional</span>
                            <span class="font-light text-dark">national</span>
                            <span class="font-light text-dark">global</span>
                        </div>
                    </div>

                    <!-- Petition Save And Submit Buttons -->
                    <div class="flex flex-col text-center text-dark text-sm gap-2">
                        <div class="flex flex-row gap-2">
                            <!-- <button type="button" name="save-draft" @click="submitPetitionDraftForm" class="test w-1/2 mx-auto bg-light border border-border text-dark text-sm font-medium rounded-full block hover:bg-dark/10 p-2.5 focus:border-dark">Save Draft</button> -->
                            <button type="button" :disabled="isLoading" name="submit-petition" @click="validateCreateForm" class="test w-1/2 mx-auto bg-highlight/90 border border-border text-light text-sm font-medium rounded-full block hover:bg-highlight/70 p-2.5 focus:border-dark">Create</button>
                        </div>
                        <div class="loading-container" v-if="isLoading">
                            <div class="loading"></div>
                            <div id="loading-text">loading</div>
                        </div>
                        <p v-if="statusPetitionContentError ">Reqired fields are empty or invalid</p>
                        <p v-if="profanityDetected ">Our systems flagged this post for profanity</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-moz-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-webkit-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-o-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-moz-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-webkit-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @-o-keyframes rotate-loading {
        0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
        100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
    }

    @keyframes loading-text-opacity {
        0%  {opacity: 0}
        20% {opacity: 0}
        50% {opacity: 1}
        100%{opacity: 0}
    }

    @-moz-keyframes loading-text-opacity {
        0%  {opacity: 0}
        20% {opacity: 0}
        50% {opacity: 1}
        100%{opacity: 0}
    }

    @-webkit-keyframes loading-text-opacity {
        0%  {opacity: 0}
        20% {opacity: 0}
        50% {opacity: 1}
        100%{opacity: 0}
    }

    @-o-keyframes loading-text-opacity {
        0%  {opacity: 0}
        20% {opacity: 0}
        50% {opacity: 1}
        100%{opacity: 0}
    }
    .loading-container,
    .loading {
        height: 100px;
        position: relative;
        width: 100px;
        border-radius: 100%;
    }


    .loading-container { margin: 40px auto }

    .loading {
        border: 2px solid transparent;
        border-color: transparent #888 transparent #888;
        -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
        -moz-transform-origin: 50% 50%;
        -o-animation: rotate-loading 1.5s linear 0s infinite normal;
        -o-transform-origin: 50% 50%;
        -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
        -webkit-transform-origin: 50% 50%;
        animation: rotate-loading 1.5s linear 0s infinite normal;
        transform-origin: 50% 50%;
    }

    .loading-container:hover .loading {
        border-color: transparent #E45635 transparent #E45635;
    }
    .loading-container:hover .loading,
    .loading-container .loading {
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    #loading-text {
        -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
        -o-animation: loading-text-opacity 2s linear 0s infinite normal;
        -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
        animation: loading-text-opacity 2s linear 0s infinite normal;
        color: #888;
        font-family: "Helvetica Neue, "Helvetica", ""arial";
        font-size: 10px;
        font-weight: bold;
        margin-top: 45px;
        opacity: 0;
        position: absolute;
        text-align: center;
        text-transform: uppercase;
        top: 0;
        width: 100px;
    }
</style>