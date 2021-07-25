<template>
  <div>
    <DynamicForm :formList="formDataList">
      <a-form-model-item>
        <a-button type="primary" @click="onSubmit"> Create </a-button>
        <a-button style="margin-left: 10px"> Cancel </a-button>
      </a-form-model-item>
    </DynamicForm>
  </div>
</template>
<script>
import DynamicForm from "../components/formList.vue";
export default {
  data() {
    return {
      formDataList: [
        {
          componentName: "a-input",
          formLabel: "活动名称",
          value: "",
          placeholder: "test",
        },
        {
          componentName: "a-select",
          formLabel: "活动名称",
          value: "select",
          placeholder: "select one",
          options: [
            {
              label: "options",
              value: "111",
            },
            {
              label: "options",
              value: "222",
            },
          ],
        },
        {
          componentName: "a-data-picker",
          formLabel: "活动时间",
          value: undefined,
          placeholder: "picker",
        },
        {
          componentName: "a-switch",
          formLabel: "活动开关",
          value: true,
        },
        {
          componentName: "a-checkbox-group",
          formLabel: "活动多选",
          type: [],
          groups: [
            {
              index: 1,
              name: "checkbox1",
              type: "type",
            },
            {
              index: 2,
              name: "checkbox2",
              type: "type",
            },
          ],
        },
        {
          componentName: "a-radio-group",
          formLabel: "活动单选",
          value: "a-radio-group",
          groups: [
            {
              name: "radio",
            },
            {
              name: "radio2",
            },
          ],
        },
      ],
    };
  },
  components: {
    // 使用动态表单组件
    DynamicForm,
  },
  methods: {
    onSubmit() {
      const formValueList = this.formDataList;
      console.log(formValueList);
      const jsonList = JSON.stringify(formValueList);
      console.log(jsonList);
    },
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
