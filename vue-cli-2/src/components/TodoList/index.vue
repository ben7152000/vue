<script>
import TodoItem from '../TodoItem/index.vue'

export default {
  props: {
    todos: Array,
    deleteTodo: Function
  },
  components: {
    TodoItem
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
