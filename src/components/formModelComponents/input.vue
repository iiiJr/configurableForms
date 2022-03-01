<template>
  <a-form-model-item :label="label" prop="region">
    <a-input v-model="value" :placeholder='placeholder' />
  </a-form-model-item>
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      default: 'input'
    },
    placeholder: {
      type: String,
      default: '这是一个输入框'
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
