<template>
  <div id="main">
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

</style>
