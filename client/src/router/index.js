import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Vue Router에 등록될 라우팅 정보들
// 기본적으로 path와 name, component를 한쌍으로 등록
// <router-link/> : Vue Router에 등록된 정보를 호출
// <router-view/> : 호출한 라우팅 정보에 따라 component를 출력할 위치 지정

const routers = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
// 실제 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routers,
});
export default router;
