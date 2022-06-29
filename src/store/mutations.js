
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
        },
        addAims(state, newAim) {
            if(newAim !== "") {
                state.todolists.push(newAim);
            }

            return state.todolists
        }
    }
    
