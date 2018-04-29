<!-- visitedlist -->
<template>
  <div>
     <div>
      <chunk-title :title = "title"></chunk-title>
    </div>
    <div class="visited-list">
      
    </div>
  </div>
</template>

<script>
import chunkTitle from '@/components/chunktitle'
export default {
  data () {
    return {
      title: '最近浏览'
    }
  },

  components: {
    chunkTitle
  },

  mounted () {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>