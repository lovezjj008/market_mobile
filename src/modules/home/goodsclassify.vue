<!-- floor -->
<template>
  <div ref="classify">
    <div>
      <chunk-title :title = "title"></chunk-title>
    </div>
    <div>
      <ul class="classifylist clear">
        <li v-for = "iteam in categorylist" :key = "iteam.category_id" class="classifyiteam b-bottom-right-1 ">
          <div class="ellipsis categtiele">{{iteam.category_name}}</div>
          <div class="ellipsis categthild">
             <span v-for = "child in iteam.childs" :key = "child.category_id">{{child.category_name}}</span>
          </div>
          <div class="categimg">
            <img :src="iteam.picture_uri" alt="pic">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chunkTitle from '@/components/chunktitle'
export default {
  data () {
    return {
      title: '商品分类'
    }
  },
  props: ['categorylist'],
  components: {
    chunkTitle
  }
}

</script>
<style lang='less' scoped>
    .classifylist{
      display: block;
    }
    .classifyiteam {
      box-sizing: border-box;
      float: left;
      width: 33.33%;
      padding: .5rem;
    }    
    .categtiele {
      font-size: .7rem;
    }
    .categthild {
      font-size: .6rem;
      color: #999999;
      span {
        padding-right:.25rem;
      }
    }
    .categimg  {
      margin-top: .25rem;
      text-align: center;
      img{
        width: 3.2rem;
        height: 3.2rem;
        display: inline-block;
        border: none;
      }
    }
</style>