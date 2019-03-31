import ajax from '../config/ajax'

export default {
    addNum({ commit, state }, id){
        //click to next question, record the answer id to determine whether it is the last question, if not, jump to the next question
        commit ('REMBER_ANSWER', id);
        if (state.itemNum < state.itemDetail.length) {
            commit ('ADD_ITEMNUM', 1);
        }
    },
    //initialization
    initializeData ({ commit }){
        commit ('INITIALIZE_DATA');
    }
}