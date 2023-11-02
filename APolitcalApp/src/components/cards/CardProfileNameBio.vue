<script setup lang="ts">
import IconBase from '../icons/IconBase.vue';

</script>

<template>
  
    <div class="grid grid-cols-1 grid-rows-1 w-[344px] h-[250px] bg-light">
      <div class="w-[338px] h-[250px] bg-dark/90"></div>
      <div class="bg-transparent flex flex-col mt-[6px] ml-[6px]">

          <div class="w-[338px] h-[100px] ml-[6px] mt-[6px] bg-highlight">
            <div class="flex group w-[314px] h-[76px] m-[12px] border-dashed border-light border py-4 justify-center">

              <div class="flex flex-col gap-3 px-1 pt-3">
                <div class="group flex flex-row w-8 h-8 px-0.5 border-dark rounded-lg border gap-1 items-center bg-light hover:border-dark duration-300">
                  <div class=" pt-2 w-6 h-6 flex rounded-full items-center justify-center bg-transparent">
                    <IconBase iconColor="static-dark" iconName="profile" iconSize="large"></IconBase>
                 </div>
                  <span class="text-dark font-medium text-sm"></span>
                </div>
              </div>

              <div class="flex flex-col gap-3 px-1 pt-3">
                <div class="group flex flex-row w-52 h-8 px-0.5 border-dark rounded-lg border gap-1 items-center bg-light hover:border-dark duration-300">
                  <span class="text-dark font-medium text-sm">farted</span>
                </div>
              </div>
            </div>  
          </div>

         <div class="w-[338px] h-[150px] ml-[6px] mt-[6px] bg-highlight">
            <div class="flex group w-[314px] h-[126px] m-[12px] border-dashed border-light border py-4 justify-center">
              <div class="flex flex-col gap-3 px-1 pt-1">
                <div class="grid grid-cols-1 grid-rows-1 w-64 h-48 border rounded-lg shadow-inner bg-light border-dark overflow-y-auto">
                    <p class="text-dark font-normal text-sm text-center px-4 py-2">blesch</p>
                </div>
              </div>
            </div>
          </div>

    </div>
    </div>  
    
</template>