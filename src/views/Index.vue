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
          <div class="center-button">
            <a-button style="margin: auto;" type="primary" @click="onSubmit">
              生成表单
            </a-button>
          </div>
        </div>
        <div class="right">
          <JSONEdit v-model="updateJSON" />
        </div>
      </div>
      <a-modal cancel-text="取消" okText="创建代码" v-model="visible" title="预览" @ok="handleOk">
        <div class="modal_style">
          <FormComponent
          v-for="(element, index) in this.previewData"
          :key=index
          :element="element"
          ></FormComponent>
        </div>
    </a-modal>
    <a-modal cancel-text="取消" okText="创建代码" v-model="visibleCode" title="vue代码" @ok="handleCode">
      <div>
        <MonacoEditor
                height="600"
                width="100%"
                class="vs"
                :key="randomkey"
                style="text-align: left;background-color: #fff"
                language="Vue"
                :code="code"
                :editorOptions="options"
                @mounted="onMounted"
                @codeChange="onCodeChange"
        >
        </MonacoEditor>
      </div>
    </a-modal>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import ComponentNode from '../components/ComponentNode.vue'
import FormComponent from '../components/FormComponent.vue'
import JSONEdit from '../components/JSONEdit.vue'
import utils from './util/JsonToVue'
import MonacoEditor from 'vue-monaco-editor'

export default {
  name: 'index',
  components: {
    // HelloWorld
    MonacoEditor,
    ComponentNode,
    JSONEdit,
    FormComponent,
    draggable
  },
  data () {
    return {
      code: 'oooo',
      editor: null,
      options: {
        theme: 'vs',
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        automaticLayout: true,
        glyphMargin: true,
        showFoldingControls: 'always',
        formatOnPaste: true,
        formatOnType: true,
        folding: true,
        isWholeLine: true,
        className: 'rightLineDecoration'
      },
      randomkey: 123,
      activeIndex: {},
      editElement: -1,
      replaceJson: [],
      visible: false,
      visibleCode: false,
      previewData: []
      // vueData: []
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
    },
    updateJSON: {
      get () {
        return this.$store.state.canvasList
      },
      set (val) {
        this.$store.commit('mutationCanvas', val)
      }
    }
  },
  mounted () {
    this.replaceJson = this.canvasList
  },
  // watch() {

  // },
  methods: {
    handleGroupItem (index, element) {
      this.activeIndex = index
      this.editElement = element
    },
    log: (evt) => {
      window.console.log(evt)
    },
    onSubmit () {
      this.previewData = []
      this.log('submit!', this.canvasList)
      console.log(this.canvasList)
      for (const val in this.canvasList) {
        this.previewData[val] = this.canvasList[val]
      }
      // console.log(this.previewData)
      if (this.previewData.length === 0) {
        console.log('没任何表单')
      } else {
        this.showModal()
      }
    },
    delItem (index) {
      this.canvasList.splice(index, 1)
      // this.updateJSON.get()
    },
    // 模态框事件
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.visible = false
      this.createRandomkey()
      this.code = utils.setForm(this.canvasList)
      this.visibleCode = true
    },
    handleCode (e) {
      this.visibleCode = false
    },
    // vscode编辑器事件
    onMounted (editor) {
      this.editor = editor
      // console.log(editor)
    },

    onCodeChange (editor) {
      // console.log(this.editor.getValue())
      // console.log(editor)
    },
    createRandomkey () {
      this.randomkey = Math.floor(Math.random() * (10, 1000000012313))
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.body {
    display: flex;
    flex-direction: row;
    height: 100%;
}
.left {
  background-color: #838383d7;
  width: 15%;
  height: 100%;
}
.center {
  background-color: #cfcfcfda;
  width: 50%;
  height: 100%;
  overflow:auto;
}
.right {
  width: 35%;
  height: 100%;
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
  background-color: #b9b9b9da;
}
.canvas_item_node {
  min-width: 80%;
  margin: auto;
}
.canvas_item_button {
  min-width: 20%;
  margin: auto;
}
.center-button {
  margin-top: 16px;
  display: flex;
  margin-bottom: 16px;
}
.modal_style {
  height: 600px;
  overflow:auto;
}
</style>
