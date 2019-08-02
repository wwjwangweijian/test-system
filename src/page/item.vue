<template>
<div class="note" :style ="note">
    <div class="item-header">
        <span class="item-index">题目{{itemNum}}</span>
    </div>
    <div class="item-main">
        <p class="item-main-header">题目<span v-html="itemNum"></span></p>
        <p class="item-main-header"><span v-html="itemDetail[itemNum-1].topic_question"></span></p>
        <div class="select-list">
            <a href="javascript:;" class="select-item" v-for="(data, index) in  itemDetail[itemNum-1].topic_answer" :data-itemId="data.topic_answer_id" @click="chooseItem(data.topic_answer_id)" :class="{active : chooseItemId === data.topic_answer_id}">
                <span class="index" v-html="chooseType(index)"></span>
                <span v-html="data.answer_name"></span>
            </a>
        </div>
    </div>
    <a href="javascript:;" class="com-next-btn" @click="next">下一题</a>
</div>
</template>

<script>import '../common.css'
import '../common.js'
import { mapState } from 'vuex'

export default {
    name: 'item',
    data : function() {
        return {
            chooseItemId : null,
          note: {
            backgroundImage: "url(" + require("../images/2.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "5px",
          },
        };
    },
    computed: mapState([
        'itemNum', //第几题
        'itemDetail', //题目详情
        'timer', //计时器
    ]),
    mounted() {
        this.$store.commit('initAnswer');
        this.$store.commit('remberAllTimer');
        //document.body.style.background = 'url(http://cangdu.org/happyfri/static/img/1-1.jpg)  no-repeat center / cover';
    },

    methods : {
        chooseType: type => {
            switch(type){
                case 0: return 'A';
                case 1: return 'B';
                case 2: return 'C';
                case 3: return 'D';
            }
        },
        chooseItem(id) {
            this.chooseItemId = id;
        },
        next() {
            if ( !this.chooseItemId ) {
                alert('请选择答案');
                return;
            }
            this.$store.commit('remberItemNum', this.chooseItemId);
            if ( this.itemNum === this.itemDetail.length ) {
                this.$router.push('score');
                this.$store.commit('init');
            } else {
                this.chooseItemId = null;
                this.$store.commit('addItemNum', this.itemNum);
            }
        }
    }
}
</script>

<style scoped>
.item-header {
    position: relative;
    float: right;
    margin-right: 2rem;
    height: 10rem;
    width: 5rem;
    background: url(../images/1.png) no-repeat center / cover;
    z-index: 10;
}
.item-index {
    position: absolute;
    left: 1.5rem;
    bottom: 1.3rem;
    color: #000;
}
.item-main {
    width: 14rem;
    margin: 0 auto 6rem;
    padding-top: 13rem;
    color: #fff;
    font-size: 1.1rem;
}
.select-item {
    display: block;
    margin-top: 1rem;
    color: #fff;
    word-break: break-all;
}
.index {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align: center;
}
.active {
    color: #ff7500;
}
.active .index {
    border-color: #ff7500;
}


</style>
