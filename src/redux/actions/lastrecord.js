export const GET_RECORD_REQUEST = "lastrecord/GET_RECORD_REQUEST";
export const GET_RECORD_SUCCESS = "lastrecord/GET_RECORD_SUCCESS";
export const GET_RECORD_FAIL = "lastrecord/GET_RECORD_FAIL";

export function getlastrecord(url) {
    return {
        types: [GET_RECORD_REQUEST, GET_RECORD_SUCCESS, GET_RECORD_FAIL],
        promise: client => client.get(url)
    }
}
