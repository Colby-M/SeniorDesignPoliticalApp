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
      .select(`full_name, age`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) throw error;

    if (data) {
      username.value = data.full_name;
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

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Age</label>
      <input id="website" type="number" v-model="age" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>