<!--  -->
<template>
  <div>
     <div class="search-suggest">
      <mt-search id="mintsearch" placeholder= "请输入关键字" v-model= "searchVal"  ref = "mintsearch">
        <mt-cell class="search-suggestlist" v-for = "(iteam, index) in suggest" :key= "index" :title = "iteam.name">
        </mt-cell>
      </mt-search>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import { Search } from 'mint-ui';
import {getsearchsuggest} from '@/servies/search';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      searchVal: '',
      suggest: []
    }
  },
  components: {},
  mounted () {
    var self = this
    this.$nextTick(function () {
      // DOM 更新了
      $('#mintsearch').find('.mint-searchbar-cancel').on('click', function() {
        self.$router.go(-1)
      })
    })
  },
  computed: {},
  watch: {
    searchVal: function (val) {
      this.querySuggest()
    }
  },
  methods: {
    querySuggest: _.debounce(function () {
      let malltype = 'ORDINARY'
      let keyword = this.searchVal.trim()
      if(!keyword) {
        return
      }
      getsearchsuggest(malltype, keyword).then(response => {
        if (response.status == 200) {
          if (response.data.success) {
            this.suggest = response.data.result
          } else {
            Toast(response.data.resultMsg || '服务错误!');
          }
        }
      })
    }, 500)
  }
}
</script>

<style lang='less' scoped>
.search-suggest {
  font-size: .7rem;
  .mintui-search{
    margin-right: .25rem;
  }
}
.search-suggestlist{
  color:#666;
}
</style>