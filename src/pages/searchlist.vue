<template>
  <div ref="searchlist">
      <searchlist-head fixed></searchlist-head>
      <div class="searchlist-contain">
         <svg-component v-for = "n in 20" :key= "n"></svg-component> 
      </div>
  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';
import { getsearchlist } from "@/servies/search";
import svgComponent from '@/components/skeletonScreen/goodslist'
import searchlistHead from '@/components/searchlistheader'
export default {
  data() {
    return {
        pageIndex: 0,
  		pageSize: 10,
  		totalPage: 0,
  		listData:[],
		moreShow:true,
		allLoaded: false
    };
  },
  components: {
    svgComponent,
    searchlistHead
  },
  mounted () {
    this.loadqureData()
  },
  methods: {
    loadBottom (id) {
        if((this.pageIndex +1) < this.totalPage) {
            this.pageIndex++
            this.loadqureData(id)
        }else{
            this.allLoaded = true
            this.$broadcast('onBottomLoaded', id);
        }
    },
    loadqureData(id) {
        let url = '/mall-basedoc/search/mallProduct/allMallProduct?searchType=1'
        let data = {
            'channelId': 0,
			'keyWord': '电子', // 关键字
			'page':this.pageIndex,
			'pageSize':this.pageSize,
			'cateCode':'',
        }
        getsearchlist(url, data).then(response => {
            // debugger
        })
    }
  }

};
</script>
<style lang="less" scoped>
    .searchlist-contain{
        // margin-top: 2.5rem;
    }
</style>

