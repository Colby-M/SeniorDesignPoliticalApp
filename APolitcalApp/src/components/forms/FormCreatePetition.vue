<script setup lang="ts">
import IconBase from '../icons/IconBase.vue';
import { reactive } from 'vue';
import formFieldsTagBox from './formFields/formFieldsTagBox.vue';
const emit = defineEmits()
/* TODO
-------------
Fix XS resolutions
Adds scrollbar to popup and not the whole page
Fix Color of Slider
ADD Lock/editable
Add 2 page popup with question or petition selection

*/
const createFormData = reactive({
    contentType: <string>'',
    contentTitle: {
        text: <string>'',
        conentLocked: <boolean>false,
    },
    contentDescription: {
        text: <string>'',
        contentLocked: <boolean>false,
    },
    contentGoalSigners: {
        contentText: <number>0,
        contentLocked: <boolean>false,
    },
    contentTagStore: {
        tagField: <string>'',
        tagArray: <string[]>[],
    },    
    contentScope: {
        contentText: <number>0,
        contentLocked: <boolean>false,
    }

})

const validateCreateForm = () => {
    /* Check For Required Field
    
    pseudo

    If summary exists require goal, title, tags, scope
    else (no summary) only petition title rest are optional
    
    
    */
    console.log(createFormData)

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


</script>

<template>
    <div class="flex absolute flex-col items-center bg-dark sm:bg-dark/50 justify-center px-6 py-8 mx-auto h-full w-full">
        <div class="bg-white rounded-lg border border-border bg-light drop-shadow-sm w-full max-w-md animate-[ease-in_0.5s]">
            <div class="p-8 space-y-6">
                <div>
                    <div href="#" class="grid grid-cols-2 font-light mb-6 text-2xl text-dark">
                        <div class="flex items-center">
                            <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
                            Create
                        </div>
                        <button @click="emitClosePopup" class="justify-self-end"> <IconBase iconColor="static-dark" iconName="exit" iconSize="medium"/> </button>                        
                    </div>
                </div>
                <form class="space-y-6" action="#">
                    <div class="flex flex-col">
                        <label>Petition Title</label>
                        <input type="title" name="title" id="petitionTitle" v-model="createFormData.contentTitle.text" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title...">  
                    </div>
                    <div class="flex flex-col">
                        <label>Summary</label>
                        <textarea type="petition" name="title" maxlength="512" id="petitionTitle" v-model="createFormData.contentDescription.text" class="bg-light border h-32 border-border text-dark text-sm top-1 rounded-lg block w-full p-2.5 focus:border-dark" placeholder="petition title..."></textarea>  
                    </div> 
                    <div class="flex flex-row gap-6">
                            <div class="flex flex-col">
                                <label>Signature Goal</label>
                                <input type="number" name="goal" id="goal" v-model="createFormData.contentGoalSigners.contentText" class="bg-light border border-border text-dark text-sm rounded-lg p-2.5 block focus:border-dark" placeholder="goal">
                            </div>
                            <div class="flex flex-col">
                                <label>Tags</label>
                                <input type="tags" name="tags" id="tags" v-model="createFormData.contentTagStore.tagField" @input="constructTags" maxlength="30" class="bg-light border border-border text-dark text-sm rounded-lg block p-2.5 focus:border-dark" placeholder="comma seperated tags...">        
                            </div>
                    </div>
                        <div class="flex flex-wrap gap-2 justify-center">
                            <!-- Generated Tag Elements -->
                            <div v-for="element in createFormData.contentTagStore.tagArray" @click="removeTag(element)" class="flex flex-row border px-1 items-center border-border rounded-full hover:bg-dark/10">
                                <div class="tag flex items-center">
                                    <p class="font-light text-dark">{{ element }}</p>
                                    <IconBase iconColor="animate-dark" iconName="exit" iconSize="small"/>
                                </div>                      
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label>Petition Scope</label>
                            <input id="steps-range" type="range" min="1" max="4" value="2" step="1" class="w-full h-3 thumb-full bg-light rounded-lg border border-border cursor-pointer">
                            <div class="flex justify-between mt-0.5">
                                <span class="font-light text-dark">local</span>
                                <span class="font-light text-dark">regional</span>
                                <span class="font-light text-dark">national</span>
                                <span class="font-light text-dark">global</span>
                            </div>
                        </div>
                    <div class="flex flex-row gap-2">
                        <button type="button" name="save-draft" @click="validateCreateForm" class="test w-1/2 mx-auto bg-light border border-border text-dark text-sm font-medium rounded-full block hover:bg-dark/10 p-2.5 focus:border-dark">Save Draft</button>
                        <button type="button" name="submit-petition" @click="validateCreateForm" class="test w-1/2 mx-auto bg-highlight/90 border border-border text-light text-sm font-medium rounded-full block hover:bg-highlight/70 p-2.5 focus:border-dark">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>