<template>
     <a-form-model-item :label="label">
       <a-select
        v-model="test"
        :placeholder="placeholder"
        >
         <a-select-option
         v-for="(item, index) in options"
         :key="index"
         >
           {{item}}
         </a-select-option>
       </a-select>
     </a-form-model-item>
</template>
<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      default: 'select'
    },
    placeholder: {
      type: String,
      default: '这是一个选择列表'
    },
    options: {
      type: Array,
      default: () => ['null1', 'null2', 'null3']
    }
  },
  data () {
    return {
      test: undefined
    }
  }
}
</script>
