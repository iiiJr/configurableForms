import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentList: [
      { type: 'input', title: '输入框', id: 1 },
      { type: 'textarea', title: '多行文本', id: 2 },
      { type: 'picker', title: '时间选择', id: 3 },
      { type: 'select', title: '下拉列表', id: 4 },
      { type: 'switch', title: '开关', id: 5 },
      { type: 'checkbox', title: '多选框', id: 6 },
      { type: 'radio', title: '单选框', id: 7 }
    ],
    canvasList: [
      { type: 'input', title: '输入框', placeholder: '', id: 101 },
      { type: 'textarea', title: '多行文本', placeholder: '', id: 102 },
      { type: 'picker', title: '时间选择', placeholder: '', id: 103 },
      { type: 'select', title: '下拉列表', placeholder: '', defaultValue: ['test1', 'test2'], id: 104 },
      { type: 'switch', title: '开关', placeholder: '', id: 105 },
      { type: 'checkbox', title: '多选框', placeholder: '', defaultValue: ['test1', 'test2'], id: 106 },
      { type: 'radio', title: '单选框', placeholder: '', defaultValue: ['test1', 'test2'], id: 107 }
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
