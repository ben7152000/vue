<script>
export default {
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) { // 當前check最新的值
        this.selectAllTodos(value)
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
