<template>
  <div class="nodeBox">
    <div class="node"><p>{{nodeName}}</p></div>
  </div>
</template>

<script>
export default {
  name: 'ComponentNode',
  props: {
    nodeName: {
      type: String
    }
  }
}
</script>

<style>
.nodeBox{
  cursor: move;
  width: 100%;
  height: 80px;
  font-size: 12px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eef2f87e;
  background-color: #838383d7;
}
.node{
  color: #000000;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
}
p{
  margin: 0 auto;
}
.nodeBox:hover {
  background: #314558a4;
}
</style>
