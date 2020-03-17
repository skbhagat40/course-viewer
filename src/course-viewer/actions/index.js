import { ACTION_TYPES } from './action-types'
export const addCourse = (title) => ({
    type: ACTION_TYPES.ADD_COURSE,
    payload: { title }
})