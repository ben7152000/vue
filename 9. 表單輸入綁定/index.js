new Vue ({
  el: '#app',
  data () {
    return {
      username: '',
      pwd: '',
      sex:'女',
      likes: ['basketball'],
      allCities: [{id: 1, name: '台北'}, {id: 2, name: '新北市'}, {id: 3, name: '桃園'}],
      cityId: '3',
      desc: ''
    }
  },
  methods: {
    handlerSubmit () {
      console.log(this.username, this.pwd, this.sex, this.likes, this.cityId, this.desc)
    }
  }
})