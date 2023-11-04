<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ToolbarReview from '../components/toolbars/toolbarReview.vue'
import CardFullPetitionReview from '../components/cards/CardFullPetitionReview.vue';
import CardSolutionsPersonalSuggestion from '@/components/cards/CardSolutionsPersonalSuggestion.vue';
import CardSolutionsOtherSuggestions from '@/components/cards/CardSolutionsOtherSuggestions.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import supabase from '@/lib/supabaseClient';

interface petitionTypeReview {
  id: string; 
  description: string; 
  title:string;
  scope: number;
  goal: number;
  tags: Array<string>; 
  locked:boolean;
  uservotes: Array<string>;
};

interface solutionTypeReview {
  id: string; 
  description: string; 
  title:string;
  uservotes: Array<string>; 
}

const route = useRoute();
const loadingContent = ref(true);
const queryPetitionId = ref<string | null>(null);
const postArray = ref<solutionTypeReview[]>([])

const petitionContent = ref<petitionTypeReview>({ 
  id: '', 
  description: '',
  tags: [''],
  title: '',
  goal: 0,
  locked: true,
  scope: 1,
  uservotes: [],
});


onMounted(async() => {
  /* Obtain query string */
  queryPetitionId.value = route.query.id ? route.query.id?.toString() : null;
  
  /* If routed here from specific petition then load the petition*/
  if (queryPetitionId.value !== null){
    await getPostFromId()

    /* If open to suggestions load them */
    if (!petitionIsLocked()){
      await getComments(queryPetitionId.value)
    }

    loadingContent.value = false
  }

  /* Otherwise load random petition (need random functionality) */
  else {

    /* If open to suggestions load them */
    await getNextPost()
    if (!petitionIsLocked()){

      await getComments(petitionContent.value.id)
    
    }

    loadingContent.value = false
  }
});

const petitionIsLocked = () => {
  return petitionContent.value.locked
}

async function getPostFromId() {
  let { data, error } = await supabase
    .from('Petitions')
    .select<"*">()
    .eq('id', queryPetitionId.value)
    .single()
  petitionContent.value = data

};

async function getNextPost() {

  let { data, error } = await supabase
    .from('Petitions')
    .select<"*">()
    .range(0, 0)
    .single()
  petitionContent.value = data


};

async function getComments(petitionId: string){

  console.log(petitionId)
  let { data, error } = await supabase
    .from('Solution')
    .select<"*">()
    .eq('petitionid', petitionId)

  if (data !== null){
    postArray.value.push(...data ?? []);
  }  

}

function computeLikes (userid: Array<string> | null) {
  if (userid === null){
    return 0
  }
  else{
    return userid.length
  }
}

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarReview></ToolbarReview>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] w-full overflow-y-auto py-2" ref="scrollComponent">
        <div v-if="loadingContent" role="status" class="flex justify-center mt-4 mb-4">
              <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-highlight" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
        </div>
        <div v-if="!loadingContent" class="flex flex-col gap-2 items-center py-2 justify-center">
          <CardFullPetitionReview :petitionTitle="petitionContent.title" :petitionGoal="petitionContent.goal" 
                                  :petitionId="petitionContent.id" :petitionLocked="petitionContent.locked"  
                                  :petitionScope="petitionContent.scope" :petitionSummary="petitionContent.description"  
                                  :petitionTags="petitionContent.tags" :petitionSignatures="1600"/>
          <div v-if="!petitionContent.locked" class="w-full flex flex-wrap gap-4 justify-center border-t border-dashed px-6 py-4 border-border h-96">
            <CardSolutionsPersonalSuggestion :linkedPetition="petitionContent.id"></CardSolutionsPersonalSuggestion>
            <CardSolutionsOtherSuggestions :linkedPetition="petitionContent.id" :suggestionText="petitionContent.description" :uservotes="computeLikes(petitionContent.uservotes)"></CardSolutionsOtherSuggestions>
            <CardSolutionsOtherSuggestions v-for="post in postArray" :linkedPetition="post.id" :suggestionText="post.description" :uservotes="computeLikes(post.uservotes)"></CardSolutionsOtherSuggestions>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>