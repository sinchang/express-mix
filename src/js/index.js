import Vue from 'vue'
import axios from 'axios'

new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    post: {}
  },
  created: function() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        this.post = res.data
      })
  }
})
