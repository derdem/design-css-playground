<script setup lang="ts">
import { reactive, computed, watch, nextTick, onMounted, Ref, ref } from "vue";
import { onKeyStroke } from "@vueuse/core";
import EffectCardVue from "./EffectCard.vue";

onKeyStroke(["w", "W", "ArrowUp"], (e: KeyboardEvent) => {
  moveUp();
  e.preventDefault();
});
onKeyStroke(["s", "S", "ArrowDown"], (e: KeyboardEvent) => {
  moveDown();
  e.preventDefault();
});
onKeyStroke(["a", "A", "ArrowLeft"], (e: KeyboardEvent) => {
  moveLeft();
  e.preventDefault();
});
onKeyStroke(["d", "D", "ArrowRight"], (e: KeyboardEvent) => {
  moveRight();
  e.preventDefault();
});

let canvas = ref() as Ref<HTMLCanvasElement>;
const blockWidth = 20;
const canvasContext = computed(() => canvas.value.getContext("2d"));
const blockPosition = reactive({ x: 50, y: 50 });

const moveUp = () => {
  if (blockPosition.y > 0) {
    blockPosition.y -= 10;
  }
};
const moveDown = () => {
  if (blockPosition.y < canvas.value.clientHeight / 2 - blockWidth) {
    blockPosition.y += 10;
  }
};
const moveRight = () => {
  if (blockPosition.x < canvas.value.clientWidth / 2 - blockWidth / 2) {
    blockPosition.x += 10;
  }
};
const moveLeft = () => {
  if (blockPosition.x > 0) {
    blockPosition.x -= 10;
  }
};

onMounted(() => {
  nextTick(() => {
    if (canvasContext.value) {
      canvasContext.value.fillStyle = "#ff6e48";
      canvasContext.value.fillRect(
        blockPosition.x,
        blockPosition.y,
        blockWidth,
        blockWidth
      );
    }
  });
});

watch(blockPosition, () => {
  if (canvasContext.value) {
    canvasContext.value.clearRect(
      0,
      0,
      canvas.value.clientWidth,
      canvas.value.clientHeight
    );
    canvasContext.value.fillStyle = "#ff6e48";
    canvasContext.value.fillRect(
      blockPosition.x,
      blockPosition.y,
      blockWidth,
      blockWidth
    );
  }
});
</script>

<template>
  <EffectCardVue
    ><canvas
      class="w-full h-full"
      :ref="($canvas) => (canvas = $canvas as HTMLCanvasElement)"
    ></canvas
  ></EffectCardVue>
</template>
