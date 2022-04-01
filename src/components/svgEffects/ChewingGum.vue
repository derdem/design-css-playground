<template>
  <EffectCardVue>
    <svg
      class="h-full w-full"
      @mousemove="handleRubberEffect"
      @mouseleave="x = 100"
      :ref="
        ($el) => {
          return (svg = $el);
        }
      "
    >
      <path class="path-transition" fill="#ff6e48" :d="path"></path>
    </svg>
  </EffectCardVue>
</template>

<script setup lang="ts">
import EffectCardVue from "../EffectCard.vue";
import { setXYRelativeCoordiante } from "@/common/mouse";
import { ref, computed } from "vue";

const x = ref(80);
const y = ref(50);
const handleRubberEffect = setXYRelativeCoordiante(x, y);
const svg = ref();

const boxheight = computed(() => {
  if (svg.value?.clientHeight) {
    return svg.value.clientHeight;
  } else {
    return 240; // pixel
  }
});

const path = computed(() => {
  if (x.value > 70) {
    // in order to have an animation effect from a rectangle box to the chewing gum box and vice versa,
    // both paths need to have the same anchor points. Therefore, the rectangular box below is defined with the same
    // Bezier curves as the chewing gum path, even though no curves are shown.
    const q1 = boxheight.value * 0.25;
    const q2 = boxheight.value * 0.5;
    const q3 = boxheight.value * 0.75;
    return `M 0 0 L 50 0 Q 50 ${q1} 50 ${q2} Q 50 ${q3} 50 ${boxheight.value} L 0 ${boxheight.value} z`;
  } else {
    const q1 = ((y.value - 25) / 100) * boxheight.value;
    const q2 = (y.value / 100) * boxheight.value;
    const q3 = ((y.value + 25) / 100) * boxheight.value;
    return `M 0 0 L 50 0 Q 65 ${q1} 65 ${q2} Q 65 ${q3} 50 ${boxheight.value} L 0 ${boxheight.value} z`;
  }
});
</script>

<style scoped lang="scss">
.path-transition {
  transition: all 150ms;
}
</style>
