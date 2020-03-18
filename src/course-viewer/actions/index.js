import { ACTION_TYPES } from './action-types'
import { getCourses, saveCourse, deleteCourse } from '../../api/courseApi'
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

export function fetchCourses() {
    return (dispatch) => {
        getCourses().then((courses) => {
            dispatch(addCourses(courses));
        });
    }
}
export function addCourseApi(course) {
    return (dispatch) => {
        dispatch(courseLoading());
        saveCourse(course).then(course => {
            dispatch(addCourse(course));
            dispatch(courseLoaded());
        });
    }
}
export const removeCourse = (courseId) => ({
    type: ACTION_TYPES.DELETE_COURSE,
    payload: { id: courseId }
})
export function deleteCourseApi(courseId) {
    return (dispatch) => {
        deleteCourse(courseId).then(() => dispatch(removeCourse(courseId)));
    }
}
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