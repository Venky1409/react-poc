import types from './types';

const initialState = {
    data: [],
    error: null
}

function ratesReducer (state = initialState, action) {
 switch(action.type) {
    case types.FETCH_SUCCESS_RATES: 
        return {...state, data: action.payload}
     default: 
        return state
 }
}

export default ratesReducer;