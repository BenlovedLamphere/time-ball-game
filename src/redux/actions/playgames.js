export const GET_LOGIN_REQUEST = "playgames/GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "playgames/GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAIL = "playgames/GET_LOGIN_FAIL";

export function getlogin(url) {
    return {
        types: [GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL],
        promise: client => client.get(url)
    }
}

// 