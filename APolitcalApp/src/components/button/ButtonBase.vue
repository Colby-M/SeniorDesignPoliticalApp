<script setup lang="ts">
import IconBase from '../icons/IconBase.vue';



/* TODO: Restyle Animation To Flash Ring on Click (Low-Priority) */

const props = defineProps({
        buttonType: {
                type: String,
                required: true,
        }
})

const emit = defineEmits(['filter', 'discard', 'block', 'deny-petition', 'deny', 'refresh', 'approve','approve-petition', 'show-create-popup' ,'follow', 'review', 'suggest'])

/* Currently Unused Buttons... Keeping Here Incase Decide to use them
<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-[#FFFFFF] hover:bg-dark/90 h-[56px] w-[56px] border-2 border-dark focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-2.5 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#353B3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M7.35986 25.3333C8.2132 22.4 9.8132 21.3333 11.6532 21.3333H20.3465C22.1865 21.3333 23.7865 22.4 24.6399 25.3333 M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[48px] w-[48px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-2 py-2 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M7.35986 25.3333C8.2132 22.4 9.8132 21.3333 11.6532 21.3333H20.3465C22.1865 21.3333 23.7865 22.4 24.6399 25.3333 M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-[#FFFFFF] hover:bg-dark/90 h-[56px] w-[56px] border-2 border-dark focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-2.5 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M7.35986 25.3333C8.2132 22.4 9.8132 21.3333 11.6532 21.3333H20.3465C22.1865 21.3333 23.7865 22.4 24.6399 25.3333 M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z" stroke="#353B3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-[#FFFFFF] hover:bg-dark/90 h-[48px] w-[48px] border-2 border-dark focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M7.35986 25.3333C8.2132 22.4 9.8132 21.3333 11.6532 21.3333H20.3465C22.1865 21.3333 23.7865 22.4 24.6399 25.3333 M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z" stroke="#353B3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2  ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
  </svg>
  
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[32px] w-[32px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px- py-0.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16.7975 19.2525C16.6656 19.4799 16.4764 19.6686 16.2487 19.7998C16.021 19.931 15.7628 20 15.5 20C15.2372 20 14.979 19.931 14.7513 19.7998C14.5236 19.6686 14.3344 19.4799 14.2025 19.2525M23 16.252H8C8.59674 16.252 9.16903 16.0149 9.59099 15.5929C10.0129 15.1708 10.25 14.5984 10.25 14.0016V10.2509C10.25 8.8583 10.8031 7.5227 11.7877 6.53796C12.7723 5.55322 14.1076 5 15.5 5C16.8924 5 18.2277 5.55322 19.2123 6.53796C20.1969 7.5227 20.75 8.8583 20.75 10.2509V14.0016C20.75 14.5984 20.9871 15.1708 21.409 15.5929C21.831 16.0149 22.4033 16.252 23 16.252Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[32px] w-[32px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px- py-1 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <circle cx="16" cy="12" r="12" fill="#353B3C"/>
    <circle cx="24" cy="4" r="4" fill="#F1F5F9"/>
    <path fill-rule="evenodd" d="M16.7975 19.2525C16.6656 19.4799 16.4764 19.6686 16.2487 19.7998C16.021 19.931 15.7628 20 15.5 20C15.2372 20 14.979 19.931 14.7513 19.7998C14.5236 19.6686 14.3344 19.4799 14.2025 19.2525M23 16.252H8C8.59674 16.252 9.16903 16.0149 9.59099 15.5929C10.0129 15.1708 10.25 14.5984 10.25 14.0016V10.2509C10.25 8.8583 10.8031 7.5227 11.7877 6.53796C12.7723 5.55322 14.1076 5 15.5 5C16.8924 5 18.2277 5.55322 19.2123 6.53796C20.1969 7.5227 20.75 8.8583 20.75 10.2509V14.0016C20.75 14.5984 20.9871 15.1708 21.409 15.5929C21.831 16.0149 22.4033 16.252 23 16.252Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[24px] w-[24px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1 py-1 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-dark hover:bg-dark/90 h-[24px] w-[24px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1 py-1 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3334V26.6667C4 28.1394 5.19391 29.3334 6.66667 29.3334H25.3333C26.8061 29.3334 28 28.1394 28 26.6667V17.3334C28 15.8606 26.8061 14.6667 25.3333 14.6667Z M9.3335 14.6667V9.33336C9.33184 7.68009 9.94454 6.08518 11.0527 4.85824C12.1608 3.63131 13.6853 2.85989 15.3302 2.69374C16.9751 2.52759 18.623 2.97856 19.9541 3.95911C21.2852 4.93965 22.2045 6.37982 22.5335 8.00002" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button type="button" class="text-light bg-highlight hover:bg-highlight/90 h-[24px] w-[24px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1 py-1 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M10.6667 2L14 5.33333L5.33333 14H2V10.6667L10.6667 2Z" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>


*/

</script>

<template>




<button v-if="buttonType === 'block-lg'" @click="$emit('block')" type="button" class="text-light bg-highlight hover:bg-highlight/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Block
</button>


<button v-if="buttonType === 'deny-lg'" @click="$emit('deny-petition')" type="button" class="text-light bg-dark hover:bg-dark/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Deny
</button>

<button v-if="buttonType === 'deny-sm'" @click="$emit('deny-petition')" type="button" class="text-light bg-dark  hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button v-if="buttonType === 'refresh-lg'" @click="$emit('refresh')" type="button" class="text-light bg-dark hover:bg-dark/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill-rule="evenodd" d="M3.3335 2.66663V10.6666H11.3335M28.6668 29.3333V21.3333H20.6668 M29.3332 15.3334C29.2069 12.4154 28.126 9.61958 26.2565 7.37555C24.387 5.13152 21.8324 3.56342 18.9852 2.9122C16.138 2.26098 13.1557 2.56266 10.4966 3.7709C7.83751 4.97914 5.6487 7.02708 4.2665 9.60005M2.6665 16.6667C2.81911 19.574 3.91907 22.3515 5.79841 24.5749C7.67776 26.7984 10.2332 28.3456 13.0744 28.9804C15.9157 29.6151 18.8866 29.3025 21.5335 28.0902C24.1804 26.878 26.3578 24.8327 27.7332 22.2667" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>  
  Refresh
</button>

<button v-if="buttonType === 'refresh-sm'" @click="$emit('refresh')" type="button" class="text-light bg-dark hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M3.3335 2.66663V10.6666H11.3335M28.6668 29.3333V21.3333H20.6668 M29.3332 15.3334C29.2069 12.4154 28.126 9.61958 26.2565 7.37555C24.387 5.13152 21.8324 3.56342 18.9852 2.9122C16.138 2.26098 13.1557 2.56266 10.4966 3.7709C7.83751 4.97914 5.6487 7.02708 4.2665 9.60005M2.6665 16.6667C2.81911 19.574 3.91907 22.3515 5.79841 24.5749C7.67776 26.7984 10.2332 28.3456 13.0744 28.9804C15.9157 29.6151 18.8866 29.3025 21.5335 28.0902C24.1804 26.878 26.3578 24.8327 27.7332 22.2667" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button v-if="buttonType === 'approve-lg'" @click="$emit('approve-petition')" type="button" class="text-light bg-highlight hover:bg-highlight/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M29.3332 14.7734V16C29.3315 18.8753 28.4005 21.6729 26.679 23.9758C24.9574 26.2787 22.5376 27.9633 19.7803 28.7786C17.0231 29.5938 14.0762 29.4959 11.3791 28.4995C8.68208 27.503 6.37938 25.6615 4.81445 23.2494C3.24953 20.8374 2.50623 17.9841 2.69541 15.1151C2.88459 12.2461 3.99611 9.51512 5.86421 7.32945C7.73231 5.14378 10.2569 3.62053 13.0614 2.98688C15.866 2.35324 18.8002 2.64314 21.4265 3.81336 M29.3333 5.33337L16 18.68L12 14.68" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Approve
</button>

<button v-if="buttonType === 'approve-sm'" @click="$emit('approve-petition')" type="button" class="text-light drop-shadow-md border-dark/30 border bg-highlight hover:bg-highlight/70 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M29.3332 14.7734V16C29.3315 18.8753 28.4005 21.6729 26.679 23.9758C24.9574 26.2787 22.5376 27.9633 19.7803 28.7786C17.0231 29.5938 14.0762 29.4959 11.3791 28.4995C8.68208 27.503 6.37938 25.6615 4.81445 23.2494C3.24953 20.8374 2.50623 17.9841 2.69541 15.1151C2.88459 12.2461 3.99611 9.51512 5.86421 7.32945C7.73231 5.14378 10.2569 3.62053 13.0614 2.98688C15.866 2.35324 18.8002 2.64314 21.4265 3.81336 M29.3333 5.33337L16 18.68L12 14.68" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button v-if="buttonType === 'discard-lg'" @click="$emit('discard')" type="button" class="text-light bg-dark hover:bg-dark/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Discard
</button>

<button v-if="buttonType === 'create-lg'" @click="emit('show-create-popup')" type="button" class="text-light bg-highlight hover:bg-highlight/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M26.6668 14.7733V10.6666L18.6668 2.66663H8.00016C7.29292 2.66663 6.61464 2.94758 6.11454 3.44767C5.61445 3.94777 5.3335 4.62605 5.3335 5.33329V26.6666C5.3335 28.1333 6.5335 29.3333 8.00016 29.3333H16.0002 M18.6665 4V10.6667H25.3332M23.9998 28V20M19.9998 24H27.9998" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Create
</button>

<button v-if="buttonType === 'create-sm'" @click="emit('show-create-popup')" type="button" class="text-light bg-highlight hover:bg-highlight/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M26.6668 14.7733V10.6666L18.6668 2.66663H8.00016C7.29292 2.66663 6.61464 2.94758 6.11454 3.44767C5.61445 3.94777 5.3335 4.62605 5.3335 5.33329V26.6666C5.3335 28.1333 6.5335 29.3333 8.00016 29.3333H16.0002 M18.6665 4V10.6667H25.3332M23.9998 28V20M19.9998 24H27.9998" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button v-if="buttonType === 'follow-lg'" @click="emit('follow')" type="button" class="text-light bg-highlight hover:bg-highlight/90  h-14 w-[132px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M21.3335 28V25.3333C21.3335 23.9188 20.7716 22.5623 19.7714 21.5621C18.7712 20.5619 17.4147 20 16.0002 20H6.66683C5.25234 20 3.89579 20.5619 2.89559 21.5621C1.8954 22.5623 1.3335 23.9188 1.3335 25.3333V28 M11.3333 14.6667C14.2789 14.6667 16.6667 12.2789 16.6667 9.33333C16.6667 6.38781 14.2789 4 11.3333 4C8.38781 4 6 6.38781 6 9.33333C6 12.2789 8.38781 14.6667 11.3333 14.6667Z M26.6665 10.6666V18.6666 M30.6665 14.6666H22.6665 " stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
  Follow
</button>

<button v-if="buttonType === 'follow-sm'" @click="emit('follow')" type="button" class="text-light bg-highlight hover:bg-highlight/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center dark:focus:ring-[#4285F4]/55 ">
    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M21.3335 28V25.3333C21.3335 23.9188 20.7716 22.5623 19.7714 21.5621C18.7712 20.5619 17.4147 20 16.0002 20H6.66683C5.25234 20 3.89579 20.5619 2.89559 21.5621C1.8954 22.5623 1.3335 23.9188 1.3335 25.3333V28 M11.3333 14.6667C14.2789 14.6667 16.6667 12.2789 16.6667 9.33333C16.6667 6.38781 14.2789 4 11.3333 4C8.38781 4 6 6.38781 6 9.33333C6 12.2789 8.38781 14.6667 11.3333 14.6667Z M26.6665 10.6666V18.6666 M30.6665 14.6666H22.6665" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>


<button v-if="buttonType === 'discard-sm'" @click="emit('discard')" type="button" class="text-light bg-dark hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center ">
  <svg class="w-8 h-8 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z M5.39502 5.39502L26.605 26.605" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd"/>
  </svg>
</button>

<button v-if="buttonType === 'review-sm'" @click="emit('review')" type="button" class="text-light bg-light drop-shadow-md hover:bg-light/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none border-dar focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center ">
  <IconBase iconName="review" iconColor="static-dark"></IconBase>
</button>

<button v-if="buttonType === 'filter'" @click="emit('filter')" type="button" class="text-light bg-transparent hover:bg-dark/90 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center  ">
  <IconBase iconName="filter" iconSize="large"></IconBase>
</button>

<button v-if="buttonType === 'suggest'" @click="emit('suggest')" type="button" class="text-light bg-highlight justify-center hover:bg-highlight/90 h-[36px] w-[36px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center  ">
  <IconBase iconName="editable" iconSize="medium" icon-color="static-light"></IconBase>
</button>

<button v-if="buttonType === 'discard-xs'" @click="emit('discard')" type="button" class="text-light bg-dark justify-center hover:bg-dark/90 h-[36px] w-[36px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center  ">
  <IconBase iconName="disapprove" iconSize="medium" icon-color="static-light"></IconBase>
</button>

<button v-if="buttonType === 'approve-xs'" @click="emit('approve')" type="button" class="text-light bg-highlight justify-center hover:bg-highlight/90 h-[36px] w-[36px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center  ">
  <IconBase iconName="approve" iconSize="medium" icon-color="static-light"></IconBase>
</button>
</template>
