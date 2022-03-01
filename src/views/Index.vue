<template>
  <div class="container">
      <div class="header">header</div>
      <div class="body">
        <div class="left">
            <form-model
            @updateJsonData="update"
            :jsonData="jsonData"
            ></form-model>
        </div>
        <div class="right">
            <!-- <hello-world></hello-world> -->
            <json-edit
            @change="update"
            :value="jsonData"></json-edit>
        </div>
      </div>
      <div class="footer">footer</div>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import formModel from '../components/formModel.vue'
import jsonEdit from '../components/jsonEdit.vue'
// @ is an alias to /src
// import form from 'form'

export default {
  name: 'index',
  components: {
    // HelloWorld
    formModel,
    jsonEdit
  },
  data () {
    return {
      jsonData: [
        {
          name: 'testinput',
          label: 'test123',
          placeholder: ''
        },
        {
          name: 'testselect',
          label: '',
          options: ['test1'],
          placeholder: ''
        },
        {
          name: 'testdatepicker',
          label: '',
          placeholder: ''
        },
        {
          name: 'testswitch',
          label: ''
        },
        {
          name: 'testcheckbox',
          label: '',
          options: ['test1']
        },
        {
          name: 'testradio',
          label: '',
          options: ['test1']
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    update (data) {
      if (this.jsonData !== data) {
        this.jsonData = data
      }
      // console.log(data)
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
.header {
    // padding-bottom: 8px;
    background-color: #2c3e50;
}
.body {
    padding-top: 8px;
    display: flex;
    flex-direction: row;
}
.left {
  width: 50%;
  padding-left: 8px;
}
.right {
  width: 50%;
  padding-right: 8px;
}
.footer {
    padding-top: 8px;
}
</style>
