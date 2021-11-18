
export default {
        addNum(state, num) {
            if(state.itemNum < state.itemDetail.length) {
                state.itemNum += num
            }

        },
        addScore(state, ss) {
           state.answerid.push(ss);
        //    console.log(state.answerid);
           return state.answerid
        }
    }
    
