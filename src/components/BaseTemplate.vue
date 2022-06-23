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
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{ selected: router.currentRoute.value.path === '/' }"
          href="#"
          >Main</a
        >
      </router-link>
      <router-link to="/animations">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{
            selected: router.currentRoute.value.path === '/animations',
          }"
          href="#"
          >Animation Effects</a
        >
      </router-link>
      <router-link to="/background-colors">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{
            selected: router.currentRoute.value.path === '/background-colors',
          }"
          href="#"
          >Background effects</a
        >
      </router-link>
      <router-link to="/scroll-effects">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{
            selected: router.currentRoute.value.path === '/scroll-effects',
          }"
          href="#"
          >ScrollEffects</a
        >
      </router-link>
      <router-link to="/svg-animations">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{
            selected: router.currentRoute.value.path === '/svg-animations',
          }"
          href="#"
          >Svg Animations</a
        >
      </router-link>
      <router-link to="/canvas-effects">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg transition highlight relative"
          :class="{
            selected: router.currentRoute.value.path === '/canvas-effects',
          }"
          href="#"
          >Canvas Effects</a
        >
      </router-link>
    </nav>
    <main class="flex grow overflow-h-auto h-full">
      <slot />
    </main>
  </div>
  <footer class="container p-6 text-sm">
    <div class="flex items-center">
      <div class="flex-item h-[30px] mr-3 bg-white rounded-sm">
        <meImageVue />
      </div>
      <div class="flex-item">Created by Nikodem Bienia</div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useRouter } from "vue-router";
import meImageVue from "./svgImages/meImage.vue";

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
