import { ACTION_TYPES } from './action-types'
import { getAuthors } from '../../api/authorApi';

export const addCourse = (course) => ({
    type: ACTION_TYPES.ADD_COURSE,
    payload: { course }
})

export const addCourses = (courses) => ({
    type: ACTION_TYPES.FETCH_COURSES,
    payload: { courses }
})
export const courseLoading = () => ({ type: ACTION_TYPES.ADD_COURSE_LOADING });
export const courseLoaded = () => ({ type: ACTION_TYPES.ADD_COURSE_COMPLETED });
export const requestCourses = () => ({ type: ACTION_TYPES.REQUEST_COURSES });
export const requestAuthors = () => ({ type: ACTION_TYPES.REQUEST_AUTHORS });
export const requestAddCourse = (course) => ({ type: ACTION_TYPES.REQUEST_ADD_COURSE, course });
export const requestDeleteCourse = (id) => ({ type: ACTION_TYPES.REQUEST_DELETE_COURSE, id });
export const removeCourse = (courseId) => ({
    type: ACTION_TYPES.DELETE_COURSE,
    payload: { id: courseId }
})
export const addAuthor = (author) => ({
    type: ACTION_TYPES.ADD_AUTHOR,
    payload: { author }
})
export const addAuthors = (authors) => ({
    type: ACTION_TYPES.FETCH_AUTHORS,
    payload: { authors }
})

export function fetchAuthors() {
    return (dispatch) => {
        getAuthors().then((authors) => dispatch(addAuthors(authors)));
    }
}