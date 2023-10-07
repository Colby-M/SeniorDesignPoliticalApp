<script setup lang="ts">
import ButtonSignInOptions from '../button/ButtonSignInOptions.vue';
</script>

<template>

        <div class="flex flex-col bg-dark/30 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg bg-light shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <a href="#" class="flex items-center font-light mb-6 text-2xl text-dark dark:text-white">
                        <img class="w-8 h-8 mr-2" src="../logo/VoteBoatLogo.png" alt="logo">
                        Vote Boat    
                    </a>
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-dark">Your email</label>
                            <input type="email" name="email" id="email" class="bg-light border border-border text-dark sm:text-sm rounded-lg block w-full p-2.5 focus:border-dark" placeholder="name@company.com" required="true">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-dark">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-light border border-border text-dark sm:text-sm rounded-lg block w-full p-2.5 focus:border-dark" required="true">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-dark rounded bg-dark focus:ring-3 focus:ring-primary-300 dark:bg-dark dark:border-dark dark:focus:ring-primary-600 dark:ring-offset-dark" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-dark dark:text-dark">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-light text-dark hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-1/2 mx-auto bg-light border border-border text-dark sm:text-sm rounded-lg block hover:bg-dark/30 p-2.5 focus:border-dark">Sign in</button>
                        <div class="flex items-center">
                          <div class="flex-1 border-b border-border"></div>
                          <span class="px-2">or</span>
                          <div class="flex-1 border-b border-border"></div>
                        </div>
                        <ButtonSignInOptions buttonType="sign-in-github"></ButtonSignInOptions>
                    </form>
                </div>
            </div>
        </div>
</template>
  
