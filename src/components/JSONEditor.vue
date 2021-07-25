<!--  -->
<template>
  <div>
    <!-- 设置外层高度，jsoneditor 会根据外层高度来初始化 -->
    <div style="height: 600px">
      <!-- 提供一个绑定 id 的元素进行初始化 -->
      <div id="jsoneditor"></div>
    </div>
  </div>
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
  data() {
    return {};
  },
  model: {},
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
<style lang="less" scoped>
//@import url(); 引入公共css类
@import "~jsoneditor/dist/jsoneditor.min.css";
</style>
