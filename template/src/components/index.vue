<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    axios.get('/api/demo')
      .then(res => {
        console.log(res)
      })
    axios.post('/api/demo2')
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .hello {
    color: #f55;
    text-align: center;
    height: 500px;
    background: url('../assets/bg.jpg')
  }
</style>
