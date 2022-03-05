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
          <draggable
            @change="log"
            v-bind="dragOptions"
            :list="this.canvasList"
            group="draggableGroup"
          >
            <div
              class="canvas_item"
              v-for="(element, index) in this.canvasList"
              :key="element.type + index"
              @click.stop="handleGroupItem(index, element)"
            >
              <div class="canvas_item_node"><FormComponent :element="element"/></div>
              <div class="canvas_item_button">
                <a-button type="danger" @click="delItem(index)">
                  Delete
                </a-button>
              </div>
            </div>
          </draggable>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              Create
            </a-button>
            <a-button style="margin-left: 10px;">
              Cancel
            </a-button>
          </a-form-model-item>
        </div>
        <div class="right">
          <JSONEdit v-model="this.canvasList"/>
        </div>
      </div>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import ComponentNode from '../components/ComponentNode.vue'
import FormComponent from '../components/FormComponent.vue'
import JSONEdit from '../components/JSONEdit.vue'

export default {
  name: 'index',
  components: {
    // HelloWorld
    ComponentNode,
    JSONEdit,
    FormComponent,
    draggable
  },
  data () {
    return {
      activeIndex: {},
      editElement: -1
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
    handleGroupItem (index, element) {
      this.activeIndex = index
      this.editElement = element
    },
    log: (evt) => {
      window.console.log(evt)
    },
    onSubmit () {
      this.log('submit!', this.canvasList)
      console.log(JSON.stringify(this.canvasList))
    },
    delItem (index) {
      this.canvasList.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
p{
  margin:0 0;
}
.canvas_item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #8c90977e;
  border-left: 1px solid #8c90977e;
  border-right: 1px solid #8c90977e;
}
.canvas_item_node {
  min-width: 80%;
  margin: auto;
}
.canvas_item_button {
  min-width: 20%;
  margin: auto;
}
</style>
