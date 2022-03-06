import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentList: [
      { type: 'input', title: '输入框' },
      { type: 'textarea', title: '多行文本' },
      { type: 'picker', title: '时间选择' },
      { type: 'select', title: '下拉列表', defaultValue: ['test1', 'test2'] },
      { type: 'switch', title: '开关' },
      { type: 'checkbox', title: '多选框', defaultValue: ['test1', 'test2'] },
      { type: 'radio', title: '单选框', defaultValue: ['test1', 'test2'] }
    ],
    canvasList: [
      { type: 'input', title: '输入框' },
      { type: 'textarea', title: '多行文本' },
      { type: 'picker', title: '时间选择', placeholder: '' },
      { type: 'select', title: '下拉列表', placeholder: '', defaultValue: ['test1', 'test2'] },
      { type: 'switch', title: '开关' },
      { type: 'checkbox', title: '多选框', defaultValue: ['test1', 'test2'] },
      { type: 'radio', title: '单选框', defaultValue: ['test1', 'test2'] }
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
