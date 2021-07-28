<template>
  <div style="height: 100%; width: 100%">
    <a-row type="flex">
      <a-col :span="10" class="card_top_style">
        <DynamicForm :formList="formDataList" class="formStyle">
          <a-form-model-item>
            <a-button type="primary" @click="onSubmit"> Create </a-button>
            <a-button style="margin-left: 10px"> Cancel </a-button>
          </a-form-model-item>
        </DynamicForm>
        <vueJsonEditor :json="formDataList" style="height: 200px" />
      </a-col>
      <a-col :span="14" class="card_top_style">
        <vueJsonEditor
          :json="formDataList"
          style="height: 600px"
          @JsonChange="JsonChange"
        />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import DynamicForm from "../components/formList.vue";
import vueJsonEditor from "../components/JSONEditor.vue";
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
      dataList: [],
    };
  },
  components: {
    // 使用动态表单组件
    DynamicForm,
    vueJsonEditor,
  },
  methods: {
    onSubmit() {
      const formValueList = this.formDataList;
      console.log(formValueList);
      const jsonList = JSON.stringify(formValueList);
      console.log(jsonList);
    },
    JsonChange(value) {
      this.formDataList = value;
    },
  },
};
</script>

<style lang="scss">
//@import url(); 引入公共css类
.card_top_style {
  margin-top: 16px;
}
</style>
