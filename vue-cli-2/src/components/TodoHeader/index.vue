<script>
export default {
  props: {
    addTodoItem: Function
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addItem () {
      // 1. 檢查輸入合法性
      const title = this.title.trim()
      if (!title) {
        alert('必須輸入')
        return
      }
      // 2. 根據輸入生成todo物件
      const todo = {
        title,
        complete: false
      }
      // 3. 將todo物件加到todos
      this.addTodoItem(todo)
      // 4. 清除輸入
      this.title = ''
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
