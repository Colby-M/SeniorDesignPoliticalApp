<script lang="ts" setup>
import supabase from '../../lib/supabaseClient';
import { onMounted, ref, type PropType } from 'vue';
import type { Session } from '@supabase/supabase-js';

const props = defineProps({
  session: {
    type: Object as PropType<Session>,
    required: true
  },

});
const emits = defineEmits(['sign-out']);

const loading = ref(true);
const username = ref('');
const age = ref<number>();

onMounted(() => {
  getProfile();
})

async function getProfile() {
  try {
    loading.value = true;
    const { user } = props.session;

    let { data, error, status } = await supabase
      .from('Profiles')
      .select(`username, age`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) throw error;

    if (data) {
      username.value = data.username;
      age.value = data.age;
    }
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
  }
}

async function updateProfile() {
  try {
    loading.value = true;
    const { user } = props.session;

    const updates = {
      id: user.id,
      username: username.value,
      age: age.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('Profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
  }
}
function signOut()
{
  emits('sign-out');
}
</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="updateProfile">
    <div class="flex gap-3">
      <label for="email" class="label">Email</label>
      <input id="email" type="text" class="bg-light border p-1" :value="session.user.email" disabled />
    </div>
    <div class="flex gap-2">
      <label for="username">Name</label>
      <input id="username" type="text" autocomplete="name" class="bg-light border p-1" v-model="username" />
    </div>
    <div class="flex gap-5">
      <label for="website">Age</label>
      <input id="website" type="number" class="bg-light border p-1" v-model="age" />
    </div>
    <div class="flex gap-5">
      <button
        type="submit"
        class="w-fit text-light bg-highlight hover:bg-highlight/90  h-10 focus:ring-4 focus:outline-none focus:ring-highlight/50 font-medium rounded-full text-xs px-5 py-2.5 text-center dark:focus:ring-[#4285F4]/55"
        :disabled="loading"
      >{{ loading ? 'Loading ...' : 'Update' }}</button>
  
      <div>
        <button
          @click="signOut()"
          :disabled="loading"
          class="w-fit text-light bg-[#ff4545] hover:bg-[#ba3838]  h-10 focus:ring-4 focus:outline-none focus:ring-[#ff4545]/50 font-medium rounded-full text-xs px-5 py-2.5 text-center dark:focus:ring-[#ff4545]/55"
        >Sign Out</button>
      </div>
    </div>
  </form>
</template>