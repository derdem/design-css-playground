<template>
  <header class="px-4 mt-6">
    <h1 class="!mb-0 font-sans text-4xl text-sky-200 pb-4">
      <router-link to="/"
        ><span>{{ router.currentRoute.value.meta.title }}</span></router-link
      >
    </h1>
  </header>
  <div class="flex flex-row grow">
    <nav class="min-w-fit px-4 pb-4">
      <router-link to="/">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Main</a
        >
      </router-link>
      <router-link to="/animations">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Animation Effects</a
        >
      </router-link>
      <router-link to="/background-colors">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Background effects</a
        >
      </router-link>
      <router-link to="/scroll-effects">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >ScrollEffects</a
        >
      </router-link>
      <router-link to="/svg-animations">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Svg Animations</a
        >
      </router-link>
    </nav>
    <main class="flex grow overflow-h-auto h-full">
      <slot />
    </main>
  </div>
  <footer class="container p-6 text-sm">Created by Nikodem Bienia</footer>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useRouter } from "vue-router";

const props = defineProps<{
  title?: string;
}>();

const router = useRouter();

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: props.title,
  },
  meta: [
    {
      property: "og:title",
      content: props.title,
    },
    {
      name: "twitter:title",
      content: props.title,
    },
  ],
});
</script>
