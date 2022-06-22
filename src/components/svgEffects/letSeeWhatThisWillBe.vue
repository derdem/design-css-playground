<script setup lang="ts">
import EffectCardVue from "../EffectCard.vue";
import { ComponentPublicInstance, ref, Ref, computed, watchEffect } from "vue";
const svg: Ref<Element | null | ComponentPublicInstance> = ref(null);
const radius = ref(10);

watchEffect(() => {
  console.log(svg);
});

const cx = computed(() => {
  if (svg.value === null) {
    return undefined;
  }
  if ((svg.value as Element).clientWidth) {
    return (svg.value as Element).clientWidth / 2;
  }
  return undefined;
});

const cy = computed(() => {
  if (svg.value === null) {
    return undefined;
  }
  if ((svg.value as Element).clientHeight) {
    return (svg.value as Element).clientHeight / 2;
  }
  return undefined;
});

const cx2 = computed(() => {
  if (svg.value === null) {
    return undefined;
  }
  if ((svg.value as Element).clientWidth) {
    return (svg.value as Element).clientWidth / 2;
  }
  return undefined;
});

const cy2 = computed(() => {
  if (svg.value === null) {
    return undefined;
  }
  if ((svg.value as Element).clientHeight) {
    return (svg.value as Element).clientHeight / 2 - 50;
  }
  return undefined;
});

const makeACircle = () => {
  const turningCircle = document.getElementById("turning-circle");
  turningCircle?.classList.add("turning-circle");
  setTimeout(() => {
    turningCircle?.classList.remove("turning-circle");
  }, 1000);
};
</script>

<template>
  <EffectCardVue>
    <svg class="h-full w-full" :ref="($el) => (svg = $el)">
      <circle
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
        @click="makeACircle"
      />
      <circle
        id="turning-circle"
        class=""
        :cx="cx2"
        :cy="cy2"
        :r="radius"
        fill="#ff6e48"
        @click="makeACircle"
      />
    </svg>
  </EffectCardVue>
</template>

<style lang="scss" scoped>
@keyframes turning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.turning-circle {
  transform-origin: 50% 50%;
  animation: turning 1s linear;
}
</style>
