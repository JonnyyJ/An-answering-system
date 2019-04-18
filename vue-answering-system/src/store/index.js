import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'

Vue.use(Vuex)

const state = {
    level: 'the first week', //the number of week
    itemNum: 1, //the index of question
    allTime: 0, //total time consuming
    timer: '', //timer
    itemDetail: [{
        "topic_id" : 20,
        "active_topic_id" : 4,
        "type" : "ONE",
        "topic_name":"question 1",
        "active_id" : 1,
        "active_title": "happy friday title",
		"active_topic_phase": "first week",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "测试A",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "BBBBBB",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "CCCCCC",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "正确答案",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目四",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": "正确答案",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "A是错的",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "D是对的",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "C说的不对",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目五",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "错误答案",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "正确答案",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "错误答案",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "错误答案",
			"is_standard_answer": 0
		}]
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})