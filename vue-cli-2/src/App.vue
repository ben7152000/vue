<template>
  <div>
    <TodoHeader :addTodoItem="addTodoItem"/>
    <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
    <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader/index.vue'
import TodoList from './components/TodoList/index.vue'
import TodoFooter from './components/TodoFooter/index.vue'

export default {
  data () {
    return {
      // 從localStorage讀取todos
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  methods: {
    addTodoItem (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 刪除所有選中的
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全選或全部選
    selectAllTodos (isCheck) {
      this.todos.forEach(todo => { todo.complete = isCheck })
    }
  },
  watch: { // 監視
    todos: {
      deep: true, // 深度監視
      handler (value) {
        // todos最新的值的json數據 保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style lang="scss"></style>
