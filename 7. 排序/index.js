const vm = new Vue ({
  el: '#app',
  data: {
    searchName: '',
    orderType: 0, // 0不排序, 1升序, 2降序
    persons: [
      {name: 'Tom', age: 18},
      {name: 'Ben', age: 17},
      {name: 'Alice', age: 16}
    ]
  },
  methods: {
    setOrderType (orderType) {
      this.orderType = orderType
    }
  },
  computed: {
    filterPersons () {
      // 取出相關數據
      const {searchName, persons, orderType} = this
      let fPersons // 最後要顯示的數據

      // 對 persons 過濾
      fPersons = persons.filter(p => p.name.indexOf(searchName) !== -1)

      // 排序
      if(orderType !== 0) {
        fPersons.sort((p1, p2) => {
          // 1升序, 2降序
          // 如果反回負數 => p1在前 (升序)
          // 如果返回正數 => p2在前 (降序)
          if(orderType === 2) {
            return p2.age-p1.age  
          } else {
            return p1.age-p2.age
          }
          
        })
      }

      // 回傳過濾後的值
      return fPersons

    }
  }
})