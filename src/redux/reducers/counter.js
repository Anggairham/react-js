import CounterType from "../types/counter";

const initialState = {
    value: 0,
};

function reducer(state =initialState,action){
    switch (action.type) {
        case CounterType.INCREMENT:
            return {
                ...state,
                value:state.value + 1
            };
        case CounterType.DECREMENT:
            let value = 0
            if(state.value > 0) {
                value = state.value - 1;
            }
            return {
                ...state,
                value:value
            };
        default:
            return state;
    }
}

export default reducer;