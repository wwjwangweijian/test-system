<template>
<div class="home-box note" :style ="note">
    <img src="../images/3.png" class="home-img" />
    <router-link to="item" class="com-next-btn bts">开始测试</router-link>
</div>
</template>

<script>
import '../common.css'
import '../common.js'

export default {
  name: 'home',
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../images/2.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        marginTop: "5px",
      },
    }
  },
  mounted() {
       // document.body.style.background = 'url(http://cangdu.org/happyfri/static/img/1-1.jpg)  no-repeat center / cover';
    },
}
</script>

<style scoped>
body {
    padding-top: 7rem;
}
.home-img {
    display: block;
    margin: 0 auto 2rem;
    width: 20rem;
    padding-top: 8rem;
}
.home-box{
  position: relative;
 max-width : 640px;
    margin: 0 auto;
    height : 100%;
}

  .bts {
    position: absolute;
    left: 35%;
    bottom: 33%;
  }







</style>
