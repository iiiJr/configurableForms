const getFormName = name => {
  return formNameMap[name]
}

const formInput = (obj, model) => {
  return `
    <a-form-model-item label="${obj.title}">
      <a-input v-model="${model}" />
    </a-form-model-item>
    `
}
const formTextarea = (obj, model) => {
  return `
    <a-form-model-item label="${obj.title}">
      <a-input v-model="${model}" type="textarea" />
    </a-form-model-item>
    `
}
const formPicker = (obj, model) => {
  return `
  <a-form-model-item label="${obj.title}" >
    <a-date-picker
      v-model="${model}"
      show-time
      type="date"
      placeholder="${obj.placeholder}"
      style="width: 100%;"
    />
  </a-form-model-item>
    `
}
const scriptSection = data => {
  let temp = ''
  for (const val of data) {
    // console.log(val)
    temp += `${val[0]}: ${val[1]}`
  }
  return `
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
        ${temp}
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
  `
}
const formSelect = (obj, model) => {
  let insideData = ''
  const chil = () => {
    let temp = ''
    for (let i = 0; i < obj.defaultValue.length; i++) {
      temp += `<a-option value="${i}">${obj.defaultValue[i]}</a-option>
          `
    }
    return temp
  }
  insideData = chil()
  return `
    <a-form-model-item label="${obj.title}">
      <a-select v-model="${model}" placeholder="${obj.placeholder}">
          ${insideData}
      </a-select>
    </a-form-model-item>
    `
}
const formSwitch = (obj, model) => {
  return `
    <a-form-model-item label="${obj.title}">
      <a-switch v-model="${model}" />
    </a-form-model-item>
    `
}
const formCheckbox = (obj, model) => {
  let insideData = ''
  const chil = () => {
    let temp = ''
    for (let i = 0; i < obj.defaultValue.length; i++) {
      temp += `<a-checkbox value="${i}">${obj.defaultValue[i]}</a-checkbox>
          `
    }
    return temp
  }
  insideData = chil()
  return `
    <a-form-model-item label="${obj.title}">
      <a-checkbox-group v-model="${model}">
          ${insideData}
      </a-checkbox-group>
    </a-form-model-item>
    `
}
const formRadio = (obj, model) => {
  let insideData = ''
  const chil = () => {
    let temp = ''
    for (let i = 0; i < obj.defaultValue.length; i++) {
      temp += `<a-radio value="${i}">${obj.defaultValue[i]}</a-radio>
          `
    }
    return temp
  }
  insideData = chil()
  return `
    <a-form-model-item label="${obj.title}">
      <a-radio-group v-model="${model}">
          ${insideData}
      </a-radio-group>  
    </a-form-model-item>
    `
}
const formNameMap = {
  input: formInput,
  textarea: formTextarea,
  picker: formPicker,
  select: formSelect,
  switch: formSwitch,
  checkbox: formCheckbox,
  radio: formRadio
}
const formTypeMap = {
  input: '\'\'',
  textarea: '\'\'',
  picker: undefined,
  select: undefined,
  switch: false,
  checkbox: '[]',
  radio: '\'\''
}
const setForm = data => {
  const countMap = new Map()
  const form = new Map()
  let tempName = ''
  data.forEach(item => {
    if (countMap.has(item.type)) {
      countMap.set(item.type, countMap.get(item.type) + 1)
    } else {
      countMap.set(item.type, 1)
    }
    tempName = item.type + 'value' + countMap.get(item.type)
    form.set(tempName, formTypeMap[item.type])
  })
  // console.log(form)
  let template = `
  // 需要先导入antd组件
  <template>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="form-model">`
  for (let i = 0; i < data.length; i++) {
    tempName = data[i].type + 'value' + countMap.get(data[i].type)
    const funcName = getFormName(data[i].type)
    template += funcName(data[i], tempName)
  }
  template += `
    </a-form-model>
  </template>
    `
  template += scriptSection(form)
  // console.log(template)
  return template
}

// const formTextarea = obj => {
//   return `
//     <a-form-model-item :label="${obj.title}">
//       <a-input v-model="${obj.name}" />
//     </a-form-model-item>
//     `
// }

const utils = ({
  setForm
})
export default utils
