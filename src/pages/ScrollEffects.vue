<template>
  <CompleteWidthTemplateVue>
    <div class="flex gap-4">
      <div
        :class="`transition ease-in-out duration-100 min-w-[200px] w-full h-60 mt-4 ${boxColor} p-4 rounded-xl overflow-auto text-center`"
        @scroll="handleScroll"
      >
        <div v-for="(word, index) in words" :key="index">{{ word }} <br /></div>
      </div>

      <div
        class="min-w-[200px] w-full h-60 mt-4 bg-sky-800 p-4 rounded-xl overflow-auto text-center"
      >
        <div v-for="(word, index) in words" :key="index">{{ word }} <br /></div>
      </div>
      <!-- scroll effect idea. Instead of having a vertical scrollbar the scroll percentage can be displayed as a round loading spinner in the top right corner of the html node -->
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import { computed, ref } from "vue";

const scroll1 = ref(0);

const handleScroll = ({ currentTarget }: UIEvent) => {
  const clientHeight = currentTarget.clientHeight;
  const scrollTop = currentTarget.scrollTop;
  const scrollHeight = currentTarget.scrollHeight;

  const percentage = scrollTop / (scrollHeight - clientHeight);
  console.log(percentage);
  scroll1.value = percentage;
};

const boxColor = computed(() => {
  if (scroll1.value < 0.1) {
    return "bg-red-800";
  } else if (scroll1.value < 0.2) {
    return "bg-orange-800";
  } else if (scroll1.value < 0.3) {
    return "bg-amber-800";
  } else if (scroll1.value < 0.4) {
    return "bg-yellow-800";
  } else if (scroll1.value < 0.5) {
    return "bg-lime-800";
  } else if (scroll1.value < 0.6) {
    return "bg-green-800";
  } else if (scroll1.value < 0.7) {
    return "bg-emerald-800";
  } else if (scroll1.value < 0.8) {
    return "bg-teal-800";
  } else if (scroll1.value < 0.9) {
    return "bg-cyan-800";
  } else {
    return "bg-sky-800";
  }
});

const words = [
  "Hey,",
  " diddle,",
  " diddle,",
  " The",
  " cat",
  " and",
  " the",
  " fiddle,",
  " The",
  " cow",
  " jumped",
  " over",
  " the",
  " moon;",
  " The",
  " little",
  " dog",
  " laughed",
  " To",
  " see",
  " such",
  " sport,",
  " And",
  " the",
  " dish",
  " ran",
  " away",
  " with",
  " the",
  " spoon.",
];
</script>
