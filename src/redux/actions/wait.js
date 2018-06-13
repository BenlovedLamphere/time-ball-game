export const GET_INFO_REQUEST = "wait/GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "wait/GET_INFO_SUCCESS";
export const GET_INFO_FAIL = "wait/GET_INFO_FAIL";

export function getinfo(url,gmsidfn) {
    return {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(url),
        afterSuccess:gmsidfn
    }
}


