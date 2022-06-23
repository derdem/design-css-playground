<script setup lang="ts">
import EffectCardVue from "../EffectCard.vue";
import { ComponentPublicInstance, ref, Ref, computed } from "vue";
const svg: Ref<Element | null | ComponentPublicInstance> = ref(null);
const radius = ref(10);

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
    return (svg.value as Element).clientHeight / 2 - 50;
  }
  return undefined;
});
</script>

<template>
  <EffectCardVue>
    <svg class="h-full w-full makespin" :ref="($el) => (svg = $el)">
      <circle
        class="turning-circle"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-100"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-200"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-300"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-400"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-500"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-600"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-700"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-800"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
      <circle
        class="turning-circle delay-900"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="#ff6e48"
      />
    </svg>
  </EffectCardVue>
</template>

<style lang="scss" scoped>
$animationTime: 2000ms;
@keyframes turning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.makespin:hover {
  .turning-circle {
    transform-origin: 50% 50%;
    animation: turning $animationTime linear infinite;
  }

  .delay-100 {
    animation-delay: calc($animationTime * 0.1);
  }
  .delay-200 {
    animation-delay: calc($animationTime * 0.2);
  }
  .delay-300 {
    animation-delay: calc($animationTime * 0.3);
  }
  .delay-400 {
    animation-delay: calc($animationTime * 0.4);
  }
  .delay-500 {
    animation-delay: calc($animationTime * 0.5);
  }
  .delay-600 {
    animation-delay: calc($animationTime * 0.6);
  }
  .delay-700 {
    animation-delay: calc($animationTime * 0.7);
  }
  .delay-800 {
    animation-delay: calc($animationTime * 0.8);
  }
  .delay-900 {
    animation-delay: calc($animationTime * 0.9);
  }
}
</style>
