<template>
  <div id="main">
    <div class="header"><p>header</p></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
  }
#main {
  width: 100%;
  height: 100%;
}
.header {
    // padding-bottom: 8px;
    background-color: #2c3e50;
    height: 50px;
}

</style>
