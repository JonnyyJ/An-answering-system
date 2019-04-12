<template>
    <div>
        <div class = "your_scores_container">
             <header class = "your_scores">
                 <span class = "score_num">{{score}}</span><span class = "fenshu">!</span>
             </header>
             <div class = "result_tip">{{scoreTips}}</div>
        </div>
        <div class = "share_button" @click="showCover"></div>
        <div class = "share_code">
            <header class = "share_header"> get answers</header>
            <img src=" ../ ../images/" height="212" width="212" class="code_img">
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../ ../images/" class = "share_img">
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'score',
     data(){
         return {
             showHide: false, //whether show the hint
             score: 0, //score
             scoreTips: '', //score hint
             rightAnswer: [2, 7, 12, 13, 18], //right answer
             scoreTipsArr: ['1', '2', '3', '4', '5'],
         }
     },
     computed: mapState(['answerid']),
     created(){
         this.computedScore();
         this.getScoreTip();
         document.body.style.backgroundImage = 'url(./static/img/)';
     },
     methods: {
         //calculate the score
         computedScore() {
             this.answerid.forEach((item, index) => {
                 if (item == this.rightAnswer[index]){
                     this.score += 15;
                 }
             })
         },
         //whether show the sharing hint
         showCover: function (){
             this.showHide = !this.showHide;
         },
         //show the hint depending on score
         getScoreTip: function (){
             let index = Math.ceil(this.score/15) - 1;
             this.scoreTips = this.scoreTipsArr[index];
         }
     },
}
</script>

<style lang = "less">
  body{
      background-image: url(../../images/);
      padding-top: 1.2rem;
  }
  .your_scores_container{
      width: 9.7rem;
      height: 9.1rem;
      background: url(../../images/) no-repeat;
      background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 4.7rem;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #926454;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d56;
            }
            .fenshu{
                color: #a51d56;
            }
        }
        .result_tip{
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: #643920;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background: url(../../images/) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header{
            color: #643920;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            width: 7rem;
            font-weight: 500;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
  }
</style>
