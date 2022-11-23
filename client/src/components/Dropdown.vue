<template>
  <main>
    <div class="relative text-right z-50">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <font-awesome-icon icon="fa-solid fa-bars" class="headerIcon" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/"
                  :class="[
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Home
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/about"
                  :class="[
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  About
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/experience"
                  :class="[
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Experience
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/contact"
                  :class="[
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Contact
                </router-link>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </main>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
