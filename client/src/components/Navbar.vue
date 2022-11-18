<template>
  <main>
    <div
      class="fixed top-0 z-50 flex w-full items-center justify-between bg-[#E7ECEE] p-4"
    >
      <div class="flex items-center justify-center space-x-4 md:w-1/5">
        <a href="https://www.linkedin.com/in/theo-selin/" target="_blank">
          <div class="relative cursor-pointer">
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="headerIcon"
            />
          </div>
        </a>
        <a href="https://github.com/Theo-Selin" target="_blank">
          <div class="relative cursor-pointer">
            <font-awesome-icon icon="fa-brands fa-github" class="headerIcon" />
          </div>
        </a>
      </div>
      <div class="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <router-link to="/" class="headerLink">Home</router-link>
        <router-link to="/about" class="headerLink">About</router-link>
        <router-link to="/" class="headerLink">Portfolio</router-link>
        <router-link to="/" class="headerLink">Contact</router-link>
      </div>
      <div class="flex justify-center md:w-1/5">
        <div class="relative cursor-pointer z-50">
          <Dropdown />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";
</script>
