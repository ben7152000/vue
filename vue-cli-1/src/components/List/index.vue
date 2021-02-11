<script>
import Item from '../Item/index.vue'

export default {
  // 定義接收屬性 這個就會變成組建物件的屬性
  props: ['comments', 'deleteComment'], // 指定屬性名
  components: {
    Item
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
