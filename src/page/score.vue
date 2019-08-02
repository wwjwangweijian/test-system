<template>
<div>
    <div class="score-box">
        <div class="score-tips">
            <p class="score"><span v-html="score"></span>分</p>
            <p v-html="scoreTipsArr[showText(score)]"></p>
        </div>
        <p>总用时： <span v-html="allTime"></span>秒</p>
    </div>
</div>
</template>

<script>
import '../common.css'
import '../common.js'
import { mapState } from 'vuex'

export default {
    name: 'item',
    data : function() {
        return {
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还要加油哦！','很不错了，但还能更好哦！','你离满分只差一点点！','你也太聪明啦，有没有兴趣和我学做菜啊！'],
            score : 0,
            scoreTip : ''
        };
    },
    computed: mapState([
        'answerId', //答案列表
        'allTime'//总用时
    ]),
    mounted() {
        let vue = this;
        this.answerId.forEach( ( item, index, arr ) => {
            if ( item == vue.rightAnswer[index] ) {
                vue.score += 20;
            }
        });
        document.body.style.backgroundImage = 'url(http://cangdu.org/happyfri/static/img/4-1.jpg)';
    },
    methods : {
        showText(score) {
            switch(score){
                case 100: return 4;
                case 80: return 3;
                case 60: return 2;
                case 40: return 1;
                case 20: return 0;
                case 0: return 0;
            }
        }
    }
}
</script>

<style scoped>
.score-box {
    position: relative;
    width: 80%;
    height: 20rem;
    margin: 0 auto;
    background : url(http://cangdu.org/happyfri/static/img/4-2.png) no-repeat center / cover;
    text-align: center;
}
.score {
    margin-bottom: .5rem;
    padding-top: 11rem;
    font-size: 4rem;
    color: red;
    -webkit-text-stroke: 3px #ff7500;
    -webkit-text-fill-color : transparent;
}
</style>
