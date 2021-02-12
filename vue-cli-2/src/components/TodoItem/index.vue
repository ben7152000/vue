<script>
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white', // 默認被緊顏色
      isShow: false // 默認按鈕顯示
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      const { todo, index, deleteTodo } = this
      if (window.confirm(`認刪除${todo.title}嗎`)) {
        deleteTodo(index)
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
