<template>
  <div ref="searchlist">
     
  </div>
</template>

<script>
// import searchIteam from '@/components/searchiteam'
import { Loadmore } from 'mint-ui';
import { getsearchlist } from "@/servies/search";
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
  comments: {
    
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
        let url = '/mall-basedoc/search/mallProduct/allMallProduct?searchType=3'
        let data = {
            'channelId': 0,
			'keyWord': '电子', // 关键字
			'page':this.pageIndex,
			'pageSize':this.pageSize,
			'cateCode':'',
        }
        getsearchlist(url, data).then(response => {
            debugger
        })
    }
  }

};
</script>

<style>
