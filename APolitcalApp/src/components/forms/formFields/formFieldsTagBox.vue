<script setup lang="ts">
import IconBase from '@/components/icons/IconBase.vue';
import { reactive } from 'vue';

const tagStore = reactive({
    tagField: <string>'',
    tagArray: <string[]>[]
})

const constructTags = () => {
    if (tagStore.tagField.includes(',')){
        /* Extract tag and trim whitespace */
        let newContentTags = tagStore.tagField.split(',')   
        let cleanTag = newContentTags[0].trim()

        /* always remove tags if comma is entered */
        tagStore.tagField = ''

        /* If text preceding the comma exists and is not already a tag add it */
        if (cleanTag !== '' && !tagStore.tagArray.includes(cleanTag)) {
            tagStore.tagArray.push(cleanTag)
        }
    }
    else {
        /* Do Nothing */
    }
} 

function removeTag(tag: string){
    let indexToRemove = tagStore.tagArray.indexOf(tag)
    if (indexToRemove !== -1) {
        tagStore.tagArray.splice(indexToRemove, 1)
    }
}

</script>

<template>
    <div class="flex flex-col gap-2">  
        <div class="flex flex-row space-x-2">
            <div class="flex flex-col">
                <label>Signature Goal</label>
                <input type="goal" name="goal" id="goal" class="bg-light border w-3/3 border-border text-dark text-sm rounded-lg p-2.5 focus:border-dark" placeholder="goal">
            </div>
            <div class="flex flex-col">
                <label>Tags</label>
                <input type="tags" name="tags" id="tags" v-model="tagStore.tagField" @input="constructTags" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="comma seperated tags...">        
            </div>
        </div>
        
        <div class="flex flex-wrap gap-2 justify-center">
            <div v-for="element in tagStore.tagArray" @click="removeTag(element)" class="flex flex-row border px-1 items-center border-border rounded-full hover:bg-dark/10">
                <button class="flex items-center">
                    <p class="font-light text-dark">{{ element }}</p>
                    <IconBase iconColor="animate-dark" iconName="exit" iconSize="small"/>
                </button>                      
            </div>
        </div>
    </div>
</template>