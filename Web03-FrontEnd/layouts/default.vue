<script setup>
const isOpen = ref(false);
function toggleSidebar() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      :class="['bg-gray-800 text-white h-screen p-4', isOpen ? 'w-64' : 'w-16']"
    >
      <button @click="toggleSidebar" class="mb-4 focus:outline-none">
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
      </button>

      <nav v-if="isOpen" class="space-y-2">
        <Link/>

        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">About</a>
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700"
          >Services</a
        >
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700"
          >Contact</a
        >
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-4">
      <slot />
    </div>
  </div>
</template>
