export const GET_RST_REQUEST = "awardresults/GET_RST_REQUEST";
export const GET_RST_SUCCESS = "awardresults/GET_RST_SUCCESS";
export const GET_RST_FAIL = "awardresults/GET_RST_FAIL";

export function getRst(url,rstfn) {
    return {
        types: [GET_RST_REQUEST, GET_RST_SUCCESS, GET_RST_FAIL],
        promise: client => client.get(url),
        afterSuccess:rstfn
    }
}