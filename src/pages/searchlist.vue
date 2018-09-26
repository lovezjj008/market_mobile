<template>
  <div ref="searchlist">
      <ycHeader >
            <mt-button icon="back" slot="left" @click = "routerFn">返回</mt-button>
            <div class="searchtitle ellipsis" slot="center">
                <span class="key">{{keyword}}</span>
                <span class="searchico fa fa-search"></span>
            </div>
            <div slot="right" class="searchmore">
                <mt-button icon="more" @click="popupControl"></mt-button>
                <div class="searchpop" v-show = "popupVisible">
                    <div>sdfas</div>
                </div>
            </div>
      </ycHeader>
      
      <div class="searchlist-contain">
          <div v-if = "listData.length == 0">
              <svg-component  v-for = "n in 8" :key= "n"></svg-component> 
          </div>
         <div class="searchlist-box">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill = 'false'>
             <ul >
                 <li class="list-li" v-for = "iteam in listData" :key = "iteam.is">
                     <div class="clear listData-iteam">
                         <div class="listData-img pull-left">
                             <img  v-lazy = "iteam.picture_uri + '@80w'" alt="pic">
                         </div>
                         <div class="listData-info" >
                                <div class="title" v-html="iteam.title"></div>
                                <div class="color-waring">
                                    <span>{{iteam.tax_price | currency}}</span>
                                </div>
                                <div class="supplyer">
                                    <span>{{iteam.supplier_name}}</span>
                                </div>
                         </div>
                        
                     </div>
                    
                 </li>
             </ul>
            </mt-loadmore>
         </div>
      </div>
      <popup-mark></popup-mark>
  </div>
</template>

<script>
import { Loadmore, Toast } from 'mint-ui';
import Bus from '@/config/event'
import { getsearchlist } from "@/servies/search";
import svgComponent from '@/components/skeletonScreen/goodslist'
import ycHeader from '@/components/ycheader'
import popupMark from '@/components/popupmark'
export default {
  data() {
    return {
        pageIndex: 0,
  		pageSize: 10,
  		totalPage: 0,
  		listData:[],
		moreShow:true,
        allLoaded: false,
        popupVisible: false,
        keyword: '电子'
    };
  },
  components: {
    svgComponent,
    ycHeader,
    popupMark
  },
  created() {
    var self = this
    Bus.$on('markClick', function (state) {
        self.popupVisible = false
    })
  },
  mounted () {
    this.loadqureData()
  },
  watch: {
    popupVisible (val) {
        this.$store.dispatch('markchange', val)
    }
  },
  methods: {
    popupControl () {
        this.popupVisible = !this.popupVisible
        this.$store.dispatch('markchange', this.popupVisible )
    },
    routerFn () {
        this.$router.isBack = true
        this.$router.go(-1)
    },
    loadBottom ( ) {
        if((this.pageIndex +1) === this.totalPage) {
              this.allLoaded = true
        }else{
            this.pageIndex++
            this.loadqureData()
        }        
    },
    loadqureData () {
        let url = '/mall-basedoc/search/mallProduct/allMallProduct?searchType=1'
        let data = {
            'channelId': 0,
			'keyWord': '电子', // 关键字
			'page':this.pageIndex,
			'pageSize':this.pageSize,
			'cateCode':'',
        }
        getsearchlist(url, data).then(response => {
            if(response.status === 200) {
                if (response.data.success) {
                    this.totalPage = response.data.result.totalPage
                    this.listData = this.listData.concat(response.data.result.data)
                } else {
                    Toast(response.data.resultMsg || '网络异常')
                }
            }
            this.$refs.loadmore.onBottomLoaded();
        })
    }
  }

};
</script>
<style lang="less" scoped>
    .searchlist-contain {
        font-size: .7rem;
        background: #f5f5f5;
       .listData-info{
           margin-left: 100px; 
           position: relative;
           .title {
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
           }
           .supplyer{
               color: #666;
           }
        }
        .list-li {
           padding: .5rem;
           background: #ffffff;
           border-radius: 0 0  .25rem .25rem;
           margin-bottom: .5rem;
        }
    }
    .searchtitle{
       box-sizing: border-box;
       border: 1px solid #dddddd;
       border-radius: 1.2rem;
       height: 1.2rem;
       background: #ffffff;
       color: #999;
       line-height: 1.2rem;
       width: 8rem;
       padding-right: 20px;
       position: relative;       
       .searchico {
           position: absolute;
           right: .5rem;
           line-height: 1.2rem;
           color: #dddddd;
       }
    }
    .searchmore{
        position: absolute;
        top: 0;
        right: .5rem;
        .searchpop {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 2rem;
            right: -5px;
            color: #333333;
            text-align: left;
            box-sizing: border-box;
            padding: 10px;
            background: #ffffff;
            border-radius: .25rem;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
            z-index: 2001;
        }
         .searchpop:before {
            display: inline-block;
            width: 0;
            height: 0;
            border: solid transparent;
            border-width: 8px;
            border-bottom-color: #fff;
            content: "";
            position: absolute;
            top: -16px;
            right: 5px;
        }
    }
   
</style>

