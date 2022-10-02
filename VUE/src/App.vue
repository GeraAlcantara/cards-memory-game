<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>
<script>
export default {
  mounted() {
    const gameJs = document.createElement("script");
    gameJs.setAttribute("src", "src/assets/gameBase/src/js/main");
    document.head.appendChild(gameJs);
  },
};
</script>
