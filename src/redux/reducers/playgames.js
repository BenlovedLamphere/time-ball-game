import {GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL} from 'actions/playgames';


const initState = {
    isLoading: false,
    callback: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                callback: {},
                errorMsg: ''
            };
        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                callback: action.result.data,
                errorMsg: ''
            };
        case GET_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                callback: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}