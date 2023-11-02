import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router';

export const useWizardStore = defineStore('wizard', () => {
    const page = ref("profile");
    function RouteTo(route: string, query: {} | undefined)
    {
        page.value = route;
        router.push({path: route, query: query});
    }
  return {
    RouteTo,
    page
  }
})
