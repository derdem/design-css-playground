<template>
  <EffectCardVue>
    <svg class="h-full w-full" :ref="($el) => (svg = $el)">
      <path
        v-for="(path, index) in paths"
        :key="index"
        stroke="#ff6e48"
        :d="path"
      ></path>
    </svg>
  </EffectCardVue>
</template>

<script setup lang="ts">
import EffectCardVue from "../EffectCard.vue";
import { ref, computed, reactive } from "vue";
interface MovingPoint {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

interface MovingConnectedNode {
  connectedTo: MovingPoint[];
  coordinates: MovingPoint;
}

const svg = ref();
const circleRadius = 2;
const numberCircles = 20;
const randomDirection = () => (Math.random() < 0.5 ? -1 : 1);
const getRandomSpeed = () => {
  const direction = randomDirection();
  const value = (1 + 4 * Math.random()) * direction;
  return value;
};
const getRandomConnected = () => {
  return Math.ceil(5 * Math.random());
};
const createRandomMovingPoint = () => {
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
};

const movingPoints = computed(() => {
  return Array.from({ length: numberCircles }, createRandomMovingPoint);
});

const movingConnectedNodes = computed(() => {
  const { length } = movingPoints.value;
  const nodes = movingPoints.value.map((point, index) => {
    const connectedCount = getRandomConnected();
    const countedList = Array.from(
      { length: connectedCount },
      (v, i) => index + 1 + i
    );
    const movingConnectedNode: MovingConnectedNode = {
      connectedTo: [],
      coordinates: point,
    };
    movingConnectedNode.connectedTo = countedList.map((index) => {
      if (index > length - 1) {
        return movingPoints.value[index - length];
      } else {
        return movingPoints.value[index];
      }
    });
    return movingConnectedNode;
  });
  return nodes;
});

const paths = computed(() => {
  return movingConnectedNodes.value.flatMap((node) => {
    return node.connectedTo.map((connectedNode) => {
      return `M ${node.coordinates.x} ${node.coordinates.y} L ${connectedNode.x} ${connectedNode.y} z`;
    });
  });
});

setInterval(() => {
  if (svg.value) {
    const { clientHeight, clientWidth } = svg.value;
    movingPoints.value.forEach(
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
