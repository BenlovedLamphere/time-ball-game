export const COUNTERALLBETS = "bets/COUNTERALLBETS";
export const GET_GOBETS_REQUEST = "bets/GET_GOBETS_REQUEST";
export const GET_GOBETS_SUCCESS = "bets/GET_GOBETS_SUCCESS";
export const GET_GOBETS_FAIL = "bets/GET_GOBETS_FAIL";

export function countAllbets (which,betnumber) {
    return {type: COUNTERALLBETS,whichone:which,betnum:betnumber}
}



export function goplaythebets(id,data,ukey,fn) {
    return {
        types: [GET_GOBETS_REQUEST, GET_GOBETS_SUCCESS, GET_GOBETS_FAIL],
        promise: client => client.get('http://m.ilikezu.cn:8080/ssc/game/play.xhtml?gameId=' + id +
        							  '&da=' + data.da + 
        							  '&xiao=' + data.xiao +
        							  '&dan=' + data.dan +
        							  '&shuang=' + data.shuang +
        							  '&hong=' + data.hong +
        							  '&lv=' + data.lv +
        							  '&lan=' + data.lan +
        							  '&shu=' + data.shu + 
        							  '&niu=' + data.niu +
        							  '&hu=' + data.hu +
        							  '&tu=' + data.tu +
        							  '&dragon=' + data.dragon +
        							  '&she=' + data.she +
        							  '&ma=' + data.ma +
        							  '&yang=' + data.yang +
        							  '&hou=' + data.hou +
        							  '&ji=' + data.ji +
        							  '&gou=' + data.gou +
        							  '&zhu=' + data.zhu +
        							  '&ukey=' + ukey),
        afterSuccess:fn

    }
}

