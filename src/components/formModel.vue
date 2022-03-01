<template>
<div>
      <a-form-model
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol">
        <draggable
            class="list-group"
            tag="ul"
            v-model="list"
            v-bind="{
              animation: 200,
              group: 'description',
              disabled: false,
              ghostClass: 'ghost'
            }"
          >
              <li
                class="list-group-item"
                v-for="(element, key) in list"
                :key="key"
              >
                <component
                  :key="key"
                  :is="element.name"
                  :label="element.label || 'label'"
                  :placeholder="element.placeholder || 'placeholder'"
                  :options="element.options || []"
                >
                </component>
              </li>

                <!-- v-for="element in list"
                :key="element.order" -->
        </draggable>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;">
            Cancel
          </a-button>
        </a-form-model-item>
      </a-form-model>
      </div>
</template>
<script>
import Draggable from 'vuedraggable'
import testinput from '@/components/formModelComponents/input.vue'
import testselect from '@/components/formModelComponents/select.vue'
import testdatepicker from '@/components/formModelComponents/datePicker.vue'
import testswitch from '@/components/formModelComponents/switch.vue'
import testcheckbox from '@/components/formModelComponents/checkBox.vue'
import testradio from '@/components/formModelComponents/radio.vue'
export default {
  name: 'formModel',
  components: {
    Draggable,
    testinput,
    testselect,
    testdatepicker,
    testswitch,
    testcheckbox,
    testradio
  },
  props: {
    msg: Object,
    jsonData: null
  },
  data () {
    return {
      wrapperCol: { span: 14 },
      labelCol: { span: 4 },
      list: [],
      form: {}
    }
  },
  mounted () {
    this.updateList(this.jsonData)
    // console.log(this.jsonData)
  },
  watch: {
    list: {
      handler (newVal, oldVal) {
        // console.log(newVal)
        this.$emit('updateJsonData', newVal)
      },
      deep: true
    },
    jsonData: {
      handler (newVal, oldVal) {
        this.updateList(newVal)
      },
      deep: true
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!', this.jsonData)
    },
    updateList (data) {
      this.list = data
    }
  }
}
</script>
<style lang="less" scoped>
li {
  list-style-type:none;
}
</style>
