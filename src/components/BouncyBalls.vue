<template>
  <div
    :class="`transition ease-in-out duration-100 min-w-[200px] w-full mt-4 h-72 overflow-auto rounded text-center bg-sky-800`"
  >
    <svg class="h-full w-full" :ref="($el) => (svg = $el)">
      <circle
        v-for="(point, index) in points"
        :key="index"
        :cx="point.x"
        :cy="point.y"
        :r="circleRadius"
        fill="#ff6e48"
      ></circle>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
const svg = ref();
const circleRadius = 2;
const numberCircles = 100;
const randomDirection = () => (Math.random() < 0.5 ? -1 : 1);
const getRandomSpeed = () => {
  const direction = randomDirection();
  const value = (0.5 + 2 * Math.random()) * direction;
  return value;
};
const points = computed(() => {
  const points = Array.from({ length: numberCircles }, () => {
    if (svg.value) {
      const { clientHeight, clientWidth } = svg.value;
      const x = clientWidth * (0.8 * Math.random() + 0.1);
      const y = clientHeight * (0.8 * Math.random() + 0.1);
      const dx = getRandomSpeed();
      const dy = getRandomSpeed();
      return reactive({ x, y, dx, dy });
    } else {
      return { x: 0, y: 0, dx: 0, dy: 0 };
    }
  });
  return points;
});

setInterval(() => {
  if (svg.value) {
    const { clientHeight, clientWidth } = svg.value;
    points.value.forEach(
      (point: { x: number; y: number; dx: number; dy: number }) => {
        if (
          point.x < circleRadius / 2 ||
          point.x > clientWidth - circleRadius / 2
        ) {
          point.dx = -point.dx;
        }
        if (
          point.y < circleRadius / 2 ||
          point.y > clientHeight - circleRadius / 2
        ) {
          point.dy = -point.dy;
        }
        point.x += point.dx;
        point.y += point.dy;
      }
    );
  }
}, 15);
</script>
