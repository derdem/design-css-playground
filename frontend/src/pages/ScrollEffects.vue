<template>
  <CompleteWidthTemplateVue>
    <div class="flex gap-4">
      <div
        :class="`transition ease-in-out duration-100 min-w-[200px] w-full h-60 mt-4 ${boxColor} p-4 rounded-xl overflow-auto text-center`"
        @scroll="handleScroll"
      >
        <div v-for="(word, index) in words" :key="index">{{ word }} <br /></div>
      </div>

      <div class="w-full bg-sky-800 p-4 rounded-xl hidden">
        <div>
          <div>Scroll position</div>
          <div>x: {{ xScroll }}</div>
          <div>y: {{ yScroll }}</div>

          <div>Mouse position</div>
          <div>x: {{ xMouse }}</div>
          <div>y: {{ yMouse }}</div>
        </div>
      </div>

      <div
        class="min-w-[200px] w-full h-60 mt-4 bg-sky-800 p-4 rounded-xl overflow-auto text-center"
      >
        <div v-for="(word, index) in words" :key="index">{{ word }} <br /></div>
      </div>
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import { useWindowScroll, useMouse } from "@vueuse/core";
import { computed, ref } from "vue";

const windowScroll = useWindowScroll();
const scroll1 = ref(0);

const xScroll = windowScroll.x;
const yScroll = windowScroll.y;

const mouse = useMouse();
const xMouse = mouse.x;
const yMouse = mouse.y;

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
