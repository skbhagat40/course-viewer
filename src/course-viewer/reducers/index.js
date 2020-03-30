import { ACTION_TYPES } from '../actions/action-types'
import { combineReducers } from 'redux'
// import combineReducers 

function courses(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_COURSE:
            return [...state.map(course => course.id === action.payload.course.id ? action.payload.course : course)]
        case ACTION_TYPES.FETCH_COURSES:
            return [...action.payload.courses]
        case ACTION_TYPES.DELETE_COURSE:
            return [...state.filter((course) => (course.id !== action.payload.id))]
        default:
            return state
    }
}

function authors(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_AUTHOR:
            return [...state, action.payload.author]
        case ACTION_TYPES.FETCH_AUTHORS:
            return [...action.payload.authors]
        default:
            return state
    }
}

function addCourseLoading(state = false, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_COURSE_LOADING:
            return true
        case ACTION_TYPES.ADD_COURSE_COMPLETED:
            return false
        default:
            return false
    }
}
const rootReducer = combineReducers({ courses, authors, addCourseLoading })
export default rootReducer