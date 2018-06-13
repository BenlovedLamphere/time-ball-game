import {GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL} from 'actions/wait';


const initState = {
    isLoading: false,
    infoback: {},
    errorMsg: ''

};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                infoback: {},
                errorMsg: ''
            };
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                infoback: action.result.data,
                errorMsg: ''
            };
        case GET_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                infoback: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}