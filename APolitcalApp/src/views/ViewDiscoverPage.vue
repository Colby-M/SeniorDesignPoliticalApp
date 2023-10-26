<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import CardFullPetition from '@/components/cards/CardFullPetition.vue';
import ToolbarDiscover from '@/components/toolbars/toolbarDiscover.vue';

import { reactive, onMounted, onUnmounted, ref } from 'vue';
/* TODO: Implement Infinite Scoll With Petition Populating Functions */
let isLoadingPosts = ref(false)


onMounted(() => {
  let internalDiv = <HTMLElement>document.getElementById("discoverScroll");
  console.log(internalDiv)
  if(internalDiv !== null)
  {
    internalDiv.addEventListener("scroll", handleScroll)
  }

})

onUnmounted(() => {
  let internalDiv = <HTMLElement>document.getElementById("discoverScroll");
  if(internalDiv !== null)
  {
    internalDiv.removeEventListener("scroll", handleScroll)
  }
})


/* 
Sample Petition Object
*/
const testPetitionObject = reactive({
  petitionTitle: '',
  petitionId: 'test2',
  petitionSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  petitionLocked: true,
})

const petitionNames = ['Petition Test', 'Test2', 'Petition Number 2', 'Testing 3']


function getPosts(numberPosts: number) {
  let postArr = []

  for (var i = 0; i < numberPosts; i++) 
  {
    testPetitionObject.petitionTitle = petitionNames[i % petitionNames.length]
    postArr.push({testPetitionObject})
  }

  return postArr
}
const posts = ref(getPosts(6))
//const posts = <Array<{testPetitionObject: {petitionTitle: String, petitionId: String, petitionSummary:string, petitionLocked:boolean}}>>ref([getPosts(6)])
const scrollComponent = ref(null)

const loadMorePosts = () => {
  isLoadingPosts.value = true

  let newPosts = getPosts(6)
  console.log(newPosts)

  isLoadingPosts.value = false
  //posts = newPosts
 }


const handleScroll = () => {
  let element = <HTMLElement>document.getElementById("discoverScroll");
  const scrollY = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const offsetHeight = element.offsetHeight;
        const scrollThreshold = 0.8;

        if (scrollY + offsetHeight >= scrollHeight * scrollThreshold && !isLoadingPosts.value) {
            loadMorePosts();
            console.log('loadmoreposts')
        }
  /*
  if (element.getBoundingClientRect().bottom < 0) 
  {
    loadMorePosts()
  } 
  
  */
}


</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarDiscover></ToolbarDiscover>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] overflow-y-auto" ref="scrollComponent">
        <div class="flex flex-wrap gap-8 px-16 py-2 items-center justify-center">
          <CardFullPetition v-for="post in posts" :petitionObject="post"></CardFullPetition>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<style>
/* Hide scrollbar in WebKit-based browsers */
::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>