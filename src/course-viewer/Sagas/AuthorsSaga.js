import { ACTION_TYPES } from "../actions/action-types";
import { put, take } from 'redux-saga/effects'
import { getAuthors } from '../../api/authorApi';
import { addAuthors } from "../actions";

export function* fetchAuthorsSaga() {
    yield take(ACTION_TYPES.REQUEST_AUTHORS);
    const authors = yield getAuthors()
    yield put(addAuthors(authors));
}