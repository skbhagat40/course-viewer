import * as sagas from './course-viewer/Sagas/index'

export const initSagas = (sagaMiddleware) => {
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}