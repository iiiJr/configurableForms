<template>
  <div class="container">
      <div class="body">
        <div class="left">
          <draggable
          @change="log"
          :sort=false
          class="draggableBox"
          v-bind="dragOptions"
          :list="this.componentList"
          :group="{name: 'draggableGroup', pull: 'clone', put: false}"
        >
          <div
            :key="element.type"
            class="list-group-item2"
            v-for="element in this.componentList"
          >
            <ComponentNode :nodeName="element.title"/>
          </div>
        </draggable>
        </div>
        <div class="center">
          表单栏
        </div>
        <div class="right">
          配置栏
        </div>
        </div>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import ComponentNode from '../components/ComponentNode.vue'

export default {
  name: 'index',
  components: {
    // HelloWorld
    ComponentNode,
    draggable
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['componentList', 'canvasList']),
    dragOptions () {
      return {
        animation: 500,
        group: 'description',
        disabled: false,
        dragClass: 'dragItem',
        ghostClass: 'ghostItem',
        chosenClass: 'chosenItem'
      }
    }
  },
  mounted () {
  },
  methods: {
    log: (evt) => {
      window.console.log(evt)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.body {
    display: flex;
    flex-direction: row;
}
.left {
  width: 15%;
}
.center {
  width: 50%;
}
.right {
  width: 35%;
}
.draggableBox {
  display: flex;
  flex-wrap: wrap;
}
.list-group-item2 {
  width: 100%;
}
</style>
