<script setup lang="ts">
/* TODO
-------------
BACKEND PEOPLE: Fill in function calls to database 

*/
import IconBase from '../icons/IconBase.vue';
import { reactive, ref } from 'vue';
const emit = defineEmits()
const createFormData = reactive({

    contentType: <number>0,
/*  contentType =
        0: Question
        1: Petition   */
    contentTitle: {
        text: <string>'',
        contentEditable: <boolean>true,
    },
    contentDescription: {
        text: <string>'',               /*  text limited to 512 characters */
        contentEditable: <boolean>true,
    },
    contentGoalSigners: {
        contentText: <number>0,
        contentEditable: <boolean>true,
    },
    contentTagStore: {
        tagField: <string>'',
        tagArray: <string[]>[],         /*  each tag is limited to 25 characters */
        contentEditable: <boolean>true,
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

const statusQuestionLockError = ref(false)
const statusPetitionContentError = ref(false)

const validateCreateForm = () => {
    /* Reset Error Messages */
    statusPetitionContentError.value = false
    statusQuestionLockError.value = false

    /* If petition summary exists ALL Fields must be populated */
    if (createFormData.contentDescription.text != ''){
        /* If all fields are populated it is a petition... submit it*/
        if (   (createFormData.contentTitle.text !== '')
            && (createFormData.contentGoalSigners.contentText !== 0)
            && (createFormData.contentTagStore.tagArray.length > 0)) 
        {
            /* Change content type to petition and call send function*/
            createFormData.contentType = 1
            submitPetitionForm()
        }
        /* Field Is Missing Show Error */
        else {
            statusPetitionContentError.value = true
        }
    }

    /* If petition title exists with no summary ALL Fields must be editable */
    else if(createFormData.contentTitle.text != '') {
        /* If all fields are editable it is a question...submit it */
        if (   createFormData.contentDescription.contentEditable
            && createFormData.contentGoalSigners.contentEditable
            && createFormData.contentTagStore.contentEditable
            && createFormData.contentTitle.contentEditable) 
        {
            /* Change content type to question and call send function */
            createFormData.contentType = 0
            submitQuestionForm()
        }

        /* Field Is Missing Show Error */
        else {
            statusQuestionLockError.value = true
        }
    }

    else {
        /* Do Nothing */
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


function submitQuestionForm() {
    /* TODO: Send data to database form  */
}

function submitPetitionForm() {
    /* TODO: Send data to database form  */   
}

function submitPetitionDraftForm() {
    /* TODO: Send data to database form  */   
}

</script>

<template>
    <div class="flex absolute flex-col items-center bg-dark sm:bg-dark/50 justify-center px-6 py-8 mx-auto h-full w-full">
        <div class="bg-white rounded-lg border border-border bg-light drop-shadow-sm w-full max-w-md overflow-y-auto">
            <div class="p-8 space-y-6">
                <div href="#" class="flex row font-light text-start mb-6 text-2xl justify-between text-dark">
                    <div class="flex items-center">
                        <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
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
                            <div class="text-right flex flex-row gap-2">
                                <div v-if="createFormData.contentTitle.contentEditable">
                                    <IconBase iconColor="dark" iconSize="small" iconName="editable"></IconBase>
                                </div>
                                <div v-if="!createFormData.contentTitle.contentEditable">
                                    <IconBase iconColor="dark" iconSize="small" iconName="locked"></IconBase>
                                </div>
                                <label class="relative inline-flex cursor-pointer">
                                    <input id="petition-title-lock" type="checkbox" v-model="createFormData.contentTitle.contentEditable" class="sr-only peer">
                                    <div class="w-9 h-5 bg-dark peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-light after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light after:border-dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-highlight"></div>
                                </label>
                            </div>
                        </div>

                        <input type="title" name="title" id="petitionTitle" v-model="createFormData.contentTitle.text" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title...">                      
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
                                <div class="text-right flex flex-row gap-2">
                                    <div v-if="createFormData.contentGoalSigners.contentEditable">
                                        <IconBase iconColor="dark" iconSize="small" iconName="editable"></IconBase>
                                    </div>
                                    <div v-if="!createFormData.contentGoalSigners.contentEditable">
                                        <IconBase iconColor="dark" iconSize="small" iconName="locked"></IconBase>
                                    </div>
                                    <label class="relative inline-flex cursor-pointer">
                                        <input id="petition-goal-lock" type="checkbox" v-model="createFormData.contentGoalSigners.contentEditable" class="sr-only peer">
                                        <div class="w-9 h-5 bg-dark peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-light after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light after:border-dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-highlight"></div>
                                    </label>
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
                                <div class="text-right flex flex-row gap-2">
                                    <div v-if="createFormData.contentTagStore.contentEditable">
                                        <IconBase iconColor="dark" iconSize="small" iconName="editable"></IconBase>
                                    </div>
                                    <div v-if="!createFormData.contentTagStore.contentEditable">
                                        <IconBase iconColor="dark" iconSize="small" iconName="locked"></IconBase>
                                    </div>
                                    <label class="relative inline-flex cursor-pointer">
                                        <input id="petition-tag-lock" type="checkbox" v-model="createFormData.contentTagStore.contentEditable" class="sr-only peer">
                                        <div class="w-9 h-5 bg-dark peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-light after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light after:border-dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-highlight"></div>
                                    </label>
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
                            <button type="button" name="save-draft" @click="submitPetitionDraftForm" class="test w-1/2 mx-auto bg-light border border-border text-dark text-sm font-medium rounded-full block hover:bg-dark/10 p-2.5 focus:border-dark">Save Draft</button>
                            <button type="button" name="submit-petition" @click="validateCreateForm" class="test w-1/2 mx-auto bg-highlight/90 border border-border text-light text-sm font-medium rounded-full block hover:bg-highlight/70 p-2.5 focus:border-dark">Create</button>
                        </div>
                        <p v-if="statusPetitionContentError ">This petition is missing required fields</p>
                        <p v-if="statusQuestionLockError">To submit a question all prompts must be set to editable</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>