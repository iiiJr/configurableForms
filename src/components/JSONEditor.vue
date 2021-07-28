<template>
  <div class="jsonEditor">
    <vue-json-editor
      v-model="json"
      :show-btns="false"
      :mode="'code'"
      lang="zh"
      style="height: 600px"
      @json-change="onJsonChange"
    ></vue-json-editor>
  </div>
</template>
<script>
import vueJsonEditor from "vue-json-editor";

export default {
  data() {
    return {};
  },
  props: {
    json: { type: Array },
    height: {
      type: Number,
      default: 600,
    },
  },

  components: {
    vueJsonEditor,
  },

  methods: {
    onJsonChange(value) {
      this.$emit("JsonChange", value);
    },
  },
};
</script>
<style lang="scss">
//@import url(); 引入公共css类
.jsoneditor-vue {
  height: 100%;
}
</style>
