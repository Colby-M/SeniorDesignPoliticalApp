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

<button v-if="buttonType === 'filter'" @click="emit('filter')" type="button" class="text-light bg-transparent hover:bg-dark/10 h-[56px] w-[56px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-3 py-2.5 items-center  ">
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

<button v-if="buttonType === 'discard-xs-light'" @click="emit('discard')" type="button" class="text-light border border-dark bg-light justify-center hover:bg-dark/10 h-[36px] w-[36px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center  ">
  <IconBase iconName="disapprove" iconSize="medium" icon-color="static-dark"></IconBase>
</button>

<button v-if="buttonType === 'approve-xs-light'" @click="emit('approve')" type="button" class="text-light border border-dark bg-light justify-center hover:bg-dark/10 h-[36px] w-[36px] focus:ring-4 focus:outline-none focus:ring-dark/50 font-medium rounded-full text-xs justify px-1.5 py-1.5 items-center  ">
  <IconBase iconName="approve" iconSize="medium" icon-color="static-dark"></IconBase>
</button>
</template>
