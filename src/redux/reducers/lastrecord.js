import {GET_RECORD_REQUEST, GET_RECORD_SUCCESS, GET_RECORD_FAIL} from 'actions/lastrecord';


const initState = {
    isLoading: false,
    recordback: {},
    errorMsg: ''

};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_RECORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                recordback: {},
                errorMsg: ''
            };
        case GET_RECORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recordback: action.result.data,
                errorMsg: ''
            };
        case GET_RECORD_FAIL:
            return {
                ...state,
                isLoading: false,
                recordback: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}