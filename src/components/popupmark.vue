<!--  -->
<template>
  <div>
      <div class="markdiv" v-show = "markShow" @click = "markClick"></div>
  </div>
</template>

<script>
import Bus from '@/config/event'
import { mapState } from "vuex"
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {
    ...mapState({
      markShow: state => state.global.markShow
    })
  },
  mounted: {},
  watch: {
    markShow (val) {
      if (val) {
        document.documentElement.style.overflowY = 'hidden' 
      } else {
        document.documentElement.style.overflowY = 'auto' 
      }
    }
  },
  methods: {
     markClick () {
      Bus.$emit('markClick', true)
    }
  }
}
</script>
<style lang='less' scoped>
    .markdiv{
      position: fixed;
      width: 100%;
      height: 100%;
      background:rgba(0, 0, 0, 0.2);
      z-index: 2000;
      top: 0;
      left: 0;
    }
</style>