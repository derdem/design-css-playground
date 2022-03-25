import { Ref } from "vue";

export const setXYRelativeCoordiante =
  (x: Ref<number>, y: Ref<number>) => (event: MouseEvent) => {
    const { clientHeight, clientWidth } = event.currentTarget as HTMLElement;
    const { offsetX, offsetY } = event;

    x.value = (offsetX * 100) / clientWidth;
    y.value = (offsetY * 100) / clientHeight;
  };
