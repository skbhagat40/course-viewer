import { ACTION_TYPES } from '../actions/action-types'
import { combineReducers } from 'redux'
// import combineReducers 

function courses(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_COURSE:
            return [...state, action.payload.title]
        default:
            return state
    }
}
const rootReducer = combineReducers({ courses })
export default rootReducer