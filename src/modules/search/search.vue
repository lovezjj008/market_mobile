<!--  -->
<template>
  <div>   
     <div class="search-suggest">
       <mt-search  @sure = "sureFn" @cancel = "cancelF" placeholder= "请输入关键字" v-model= "searchVal" cancelText = '返回'>
          <mt-cell class="search-suggestlist" v-for = "(iteam, index) in suggest" :key= "index" :title = "iteam.name">
         </mt-cell>  
       </mt-search>  
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import mtSearch from '@/components/searchInput'
import {getsearchsuggest} from '@/servies/search';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      searchVal: '',
      suggest: []
    }
  },
  components: {
    mtSearch
  },
  mounted () {
   
  },
  computed: {},
  watch: {
    searchVal: function (val) {
      this.querySuggest()
    }
  },
  methods: {
    cancelF () {
      this.$router.go(-1)
    },
    sureFn (){
      this.$router.push('searchlist')
    },
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

<style lang='less'>

.search-suggest {
  font-size: .7rem;
  .mintui-search{
    margin-right: .25rem;
  }
  .mint-cell-wrapper .mint-cell-title{
    font-size: .7rem;
  }
}
.search-suggestlist{
  color:#666;
}
</style>