import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  level: '第一周',
  itemNum: 1,//当前第几题
  timer: null,//记录做题的定时器
  allTime: 0,//答题共用时间
  answerId: [], //答案id
  itemDetail: [{//题目列表
    "topic_id": 20,
    "active_topic_id": 4,
    "type": "ONE",
    "topic_name": "题目一",
    "topic_question": "中国的第一部字典是（）",
    "active_id": 1,
    "active_title": "文学小常识",
    "active_topic_phase": "第一套题",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 1,
      "topic_id": 20,
      "answer_name": "说文解字",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 2,
      "topic_id": 20,
      "answer_name": "辞海",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 3,
      "topic_id": 20,
      "answer_name": "康熙字典",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 4,
      "topic_id": 20,
      "answer_name": "新华字典",
      "is_standard_answer": 1
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目二",
    "topic_question": "岁寒三友不包括（）",
    "active_id": 1,
    "active_title": "文学小常识",
    "active_topic_phase": "第一套题",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 5,
      "topic_id": 21,
      "answer_name": "竹",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 6,
      "topic_id": 21,
      "answer_name": "兰",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 7,
      "topic_id": 21,
      "answer_name": "梅",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 8,
      "topic_id": 21,
      "answer_name": "松",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目三",
    "topic_question": "才高八斗形容的是（）",
    "active_id": 1,
    "active_title": "文学小常识",
    "active_topic_phase": "第一套题",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 9,
      "topic_id": 21,
      "answer_name": "曹子桓",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 10,
      "topic_id": 21,
      "answer_name": "嵇康",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 11,
      "topic_id": 21,
      "answer_name": "谢安",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 12,
      "topic_id": 21,
      "answer_name": "曹子建",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目四",
    "topic_question": "中国文学理论批判史上第一位文学批判家是（）",
    "active_id": 1,
    "active_title": "文学小常识",
    "active_topic_phase": "第一套题",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 13,
      "topic_id": 21,
      "answer_name": "曹子建",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 14,
      "topic_id": 21,
      "answer_name": "曹子桓",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 15,
      "topic_id": 21,
      "answer_name": "嵇康",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 16,
      "topic_id": 21,
      "answer_name": "谢安",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目五",
    "topic_question": "中国现存最早的七言诗是（）",
    "active_id": 1,
    "active_title": "文学小常识",
    "active_topic_phase": "第一套题",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 17,
      "topic_id": 21,
      "answer_name": "《赠别》",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 18,
      "topic_id": 21,
      "answer_name": "《绝句》",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 19,
      "topic_id": 21,
      "answer_name": "《燕歌行》",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 20,
      "topic_id": 21,
      "answer_name": "《征人怨》",
      "is_standard_answer": 0
    }]
  }]
};

export default new Vuex.Store({
  state,
  mutations: {
    // 点击下一题
    addItemNum(state) {
      state.itemNum++;
    },

    // 记录做题选中的所有答案
    remberItemNum(state, id) {
      state.answerId.push(id);
    },

    // 记录做题时间
    remberAllTimer(state) {
      state.timer = setInterval(() => {
        state.allTime++;
        console.log(state.allTime);
      }, 1000);
    },

    // 初始化
    init(state) {
      clearInterval(state.timer);
      state.itemNum = 1;
    },

    // 初始化
    initAnswer(state) {
      state.answerId = [];
    }

  }
});

