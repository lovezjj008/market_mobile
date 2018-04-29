<template>
  <div ref="homeheader" class="homeheader clear">
    <div class="pull-left thinkChange">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABACAYAAACkwA+xAAAAAXNSR0IArs4c6QAAAylJREFUaAXtm01rFEEQhpMYFNT4dREkePMmyUEUwYt4ERRBxYMHEcnRXxDQQ/wFgoj4C+LHXfHqyZvgSVTIxRDx4icJESHrU7PTh4zbPV0zNdmZbBe86Z3p6qq3qnq7d2c7Y2MK6fV602ARrIAoUZjPVKOM9pWEg3CZjvUxHquYG32H/qHYMaI3jmj0JQ6NPrrfwCxulpXj/OpwkCyK/AHz4Ihfu9ke8Z1zEC4ii6YeMeim7ryp4RrG4CRJF1mpYeb/oX2b2d+hVbTICjZS4UyKfbWuGzFai1F/sIbXhIG/zphIwXamVEqiqbLKhHVGPVW2M6VSEh2pyk4qknNPobuVqm3ltZU5SL5SBrZlBqKeIvDN4gXRX2h5Bl7ytOJiiONIbT2hRKS+lIGUgZSBbmSA7WdB0Da2jfDCaCYtDDaa10jtsynYtk1VKz6pslaZbJudVNm2VcSKj7qybGqt+slSkwhNsF9ywzc1DhrWdVwcNxt3VLTzxwyiHstIughWTqV0+gBJ9DTOT6PMEvATYDttMFhBhINwsT0pU4FIGpIykDKQMmCbAbaXfeAKOGxr2caaKT+MzQCR8zb0bK3Aqxa/0h+jcXAfyqcjaN9iL/4QoWeqouFXGizMPoP9AYbyxUBmwt6ATpNdOn5k5zF4Cl4BkddAri+VsUTnHBA5UaZbtR/bJvzcx8UpiBwA0orsAXK9Sy5aIPb8yKB6AWBM45V1ya7Lz1XW2dvWbXCBIpMynddBaPERnU3CuNCCtkk3dMHq/jPUr+XnC/YMhm7jaBU8AG9CTgf0/RhwT3vrLwN2egZV4pcFS2CyAJwF13Ljd2jlHMUj8BFcBT6ZoWOh0DlXuK5yueEGmfHD0G6wDkSW+k3PBe38eVv0G12gsG/Gb4L3xRqRyIOro+ByHtXvvB16Y8kvm8YYfC5RkcWDQ49uAAErfmnrccml0jt4XVZtk23G+dS0Wn7Frae4Zx7D+XsNgYZ1a/FzW88pSN4A7sjep5y0/NvX9fy1rzlOx11fp8V9KmjCz1X2O6ROgmXwkAVhSUjS/qJ5Jq99ApG39MknrK8+HYP7Jvz+AYRbd3VZ79stAAAAAElFTkSuQmCC" alt="">
    </div>
    <div class="pull-left searchbox" @click = "roudtefn">
      <span class="fa fa-search"></span>
      <span>请输入搜索产品名称</span>
    </div>
    <div class="pull-right markettype" >
      <span  @click = "selsectmarketfn">{{currmarket.name}}</span>
    </div>
    <div class="markeselect" v-show = "marketshow">
      <div v-for="market in marketchannel" :key="market.index" @click = "selsectmarketchannel(market)">{{market.name}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currmarket: {'name': '公共超市', 'value': 1},
      marketchannel: [{'name': '公共超市', 'value': 1}, {'name': '专属超市', 'value': 2}],
      marketshow: false
    }
  },
  methods: {
    selsectmarketfn () {
      this.marketshow = !this.marketshow
    },
    selsectmarketchannel (val) {
      this.currmarket = val
      this.marketshow = false
    },
    roudtefn () {
      this.$router.push('search')
    }
  }
}
</script>
<style lang="less" scoped>
  .homeheader{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.7rem;
    padding: 10px;
    z-index: 10;
    font-size: .6rem;
    color: #fff;
    .thinkChange {
      width: 1.5rem;
      img {
        width: 100%;
      }
    }
    .searchbox {
      position: relative;
      height: 1.6rem;
      margin-left: .75rem;
      background-color: hsla(0,0%,100%,.3);
      border-radius: 5px;
      line-height: 1.6rem; 
      padding: 0 10px;
      width: 55%;
    }
    .markettype{
      position: absolute;
      width: 4.4rem;
      right: .5rem;
      line-height: 1.6rem;
      text-align: center;
    }
    .markeselect{
      position: absolute;
      width: 4.25rem;
      right: .75rem;
      top: 2rem;
      line-height: 1.6rem;
      text-align: center;
      z-index: 10;
      background: #ffffff;
      border-radius: 5px;
      color: #333;
      line-height: 1.4rem;
      box-shadow: 0, 0, 5px, #666;
    }

  }
</style>

