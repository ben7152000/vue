<script>
export default {
  props: {
    addComment: {
      // 最完整寫法 指定屬性名 屬性值 屬性的必要性
      type: Function,
      require: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      // 1.檢查輸入合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('名字或內容不能為空')
        return
      }

      // 2.根據輸入數據 封裝成一個 comment 物件
      const comment = {
        name,
        content
      }

      // 3.添加到 comments 中
      this.addComment(comment)

      // 4.清除輸入
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
