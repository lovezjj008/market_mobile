<template>
  <div>
    <div class="contain">
    <transition :name="transitionName" :mode="mode">
        <keep-alive>
            <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>

      <transition :name="transitionName" :mode="mode">
        <router-view class="child-view" v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
    <mt-tabbar v-model="selected" class="footerNav" :fixed = "true">
      <mt-tab-item id="home" @click.native="handleClick" > 
        <div slot="icon" class = "icon fa fa-home"> </div>
        <div >首页</div>       
      </mt-tab-item>
      <mt-tab-item id="goodsclass" @click.native="handleClick">
       <div slot="icon" class = "icon fa fa-cubes"> </div>
        <div>分类</div>
      </mt-tab-item>
      <mt-tab-item id="shopcar" @click.native="handleClick">
        <div slot="icon" class = "icon fa fa-shopping-cart"> </div>
        <div>购物车</div>
      </mt-tab-item>
      <mt-tab-item id="myinfo" @click.native="handleClick">
        <div slot="icon" class = "icon fa fa-user-circle-o"> </div>
        <div>我的</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { svgIcon, TabItem } from 'mint-ui';
export default {
  components: {
    svgIcon,
    svgIcon,
    TabItem
  },
  data () {
    return {
      mode: 'out-in',
      transitionName: 'router-fade',
      selected: this.$store.state.global.footernav_select
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.meta.transitionName && to.meta.transitionName === 'slide') {
      let isBack = this.$router.isBack
      this.mode = ''
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    } else {
      this.mode = 'out-in'
      this.transitionName = 'router-fade'
    }
    setTimeout(() => {
      next()
    }, 60)
  },
  mounted () {
    
  },
  components:{
    svgIcon
  },
  watch: {
    '$route': function (path) {
      this.selected = this.$store.state.global.footernav_select
    }
  },
  methods: {
    handleClick () {
      this.$router.push(this.selected)       
    }
  }
}
</script>

<style scoped lang="less">
  .child-view {
    position: absolute;
    transition: all .3s cubic-bezier(.55,0,.1,1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    will-change: transform;
  }
  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    z-index: 1;
  }
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
  }
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
  .mint-tabbar > .mint-tab-item.is-selected {
    color: red;
  }
  .footerNav { 
    color: #999999;
    .icon {
      margin-bottom: .25rem;
      font-size: 1rem;
    }
  }
  .contain{
    margin-bottom: 2.75rem;
  }
</style>
