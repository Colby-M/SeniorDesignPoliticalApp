<script lang="ts" setup>
import IconBase from '../icons/IconBase.vue'
import { ref } from 'vue'

/* TODO: Add ability to read search bar data, possibly add character limits */
</script>

<template>
    <form>   
        <div class="w-64 h-12 relative">
              <div class="w-64 h-10 left-0 top-1 absolute rounded-full border-border border focus-within:border-dark">
                <input type="searchfield" id="search-base" class="group absolute left-14 h-full w-46 bg-transparent outline-none text-dark focus:border-dark" placeholder="search content">
              </div>
            <div class="w-12 h-12 left-0 top-0 absolute flex justify-center items-center bg-dark rounded-full"><IconBase iconColor="static-light" iconName="discover" iconSize="medium"></IconBase></div>
        </div>
    </form>
</template>