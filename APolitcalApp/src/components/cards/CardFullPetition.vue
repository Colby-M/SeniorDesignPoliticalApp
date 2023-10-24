<script lang="ts" setup>
import CardPetitionTitle from './CardPetitionTitle.vue';


const props = defineProps({
    petitionObject: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div class="flex flex-col gap-2 px-1 pt-3">
        <CardPetitionTitle :petitionTitle="props.petitionObject.petitionTitle" :petitionId="props.petitionObject.petitionId"></CardPetitionTitle>
        <div class="w-64 h-48 border rounded-[28px] bg-light border-dark px-3 py-2">
            <p class="text-dark font-normal text-center">{{ props.petitionObject.petitionSummary }}</p>
        </div>
        <div class="w-64 flex flex-row justify-between">
            <button type="button" class="text-light bg-[#353B3C] hover:bg-[#353B3C]/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-[#353B3C]/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 32 32">
                      <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
                    </svg>
            </button>
            <button type="button" class="text-light bg-[#353B3C] hover:bg-[#353B3C]/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-[#353B3C]/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 32 32">
                      <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
                    </svg>
            </button> 
            <button type="button" class="text-light bg-[#353B3C] hover:bg-[#353B3C]/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-[#353B3C]/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 32 32">
                      <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
                    </svg>
            </button>  
        </div>
    </div>

</template>