import { createAction, handleActions } from "redux-actions";

// 예시
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'

export const login = createAction(LOGIN, ({ email, password, header }) => ({
    email,
    password,
    header
}));

const initialState = {
    login: {
        email: '',
        password: '',
        header: ''
    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        // 액션 타입에 따라 state 변경

        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth: auth
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        })
    },
    initialState
);

export default auth;