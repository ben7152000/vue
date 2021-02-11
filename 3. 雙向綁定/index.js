const vm = new Vue ({
  el: '#app',
  data: {
    firstName: 'a',
    lastName: 'b',
    fullName2: 'a b'
  },
  computed: {
    fullName1 () {
      return this.firstName + ' ' + this.lastName
    },
    fullName3: {
    get () {
      // 計算並返回當前屬性的值
      return this.firstName + ' ' + this.lastName
    },
    set (value) {
      // 監視當前屬性值的變化
      // 回傳當前的值 並更新
      const names = value.split(' ')
      this.firstName = value[0]
      this.lastName = value[1]
    }
  }
  },
  watch: {
    firstName: function (value) {
      this.fullName2 = value + ' ' + this.lastName
    }
  }
})

vm.$watch('lastName', function (value) {
  this.fullName2 = this.firstName + ' ' + value
})