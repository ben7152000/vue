const vm = new Vue ({
  el: '#app',
  data: {
    persons: [
      {name: 'Tom', age: 18},
      {name: 'Ben', age: 17},
      {name: 'Alice', age: 16}
    ]
  },
  methods: {
    deleteP (index) {
      // 刪除 persons 中的 index
      this.persons.splice(index, 1)
    },
    updateP (index, newP) {
      this.persons.splice(index, 1, newP)
    }
  }
})