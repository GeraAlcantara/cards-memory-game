<template>
  <div class="memory-card">
    <img class="front-face" draggable="false" :src="`${imgPwd}/${front}`" :alt="`${alt}`"/>
    <img class="back-face" draggable="false" :src="`${imgPwd}/js-badge.svg`" alt="memory-card"/>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    imgPwd: "",
    front: "",
    alt: "",
  }
}
</script>