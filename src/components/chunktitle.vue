<template>
  <div class="b-bottom-1">
   <div class=" classify-title text-center">
        <hr class="center-hr">
        <span class="title">{{title}}</span>
       </div> 
    </div>
</template>
<script>
    export default {
        props: ['title'],
        data () {
            return {  
            }
        }
    }
</script>
<style lang="less" scoped>
    .b-bottom-1{
        padding-bottom: 1px;
    }
  .classify-title {
    font-size: .65rem;
    padding: .5rem 0;
    color: orchid;
    background: #F5F5F5;
    position: relative;
    .title {
        position: relative;
        background-color: #f5f5f5;
        z-index: 10;
        padding: 0 .5rem;
    }
    .center-hr {
        display: inline-block;
        width: 60%;
        border: 0;
        border-top: .025rem solid #ddd;
        position: absolute;
        left: 50%;
        margin-left: -30%;
        top: 20px
    }
  }
</style>
