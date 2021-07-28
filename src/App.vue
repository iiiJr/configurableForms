<template>
  <div class="main">
    <div>
      <router-link to="/"></router-link>
    </div>
    <div class="other">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  .other {
    margin: auto;
    height: 100%;
    width: 80%;
  }
}
</style>
