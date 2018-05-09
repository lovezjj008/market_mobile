<template>
  <div class="mint-search">
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mint-searchbar-core">
      </div>
      <a
        style="color: #d40a0a"
        class="mint-searchbar-cancel"
        v-show = "visible"
        @click = "sureFn"
        v-text = "sureText">
      </a>
      <a
        class="mint-searchbar-cancel"
        @click = "cancelFn"
        v-show = "visible"
        v-text = "cancelText">
      </a>
    </div>
    <div class="mint-search-list" v-show="show || currentValue">
      <div class="mint-search-list-warp">
        <slot>
         
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mt-search :value.sync="value" :result.sync="result"></mt-search>
 * <mt-search :value.sync="value">
 *   <mt-cell v-for="item in result" :title="item"></mt-cell>
 * </mt-search>
 */
export default {
  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },
  components: { },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  },
  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    sureText: {
      default: '搜索'
    },
    result: Array
  },
  mounted() {
    this.autofocus && this.$refs.input.focus();
  },
  methods: {
    sureFn () {
        this.$emit('sure')
    },
    cancelFn () {
        this.visible = false
        this.currentValue = ''
        this.$emit('cancel')
    }
  }
};
</script>

<style lang="css">

</style>