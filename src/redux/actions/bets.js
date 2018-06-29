export const COUNTERALLBETS = "bets/COUNTERALLBETS";
export const GET_GOBETS_REQUEST = "bets/GET_GOBETS_REQUEST";
export const GET_GOBETS_SUCCESS = "bets/GET_GOBETS_SUCCESS";
export const GET_GOBETS_FAIL = "bets/GET_GOBETS_FAIL";

export function countAllbets (which,betnumber) {
    return {type: COUNTERALLBETS,whichone:which,betnum:betnumber}
}

export function goplaythebets(id,data,ukey,fn,url) {
    return {
        types: [GET_GOBETS_REQUEST, GET_GOBETS_SUCCESS, GET_GOBETS_FAIL],
        promise: client => client.get(url + id +
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
                                      '&no1=' + data.no1 + 
                                      '&no2=' + data.no2 +
                                      '&no3=' + data.no3 +
                                      '&no4=' + data.no4 +
                                      '&no5=' + data.no5 +
                                      '&no6=' + data.no6 +
                                      '&no7=' + data.no7 +
                                      '&no8=' + data.no8 +
                                      '&no9=' + data.no9 +
                                      '&no10=' + data.no10 +
                                      '&no11=' + data.no11 +
                                      '&no12=' + data.no12 +
                                      '&no13=' + data.no13 +
                                      '&no14=' + data.no14 +
                                      '&no15=' + data.no15 +
                                      '&no16=' + data.no16 +
                                      '&no17=' + data.no17 +
                                      '&no18=' + data.no18 +
                                      '&no19=' + data.no19 +
                                      '&no20=' + data.no20 +
                                      '&no21=' + data.no21 +
                                      '&no22=' + data.no22 +
                                      '&no23=' + data.no23 +
                                      '&no24=' + data.no24 +
                                      '&no25=' + data.no25 +
                                      '&no26=' + data.no26 +
                                      '&no27=' + data.no27 +
                                      '&no28=' + data.no28 +
                                      '&no29=' + data.no29 +
                                      '&no30=' + data.no30 +
                                      '&no31=' + data.no31 +
                                      '&no32=' + data.no32 +
                                      '&no33=' + data.no33 +
                                      '&no34=' + data.no34 +
                                      '&no35=' + data.no35 +
                                      '&no36=' + data.no36 +
                                      '&no37=' + data.no37 +
                                      '&no38=' + data.no38 +
                                      '&no39=' + data.no39 +
                                      '&no40=' + data.no40 +
                                      '&no41=' + data.no41 +
                                      '&no42=' + data.no42 +
                                      '&no43=' + data.no43 +
                                      '&no44=' + data.no44 +
                                      '&no45=' + data.no45 +
                                      '&no46=' + data.no46 +
                                      '&no47=' + data.no47 +
                                      '&no48=' + data.no48 +
        							  '&ukey=' + ukey),
        afterSuccess:fn

    }
}