<script setup lang="ts">
import { type ILink } from "../types/layouts";

const isOpen = ref(false);
function toggleSidebar() {
  isOpen.value = !isOpen.value;
}
// const links: ILink[] = [
//   {
//     link: "/home",
//     linkName: "Home",
//     icon: <Icon name="uil:github" style="color: black" />,
//   },
//   {
//     link: "/new",
//     linkName: "New",
//     icon: <Icon name="uil:github" style="color: black" />,
//   },
//   {
//     link: "/random",
//     linkName: "Randomly view",
//     icon: <Icon name="uil:github" style="color: black" />,
//   },
//   {
//     link: "/profile",
//     linkName: "Profile",
//     icon: <Icon name="uil:github" style="color: black" />,
//   },
// ];
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      :class="['bg-gray-800 text-white h-screen p-4', isOpen ? 'w-64' : 'w-16']"
    >
      <!-- <button @click="toggleSidebar" class="mb-4 focus:outline-none">
        <svg
          class="w-6 h-6"
          :class="isOpen ? 'transform rotate-180' : ''"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button> -->
      <!-- <div v-for="(link, index) in links" :key="index">
        <NavLink :link="link.link" :linkName="link.linkName"
          >{{ link.icon }}
        </NavLink>
      </div> -->
      <Icon name="uil:github" style="color: black" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-4">
      <slot />
    </div>
  </div>
</template>
