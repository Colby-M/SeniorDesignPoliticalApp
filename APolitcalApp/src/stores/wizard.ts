import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router';

export const useWizardStore = defineStore('wizard', () => {
    const page = ref("profile");
    function RouteTo(route: string)
    {
        page.value = route;
        router.push(route);
    }
  return {
    RouteTo,
    page
  }
})
