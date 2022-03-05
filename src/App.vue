<template>
  <div id="app">
    <div class="header"><p>header</p></div>
    <router-view></router-view>
    <div class="footer"><p>footer</p></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.header {
    // padding-bottom: 8px;
    background-color: #2c3e50;
    height: 50px;
}
.footer {
    // padding-top: 8px;
    background-color: #2c3e50;
    height: 50px;
}
</style>
