<script>
export default {
  props: {
    comment: Object, // 指定屬性名與屬性值
    deleteComment: Function,
    index: Number
  },
  methods: {
    deleteItem () {
      const { comment, index, deleteComment } = this
      if (window.confirm(`確定刪除${comment.name}的評論嗎?`)) {
        deleteComment(index)
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>
