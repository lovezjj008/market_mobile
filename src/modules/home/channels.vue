 <!-- channels -->
 <template>
   <div ref="channels">
     <div class="channellist">
        <ul class="index-navigator clear">
            <li v-for="channel in channellist" :key = "channel.id" >
              <a data-ignore="push">
                <div class="channel-imgbox">
                  <img :src="channel.img_url" >
                </div>
                <span class="channel-name">{{channel.name}}</span>
              </a>
            </li>
        </ul>
    </div>
   </div>
 </template>
 
 <script>
 export default {
   data () {
     return {
     }
   },
   props: ['channellist'],
   components: {},
 
   computed: {},
 
   mounted () {},
 
   methods: {}
 }
 
 </script>
 <style lang='less' scoped>
  .channellist {
    padding-top: 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    min-height: 4rem;
  }
  .index-navigator li {
    float: left;
    width: 25%;
    text-align: center;
    margin-bottom: .75rem;
    .channel-imgbox {
      margin:  0 auto;
      width: 1.7rem;
      height: 1.7rem;
      img {
        width: 100%;
      }
    }
    .channel-name {
      font-size: .7rem;
    }
  }
 </style>


