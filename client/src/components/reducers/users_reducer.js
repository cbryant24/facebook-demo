import types from '../actions/types'

const DEFAULT_STATE = { auth: false}

export default function User_Reducer(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case types.GET_USER:
            return { auth: action.payload}
        default: 
            return state;
    }
}