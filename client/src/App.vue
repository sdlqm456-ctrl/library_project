<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div>
    <!-- 공통적으로 사용할 Header -->
    <HeaderComponent />
    <!-- 사용자의 요청에 따라 Vue Router에 등록된 컴포넌트 출력할 위치 설정 -->
    <!-- key 속성은 컴포넌트의 고유키로 key를 기준으로 각 컴포넌트를 식별 -->
    <!-- 동일한 컴포넌트를 재사용하는 경우 호출정보에 따라 객체를 다시 생성하도록'
key 속성에 this.$route.fullPath를 사용 -->
    <router-view :key="$route.fullPath" />
    <!-- 공통적으로 사용할 footer -->
    <FooterComponent />
  </div>
</template>
<script setup>
// Component = View(HTML) + Data + Code(Javascript),
// 화면을 구성하는 기본 단위로 Vue 객체를 의미하기도 함
// 자식 컴포넌트 등록 => import 시 자동 등록
import { HeaderComponent } from "./layouts/HeaderComponent.vue";
import { FooterComponent } from "FooterComponent";
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
