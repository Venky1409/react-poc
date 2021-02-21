import types from './types';

const initialState = {
    data: undefined,
    error: null
}

function profileReducer (state = initialState, action) {
 switch(action.type) {
     case types.FETCH_PROFILE: 
        return {...state, data: {"name": 'Venky', "id": '', "login": '', "public_repos": ''}}
    case types.UPDATE_PROFILE: 
        return {...state, data: action.payload.data}
    case types.FETCH_PROFILE_SUCCESS: 
        return {...state, data: action.payload}
    case types.FETCH_PROFILE_ERROR: 
        return {...state, error: "Error"}
     default: 
        return state
 }
}

export default profileReducer;