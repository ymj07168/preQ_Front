import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType(
    'auth/LOGIN',
);


export const login = createAction(LOGIN, ({ type, accessToken }) => ({
    type,
    accessToken,
}))

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga)
}

const initialState = {
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        // 로그인
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState
);

export default auth;