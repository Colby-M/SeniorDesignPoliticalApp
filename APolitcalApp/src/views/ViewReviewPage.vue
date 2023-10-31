<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ToolbarReview from '../components/toolbars/toolbarReview.vue'
import CardFullPetitionReview from '../components/cards/CardFullPetitionReview.vue';
import CardSolutionsPersonalSuggestion from '@/components/cards/CardSolutionsPersonalSuggestion.vue';
import CardSolutionsOtherSuggestions from '@/components/cards/CardSolutionsOtherSuggestions.vue';

/* 
--KMIE: Proposed Data Flow--
Load petition in

Petition should have linked suggestions in array (ids of comments in array basically)
For each element in suggestion array render CardSolutionsOtherSuggestions card

BOTH PETITIONS AND SUGGESTIONS SHOULD TRACK WHO HAS VOTED ON THEM

*/

/*TODO: ADD linked solution slot to petition table, (array of strings) pass the petition ids as props to the card SFC... can then use simple for loop */
interface petitionTypeReview {
  petitionTitle: string; 
  petitionSummary: string; 
  petitionId:string;
  petitionScope: number;
  petitionGoal: number;
  petitionTags: Array<string>; 
  petitionLocked:boolean;
}

interface petitionSuggestion {
  petitionSuggestion: string; 
  petitionId:string;
}

/* ---Test Data--- */
const testSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem. Diam in arcu cursus euismod quis. Nunc non blandit massa enim nec dui nunc. Tincidunt eget nullam non nisi est sit amet facilisis magna.'
const sampleTagArray = ['tag1', 'tag2', 'tag3', 'tag5']

const testData: petitionTypeReview[] = [
  { petitionId: '1',  petitionTitle: 'Title 1',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 1, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '2',  petitionTitle: 'Petition Title 1',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 10250},
  { petitionId: '3',  petitionTitle: 'Title 3',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '4',  petitionTitle: 'Title 4',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 2, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '5',  petitionTitle: 'Title 5',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '6',  petitionTitle: 'Title 6',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 1, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '7',  petitionTitle: 'Title 7',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 1, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '8',  petitionTitle: 'Title 8',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 4, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '9',  petitionTitle: 'Title 9',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 4, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '10', petitionTitle: 'Title 10', petitionSummary: testSummary,  petitionLocked: true , petitionScope: 2, petitionTags: sampleTagArray, petitionGoal: 1200},
  // ... add more test data as required
];

const testSuggestionData: petitionSuggestion[] = [
  {petitionSuggestion: 'we should not do that', petitionId: '2'},
  {petitionSuggestion: 'we should do that',     petitionId: '2'},
  {petitionSuggestion: 'we could do that',      petitionId: '2'},
  {petitionSuggestion: 'I dont get it',         petitionId: '2'},
];

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarReview></ToolbarReview>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] w-full overflow-y-auto py-2" ref="scrollComponent">
        <div class="flex flex-col gap-2 items-center py-2 justify-center">
          <CardFullPetitionReview :petitionTitle="testData[1].petitionTitle" :petitionGoal="testData[1].petitionGoal" 
                                  :petitionId="testData[1].petitionId" :petitionLocked="testData[1].petitionLocked"  
                                  :petitionScope="testData[1].petitionScope" :petitionSummary="testData[1].petitionSummary"  
                                  :petitionTags="testData[1].petitionTags" :petitionSignatures="1600"/>
          <div class="w-full flex flex-wrap gap-4 justify-center border-t border-dashed px-6 py-4 border-border h-96">
            <CardSolutionsPersonalSuggestion :linkedPetition="testData[1].petitionId"></CardSolutionsPersonalSuggestion>
            <CardSolutionsOtherSuggestions :linkedPetition="testData[1].petitionId" :suggestionText="testData[1].petitionSummary"></CardSolutionsOtherSuggestions>
            <CardSolutionsOtherSuggestions v-for="element in testSuggestionData" :linkedPetition="element.petitionId" :suggestionText="element.petitionSuggestion" :approved="true" :disapproved="false"></CardSolutionsOtherSuggestions>

          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>