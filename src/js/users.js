import Vue from 'vue'
import axios from 'axios'

new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    users: []
  },
  created: function() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.users = res.data
      })
  }
})
