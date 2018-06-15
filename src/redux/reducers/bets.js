import {COUNTERALLBETS,GET_GOBETS_REQUEST,GET_GOBETS_SUCCESS,GET_GOBETS_FAIL} from 'actions/bets';

const initState = {
	da:0,xiao:0,dan:0,shuang:0,hong:0,lv:0,lan:0,gou:0,zhu:0,shu:0,niu:0,hu:0,tu:0,dragon:0,she:0,ma:0,yang:0,hou:0,ji:0,
	isLoading:false,gobetsrst:{},errorMsg:'',
	no1:0,no2:0,no3:0,no4:0,no5:0,no6:0,no7:0,no8:0,no9:0,no10:0,no11:0,no12:0,no13:0,no14:0,no15:0,no16:0,no17:0,no18:0,
	no19:0,no20:0,no21:0,no22:0,no23:0,no24:0,no25:0,no26:0,no27:0,no28:0,no29:0,no30:0,no31:0,no32:0,no33:0,no34:0,no35:0,
	no36:0,no37:0,no38:0,no39:0,no40:0,no41:0,no42:0,no43:0,no44:0,no45:0,no46:0,no47:0,no48:0}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case COUNTERALLBETS:
        	switch (action.whichone) {
        		case 'gou':
	            return {...state,gou: state.gou + Number(action.betnum)};
        		case 'zhu':
	            return {...state,zhu: state.zhu + Number(action.betnum)};
        		case 'shu':
	            return {...state,shu: state.shu + Number(action.betnum)};
        		case 'niu':
	            return {...state,niu: state.niu + Number(action.betnum)};
        		case 'hu':
	            return {...state,hu: state.hu + Number(action.betnum)};
        		case 'tu':
	            return {...state,tu: state.tu + Number(action.betnum)};
        		case 'dragon':
	            return {...state,dragon: state.dragon + Number(action.betnum)};
        		case 'she':
	            return {...state,she: state.she + Number(action.betnum)};
        		case 'ma':
	            return {...state,ma: state.ma + Number(action.betnum)};
        		case 'yang':
	            return {...state,yang: state.yang + Number(action.betnum)};
        		case 'hou':
	            return {...state,hou: state.hou + Number(action.betnum)};
        		case 'ji':
	            return {...state,ji: state.ji + Number(action.betnum)};
        		case 'da':
	            return {...state,da: state.da + Number(action.betnum)};
        		case 'xiao':
	            return {...state,xiao: state.xiao + Number(action.betnum)};
        		case 'dan':
	            return {...state,dan: state.dan + Number(action.betnum)};
        		case 'shuang':
	            return {...state,shuang: state.shuang + Number(action.betnum)};
        		case 'hong':
	            return {...state,hong: state.hong + Number(action.betnum)};
        		case 'lv':
	            return {...state,lv: state.lv + Number(action.betnum)};
        		case 'lan':
	            return {...state,lan: state.lan + Number(action.betnum)};
        		case 'no1':
	            return {...state,no1: state.no1 + Number(action.betnum)};
        		case 'no2':
        		return {...state,no2: state.no2  + Number(action.betnum)};
        		case 'no3':
        		return {...state,no3:state.no3  + Number(action.betnum)};
        		case 'no4':
        		return {...state,no4:state.no4 + Number(action.betnum)};
        		case 'no5':
        		return {...state,no5:state.no5 + Number(action.betnum)};
        		case 'no6':
        		return {...state,no6:state.no6 + Number(action.betnum)};
        		case 'no7':
        		return {...state,no7:state.no7 + Number(action.betnum)};
        		case 'no8':
        		return {...state,no8:state.no8 + Number(action.betnum)};
        		case 'no9':
        		return {...state,no9:state.no9 + Number(action.betnum)};
        		case 'no10':
        		return {...state,no10:state.no10 + Number(action.betnum)};
        		case 'no11':
        		return {...state,no11:state.no11 + Number(action.betnum)};
        		case 'no12':
        		return {...state,no12:state.no12 + Number(action.betnum)};
        		case 'no13':
        		return {...state,no13:state.no13 + Number(action.betnum)};
        		case 'no14':
        		return {...state,no14:state.no14 + Number(action.betnum)};
        		case 'no15':
        		return {...state,no15:state.no15 + Number(action.betnum)};
        		case 'no16':
        		return {...state,no16:state.no16 + Number(action.betnum)};
        		case 'no17':
        		return {...state,no17:state.no17 + Number(action.betnum)};
        		case 'no18':
        		return {...state,no18:state.no18 + Number(action.betnum)};
        		case 'no19':
        		return {...state,no19:state.no19 + Number(action.betnum)};
        		case 'no20':
        		return {...state,no20:state.no20 + Number(action.betnum)};
        		case 'no21':
        		return {...state,no21:state.no21 + Number(action.betnum)};
        		case 'no22':
        		return {...state,no22:state.no22 + Number(action.betnum)};
        		case 'no23':
        		return {...state,no23:state.no23 + Number(action.betnum)};
        		case 'no24':
        		return {...state,no24:state.no24 + Number(action.betnum)};
        		case 'no25':
        		return {...state,no25:state.no25 + Number(action.betnum)};
        		case 'no26':
        		return {...state,no26:state.no26 + Number(action.betnum)};
        		case 'no27':
        		return {...state,no27:state.no27 + Number(action.betnum)};
        		case 'no28':
        		return {...state,no28:state.no28 + Number(action.betnum)};
        		case 'no29':
        		return {...state,no29:state.no29 + Number(action.betnum)};
        		case 'no30':
        		return {...state,no30:state.no30 + Number(action.betnum)};
        		case 'no31':
        		return {...state,no31:state.no31 + Number(action.betnum)};
        		case 'no32':
        		return {...state,no32:state.no32 + Number(action.betnum)};
        		case 'no33':
        		return {...state,no33:state.no33 + Number(action.betnum)};
        		case 'no34':
        		return {...state,no34:state.no34 + Number(action.betnum)};
        		case 'no35':
        		return {...state,no35:state.no35 + Number(action.betnum)};
        		case 'no36':
        		return {...state,no36:state.no36 + Number(action.betnum)};
        		case 'no37':
        		return {...state,no37:state.no37 + Number(action.betnum)};
        		case 'no38':
        		return {...state,no38:state.no38 + Number(action.betnum)};
        		case 'no39':
        		return {...state,no39:state.no39 + Number(action.betnum)};
        		case 'no40':
        		return {...state,no40:state.no40 + Number(action.betnum)};
        		case 'no41':
        		return {...state,no41:state.no41 + Number(action.betnum)};
        		case 'no42':
        		return {...state,no42:state.no42 + Number(action.betnum)};
        		case 'no43':
        		return {...state,no43:state.no43 + Number(action.betnum)};
        		case 'no44':
        		return {...state,no44:state.no44 + Number(action.betnum)};
        		case 'no45':
        		return {...state,no45:state.no45 + Number(action.betnum)};
        		case 'no46':
        		return {...state,no46:state.no46 + Number(action.betnum)};
        		case 'no47':
        		return {...state,no47:state.no47 + Number(action.betnum)};
        		case 'no48':
        		return {...state,no48:state.no48 + Number(action.betnum)};
        	}
        case GET_GOBETS_REQUEST:
        	return {...state,
        		isLoading: true,
        		gobetsrst:{},
        		errorMsg:''
        	};
        case GET_GOBETS_SUCCESS:
        	return {...state,
        		isLoading:false,
        		gobetsrst:action.result.data,
        		errorMsg:''
        	};
        case GET_GOBETS_FAIL:
        	return {...state,
        		isLoading:false,
        		gobetsrst:{},
        		errorMsg:'请求错误'
        	}
        default:
            return state
    }
}
