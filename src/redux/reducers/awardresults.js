import {GET_RST_REQUEST, GET_RST_SUCCESS, GET_RST_FAIL} from 'actions/awardresults';


const initState = {
    isLoading: false,
    aresult: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_RST_REQUEST:
            return {
                ...state,
                isLoading: true,
                aresult: {},
                errorMsg: ''
            };
        case GET_RST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                aresult: action.result.data,
                errorMsg: ''
            };
        case GET_RST_FAIL:
            return {
                ...state,
                isLoading: false,
                aresult: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}