<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="form-model">
    <a-form-model-item :label="element.title" v-if="element.type === 'input'">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'select'">
      <a-select
        v-model="form.region"
        :placeholder="element.placeholder">
        <a-select-option
         v-for="(val, index) in element.defaultValue"
        :key="index"
        :value="index">
          {{val}}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'picker'">
      <a-date-picker
        v-model="form.date1"
        show-time
        type="date"
        :placeholder="element.placeholder"
        style="width: 100%;"
      />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'switch'">
      <a-switch v-model="form.delivery" />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'checkbox'">
      <a-checkbox-group v-model="form.type">
        <a-checkbox
        v-for="(val, index) in element.defaultValue"
        :key="index"
        :value="index"
        name="type">
          {{val}}
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'radio'">
      <a-radio-group
      v-model="form.resource">
        <a-radio
        v-for="(val, index) in element.defaultValue"
        :key="index"
        :value="index">
          {{val}}
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'textarea'">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: 'FormComponent',
  props: {
    element: {
      type: Object
    }
  },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.form-model {
  display: flex;
  flex-flow: column;
  justify-content: left;
}
</style>
