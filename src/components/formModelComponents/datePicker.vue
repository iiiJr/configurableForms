<template>
    <a-form-model-item :label="label">
      <a-date-picker
        v-model="date"
        show-time
        type="date"
        :placeholder="placeholder"
        style="width: 100%;"
      />
    </a-form-model-item>
</template>
<script>
export default ({
  name: 'DatePicker',
  props: {
    label: {
      type: String,
      default: 'datePicker'
    },
    placeholder: {
      type: String,
      default: '这是一个日期选择器'
    }
  },
  data () {
    return {
      date: undefined
    }
  }
})
</script>
