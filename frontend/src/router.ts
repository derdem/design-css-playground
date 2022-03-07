import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const SimpleCentered = () => import("@/pages/SimpleCentered.vue");
const Main = () => import("@/pages/Main.vue");
const Animations = () => import("@/pages/Animations.vue");
const BackgroundColors = () => import("@/pages/BackgroundColors.vue");
const ScrollEffects = () => import("@/pages/ScrollEffects.vue");
const SvgAnimations = () => import("@/pages/SvgAnimations.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/centered",
    component: SimpleCentered,
    meta: { title: "centered" },
  },

  {
    path: "/",
    component: Main,
    name: "Main",
    meta: { title: "Main" },
  },
  {
    path: "/animations",
    component: Animations,
    name: "Animations",
    meta: { title: "Animations" },
  },
  {
    path: "/background-colors",
    component: BackgroundColors,
    name: "Background Colors",
    meta: { title: "Background Colors" },
  },
  {
    path: "/scroll-effects",
    component: ScrollEffects,
    name: "Scroll Effects",
    meta: { title: "Scroll Effects" },
  },
  {
    path: "/svg-animations",
    component: SvgAnimations,
    name: "Svg Animations",
    meta: { title: "Svg Animations" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
