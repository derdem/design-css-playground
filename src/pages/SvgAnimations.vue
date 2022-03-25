<template>
  <CompleteWidthTemplateVue
    ><div class="flex gap-4">
      <div
        :class="`transition ease-in-out duration-100 min-w-[200px] w-full mt-4 h-60 overflow-auto text-center bg-sky-800`"
      >
        <svg class="h-full w-full" @mousemove="handleRubberEffect">
          <path class="path-transition" fill="#ff6e48" :d="path"></path>
        </svg>
      </div>
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import { setXYRelativeCoordiante } from "@/common/mouse";
import { ref, computed } from "vue";

const x = ref(50);
const y = ref(50);
const handleRubberEffect = setXYRelativeCoordiante(x, y);

const boxheight = 240; // pixel

const path = computed(() => {
  if (x.value > 70) {
    const q1 = boxheight * 0.25;
    const q2 = boxheight * 0.5;
    const q3 = boxheight * 0.75;
    return `M 0 0 L 50 0 Q 50 ${q1} 50 ${q2} Q 50 ${q3} 50 240 L 0 240 z`;
  } else {
    const q1 = ((y.value - 25) / 100) * boxheight;
    const q2 = (y.value / 100) * boxheight;
    const q3 = ((y.value + 25) / 100) * boxheight;
    return `M 0 0 L 50 0 Q 65 ${q1} 65 ${q2} Q 65 ${q3} 50 240 L 0 240 z`;
  }
});
</script>

<style scoped lang="scss">
.path-transition {
  transition: all 150ms;
}
</style>
