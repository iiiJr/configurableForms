<!--  -->
<template>
  <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item
      v-for="(item, index) in formList"
      :key="index"
      :label="item.formLabel"
    >
      <a-input
        v-if="item.componentName == 'a-input'"
        v-model="item.value"
        :placeholder="item.placeholder"
      />
      <a-select
        v-if="item.componentName == 'a-select'"
        v-model="item.value"
        :placeholder="item.placeholder"
      >
        <a-select-option
          v-for="(option, index) in item.options"
          :label="option.label"
          :value="option.value"
          :key="index"
          >{{ option.value }}
        </a-select-option>
      </a-select>
      <a-date-picker
        v-if="item.componentName == 'a-data-picker'"
        v-model="item.value"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
      <a-switch
        v-if="item.componentName == 'a-switch'"
        v-model="item.value"
      ></a-switch>
      <a-checkbox-group
        v-if="item.componentName == 'a-checkbox-group'"
        v-model="item.type"
      >
        <a-checkbox
          v-for="(checkbox, index) in item.groups"
          :key="index"
          :value="checkbox.index"
          :name="checkbox.type"
          >{{ checkbox.name }}
        </a-checkbox>
      </a-checkbox-group>
      <a-radio-group
        v-if="item.componentName == 'a-radio-group'"
        v-model="item.value"
      >
        <a-radio
          v-for="(radio, index) in item.groups"
          :key="index"
          :value="radio.name"
          :name="radio.name"
          >{{ radio.name }}
        </a-radio>
      </a-radio-group>
      <!-- 个性化 -->
    </a-form-model-item>
    <slot></slot>
  </a-form-model>
</template>

<script>
//api文档自动生成模板
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

export default {
  components: {},
  props: {
    formList: {
      type: Array,
    },
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang="scss">
//@import url(); 引入公共css类
</style>
