<template>
  <CompleteWidthTemplateVue class="fixed">
    <div class="w-1/2 h-1/3">
      <div>
        <div>Scroll position</div>
        <div>x: {{ xScroll }}</div>
        <div>y: {{ yScroll }}</div>

        <div>Mouse position</div>
        <div>x: {{ xMouse }}</div>
        <div>y: {{ yMouse }}</div>
      </div>
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import { useWindowScroll, useMouse } from "@vueuse/core";

const windowScroll = useWindowScroll();
const xScroll = windowScroll.x;
const yScroll = windowScroll.y;

const mouse = useMouse();
const xMouse = mouse.x;
const yMouse = mouse.y;
</script>
