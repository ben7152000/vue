new Vue ({
  el: '#app',
  data: {
    test1 () {
      alert('hello')
    },
    test2 (content) {
      alert(content)
    },
    test3 (event) {
      alert(event.target.innerHTML)
    },
    test4 (number, event) {
      alert(number + '----' + event.target.innerHTML)
    },
    test5 () {
      alert('out')
    },
    test6 () {
      alert('inner')
    },
    test7 () {
      alert('click')
    },
    test8 (event) {
      alert(event.target.value)
    },
    test9 (event) {
      alert(event.target.value)
    }
  }
})