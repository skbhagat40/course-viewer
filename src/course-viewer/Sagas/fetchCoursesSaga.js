import { take, put } from 'redux-saga/effects'
import { ACTION_TYPES } from '../actions/action-types'
import { getCourses, saveCourse, deleteCourse } from '../../api/courseApi'
import { addCourses, addCourse, courseLoading, courseLoaded } from '../actions'


export function* fetchCoursesSaga() {
    yield take(ACTION_TYPES.REQUEST_COURSES);
    const courses = yield getCourses()
    yield put(addCourses(courses))
}

export function* addCourseSaga() {
    const { course } = yield take(ACTION_TYPES.REQUEST_ADD_COURSE)
    yield put(courseLoading());
    const savedCourse = yield saveCourse(course);
    yield put(addCourse(savedCourse));
    yield put(courseLoaded());
}

export function* deleteCourseSaga() {
    const { id } = yield take(ACTION_TYPES.REQUEST_DELETE_COURSE);
    yield put(deleteCourse(id));

}