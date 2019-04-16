<template>
  <section>
    <header class ="top_tips">
      <span class = "num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class = "num_tip" v-if="fatherComponent == 'item'">question{{itemNum}}</span>
    </header>
    <div v-if = "fatherComponent = 'home'">
      <div class = "home_logo item_container_style"></div>
      <router-link to = "item" class = "start buttonz-style"></router-link>
    </div>
    <div v-if ="fatherComponent == 'item'">
      <div class ="item_back item_container_style">
        <div class = "item_list_container" v-if="itemDetail.length > 0">
        <header class = 'item_title'>{{itemDetail[itemNum - 1].topic_name}}</header>
        <ul>
         <li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    		 </li>
        </ul>
      </div>
    </div>
    <span class ="next_item button_style" @click ="next_item" v-if = "itemNum < itemDetail.length"></span>
    <span class ="submit_item button_style" v-else @click="submitAnswwer"></span>
  </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'itemcontainer',
  data(){
    return {
       itemId: null,//question ID
       choosedNum: null, //the index of choosed answer
       choosedId: null //id of choosed answer
    }
  },
  props :['fatherComponent'],
  computed: mapState([
    'itemNum',// number of question
    'level', //number of week
    'itemDetail', //question
    'timer', //timer
  ]),
  methods :{
    ...mapActions([
      'addNum', 'initializeDta',
    ]),
    //click next question
    nextItem(){
      if(this.choosedNum !== null){
          this.choosedNum = null;
          //save the answer, add index of question, go to the next question
          this.addNum(this.choosedId)
      }else{
        alert('not selected answer')
      }
    },
    //the index from 0 to 3 represent for the answer from A to B
    chooseType: type =>{
      switch(type){
        case 0 :return 'A';
        case 1 :return 'B';
        case 2 :return 'C';
        case 3 :return 'D';
      }
    },
    //the chosen information of answer
     choosed(type,id){
        this.choosedNum = type;
        this.choosedId = id;
     },
     //approach to the last question, submit, clean the timer, jump score page
     submitAnswer(){
       if (this.choosedNum !== null){
         this.addNum(this.choosedId)
         clearInterval(this.timer)
         this.$router.push('score')
       }else{
         alert('not selected answer')
       }
     },
  },
  created(){
    //initiation
    if(this.fatherComponent == 'home'){
      this.initializeData();
      document.body.style.backgroundImage = 'url(./static/img/)'
    }
  }

}
</script>

<style lang="less">
	.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #eecfad;
			text-align: center;
		}
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}	
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../images/);
    }
    .next_item{
    	background-image: url(../images/);
    }
    .submit_item{
    	background-image: url(../images/);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: #00e;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #00e;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>

