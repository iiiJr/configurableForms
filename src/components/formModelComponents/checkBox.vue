<template>
    <a-form-model-item :label="label" style="text-align: left;">
      <a-checkbox-group v-model="arr">
        <a-checkbox
        v-for="(item, index) in options"
        :key="index"
        :value="item"
        name="type">
          {{item}}
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
</template>
<script>

export default ({
  name: 'CheckBox',
  props: {
    label: {
      type: String,
      default: 'checkBox'
    },
    options: {
      type: Array,
      default: () => ['null1', 'null2', 'null3']
    }
  },
  data () {
    return {
      arr: []
    }
  }
})
</script>
