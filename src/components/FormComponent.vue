<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="form-model">
    <a-form-model-item :label="element.title" v-if="element.type === 'input'">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'select'">
      <a-select
        v-model="form.region"
        placeholder="please select your zone">
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
        placeholder="Pick a date"
        style="width: 100%;"
      />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'switch'">
      <a-switch v-model="form.delivery" />
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'checkbox'">
      <a-checkbox-group
        v-model="form.type"
        v-for="(value, index) in element.defaultValue"
        :key="index">
        <a-checkbox :value="index" name="type">
          {{value}}
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item :label="element.title" v-if="element.type === 'radio'">
      <a-radio-group
      v-model="form.resource"
      v-for="(value, index) in element.defaultValue"
      :key="index">
        <a-radio :value="index">
          {{value}}
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
