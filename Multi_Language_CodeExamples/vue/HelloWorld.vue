<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Welcome to Vue.js</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello, World!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>