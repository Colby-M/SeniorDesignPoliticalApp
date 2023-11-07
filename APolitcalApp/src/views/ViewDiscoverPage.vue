<script setup lang="ts">
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import CardFullPetition from '@/components/cards/CardFullPetition.vue';
  import ToolbarDiscover from '@/components/toolbars/toolbarDiscover.vue';
  import supabase from '@/lib/supabaseClient';

  import { onMounted, onUnmounted, ref } from 'vue';
  import { useAuthStore } from '@/stores/Auth';

  interface petitionType {
    created_at: Date; 
    description: string; 
    id: string; 
    scope: number;
    tags: string[];
    title: string;
    userid: string;
    locked: boolean;
  }

  const isLoadingPosts = ref(false)
  const postArray = ref<petitionType[]>([])
  const filter = ref(0);

  onMounted(async () => {
    let internalDiv = <HTMLElement>document.getElementById("discoverScroll");
    if(internalDiv !== null)
    {
      await getPosts(10);
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

  async function getPosts(numberPosts: number) {
    isLoadingPosts.value = true

    let { data, error } = await supabase
      .from('Petitions')
      .select<"*", petitionType>()
      .neq('userid', useAuthStore().session?.user.id)
      .eq('scope', filter.value)
      .range(postArray.value.length, postArray.value.length + numberPosts);
    postArray.value.push(...data ?? []);
    isLoadingPosts.value = false;
  }

  const handleScroll = () => {
    let element = <HTMLElement>document.getElementById("discoverScroll");
    const scrollY = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const offsetHeight = element.offsetHeight;

    const scrollThreshold = 0.8;

    if (scrollY + offsetHeight >= scrollHeight * scrollThreshold && !isLoadingPosts.value) {
      getPosts(10);
    }
  }

  const refresh = () => {
    postArray.value = [];
    getPosts(10);
  }

  const changeFilter = (changedFilter: number) => {
    postArray.value = [];
    filter.value = changedFilter;
    getPosts(10);
  }
</script>


<template>
  <MainLayout>
    <template #ToolbarSlot>
      <ToolbarDiscover @refresh="refresh()" @change-filter="changeFilter"></ToolbarDiscover>
    </template>
    <template #ContentSlot>
      <div id="discoverScroll" class="max-h-[100vh] overflow-y-auto" ref="scrollComponent">
        <div class="flex flex-wrap gap-8 px-16 py-2 items-center justify-center">
          <CardFullPetition v-for="post in postArray" :petitionId="post.id" :petitionTitle="post.title" :petitionSummary="post.description" :petitionLocked="post.locked" />
        </div>
        <div v-if="isLoadingPosts" role="status" class="flex justify-center mt-4 mb-4">
              <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-highlight" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<style scoped>
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