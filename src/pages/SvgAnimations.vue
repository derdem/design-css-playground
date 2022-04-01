<template>
  <CompleteWidthTemplateVue
    ><div class="flex gap-4">
      <ChewingGumVue />
      <BouncyBallsVue />
      <movingNetVue />
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import ChewingGumVue from "@/components/svgEffects/ChewingGum.vue";
import BouncyBallsVue from "@/components/svgEffects/BouncyBalls.vue";
import movingNetVue from "@/components/svgEffects/MovingNet.vue";
</script>
