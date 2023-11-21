<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/Auth';
import HCaptcha from "@hcaptcha/vue3-hcaptcha";

const password = ref();
const authStore = useAuthStore();
const error = reactive({
  show: true,
  message: ""
})
function reset()
{
  const specialChars = /[!@#$%^&*()\-_=+`~,<.>\/[{\]\|}?\\]/;
  if (password.value == undefined || password.value == null)
  {
    error.message = "Enter a value!";
    error.show = true;
  }
  else if (password.value.length < 8)
  {
    error.message = "Password must be greater than 8 characters";
    error.show = true;
  }
  else if (!specialChars.test(password.value))
  {
    error.message = "Password must contain a special character!";
    error.show = true;
  }
  else
  {
    authStore.passwordResetForAccount(password.value);
  }
}
</script>

<template>
  <div>
      <label for="password" class="block mb-2 text-sm font-medium text-dark">New Password</label>
      <input type="password" autocomplete="new-password" name="password" id="password" v-model="password" placeholder="••••••••••••••••" class="bg-light border border-border text-dark text-sm rounded-lg block w-full p-2.5 focus:border-dark" required="true">
  </div>
  <div v-if="error.show">
    <p>
      {{ error.message }}
    </p>
  </div>
  <HCaptcha sitekey="ee05c211-2075-42da-8c04-abeb41edfb4d" @verify="(token: any) => authStore.captchaToken = token"></HCaptcha>
  <button type="button" @click="reset">Reset</button>
</template>