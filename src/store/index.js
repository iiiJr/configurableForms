import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentList: [
      { type: 'text', title: '单行文本', id: 1 },
      { type: 'textarea', title: '多行文本', id: 2 },
      { type: 'multiSelect', title: '多选', id: 3 },
      { type: 'select', title: '下拉列表', id: 4 },
      { type: 'cascader', title: '级联下拉', id: 5 },
      { type: 'date', title: '日期', id: 6 },
      { type: 'time', title: '时间', id: 7 },
      { type: 'dateTime', title: '日期时间', id: 8 },
      { type: 'number', title: '数值', id: 9 },
      { type: 'integer', title: '整数', id: 10 }
    ],
    canvasList: [
      { type: 'input', title: '单行文本', placeholder: '', defaultValue: '', id: 101 },
      { type: 'textarea', title: '多行文本', id: 102 },
      { type: 'multiSelect', title: '多选', placeholder: '', defaultValue: [], id: 103 },
      { type: 'select', title: '下拉列表', id: 104 },
      { type: 'cascader', title: '级联下拉', id: 105 },
      { type: 'date', title: '日期', id: 106 },
      { type: 'time', title: '时间', id: 107 },
      { type: 'dateTime', title: '日期时间', id: 108 },
      { type: 'number', title: '数值', id: 109 },
      { type: 'integer', title: '整数', id: 110 }
    ]
  },
  mutations: {
    mutationCanvas (state, val) {
      state.canvasList = val
    }
  },
  actions: {
    handleCanvas ({ commit }, data) {
      commit('mutationCanvas', data)
    }
  }
})

export default store
