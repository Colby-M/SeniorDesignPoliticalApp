<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import ToolbarReview from '../components/toolbars/toolbarReview.vue'
import CardFullPetitionReview from '../components/cards/CardFullPetitionReview.vue';

interface petitionTypeReview {
  petitionTitle: string; 
  petitionSummary: string; 
  petitionId:string;
  petitionScope: number;
  petitionGoal: number;
  petitionTags: Array<string>; 
  petitionLocked:boolean;
}

const testSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem. Diam in arcu cursus euismod quis. Nunc non blandit massa enim nec dui nunc. Tincidunt eget nullam non nisi est sit amet facilisis magna.'
const sampleTagArray = ['tag1', 'tag2', 'tag3', 'tag5']

const testData: petitionTypeReview[] = [
  { petitionId: '1',  petitionTitle: 'Title 1',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 0, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '2',  petitionTitle: 'Title 2',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 2, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '3',  petitionTitle: 'Title 3',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '4',  petitionTitle: 'Title 4',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 1, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '5',  petitionTitle: 'Title 5',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 2, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '6',  petitionTitle: 'Title 6',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 0, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '7',  petitionTitle: 'Title 7',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 0, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '8',  petitionTitle: 'Title 8',  petitionSummary: testSummary,  petitionLocked: true , petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '9',  petitionTitle: 'Title 9',  petitionSummary: testSummary,  petitionLocked: false, petitionScope: 3, petitionTags: sampleTagArray, petitionGoal: 1200},
  { petitionId: '10', petitionTitle: 'Title 10', petitionSummary: testSummary,  petitionLocked: true , petitionScope: 1, petitionTags: sampleTagArray, petitionGoal: 1200},
  // ... add more test data as required
];

</script>

<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarReview></ToolbarReview>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] overflow-y-auto" ref="scrollComponent">
        <CardFullPetitionReview :petitionTitle="testData[1].petitionTitle" :petitionGoal="testData[1].petitionGoal" 
                                :petitionId="testData[1].petitionId" :petitionLocked="testData[1].petitionLocked"  
                                :petitionScope="testData[1].petitionScope" :petitionSummary="testData[1].petitionSummary"  
                                :petitionTags="testData[1].petitionTags" :petitionSignatures="100"/>

      </div>
    </template>
  </MainLayout>
</template>