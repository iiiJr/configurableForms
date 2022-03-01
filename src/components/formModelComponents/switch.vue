<template>
    <a-form-model-item :label="label" style="text-align: left;">
      <a-switch v-model="value" />
    </a-form-model-item>
</template>
<script>
export default {
  name: 'Switch',
  props: {
    label: {
      type: String,
      default: 'switch'
    }
  },
  data () {
    return {
      value: false
    }
  }
}
</script>
