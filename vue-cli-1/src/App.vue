<template>
  <div>
    <h1>評論畫面</h1>
    <!-- 傳組件資料 -->
    <Add :addComment="addComment"/>
    <!-- 傳組件資料 -->
    <List :comments="comments" :deleteComment="deleteComment"/>
  </div>
</template>

<script>
import Add from './components/Add/index.vue'
import List from './components/List/index.vue'

export default {
  data () {
    return {
      comments: [
        {
          name: 'Alex',
          content: 'Vue is good'
        },
        {
          name: 'Ben',
          content: 'Ben is good'
        },
        {
          name: 'Jenny',
          content: 'I am so smart'
        }
      ]
    }
  },
  methods: {
    // 資料在哪個組件 方法就只能在哪個組件
    // 添加評論
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 刪除指定下標評論
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style lang="scss">

</style>
