import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const SimpleCentered = () => import("@/pages/SimpleCentered.vue");
const Design = () => import("@/pages/Design.vue");
const Animations = () => import("@/pages/Animations.vue");
const BackgroundColors = () => import("@/pages/BackgroundColors.vue");
const ScrollEffects = () => import("@/pages/ScrollEffects.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/centered",
    component: SimpleCentered,
    meta: { title: "centered" },
  },

  {
    path: "/",
    component: Design,
    name: "Design",
    meta: { title: "Design" },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
