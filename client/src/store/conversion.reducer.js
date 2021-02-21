import types from './types';

const initialState = {
    data: {
        selectFromOutputValue: undefined,
        selectFromText: '',
        selectToText: ''
    },
    error: null
}

function conversionReducer (state = initialState, action) {
 switch(action.type) {
    case types.FETCH_INITIAL_RATES:
        return state
    case types.FETCH_SUCCESS_CONVERSION: 
        return {...state, data: action.payload}
     default: 
        return state
 }
}

export default conversionReducer;