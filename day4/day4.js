const vm = new Vue ({
  el: '#app',
  data: {
    a: 'aClass',
    isA: true,
    isB: false,
    activeColor: 'red',
    fontSize: 20
  },
  methods: {
    update () {
      this.a = 'bClass',
      this.isA = false,
      this.isB = true,
      this.activeColor = 'green',
      this.fontSize = 40
    }
  }
})