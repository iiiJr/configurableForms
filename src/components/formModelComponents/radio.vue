<template>
     <a-form-model-item :label="label" style="text-align: left;">
      <a-radio-group v-model="resource">
        <a-radio
        v-for="(item, index) in options"
        :key="index"
        :value="item"
        >
          {{item}}
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
</template>
<script>

export default ({
  name: 'Radio',
  props: {
    label: {
      type: String,
      default: 'radio'
    },
    options: {
      type: Array,
      default: () => ['null1', 'null2', 'null3']
    }
  },
  data () {
    return {
      resource: '1'
    }
  }
})
</script>
