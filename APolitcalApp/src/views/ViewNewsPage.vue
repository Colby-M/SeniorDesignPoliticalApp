<!-- Main page for News section -->

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <template #ContentSlot>
        
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold">News</h1>
            <p class="text-xl">Coming soon...</p>
        </div>
        <!-- This is the news section I'm gonna use the grid system to build it out using card components -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                News Title
              </h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                  consectetur ex officiis at doloremque, quam nisi! Asperiores
                  molestiae, quo similique...
                </p>
              </div>
              <div class="mt-5">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Read more
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>          
    </template>
  </MainLayout>
</template>