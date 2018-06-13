import {COUNTERALLBETS,GET_GOBETS_REQUEST,GET_GOBETS_SUCCESS,GET_GOBETS_FAIL} from 'actions/bets';

const initState = {
	da:0,xiao:0,dan:0,shuang:0,hong:0,lv:0,lan:0,gou:0,zhu:0,shu:0,niu:0,hu:0,tu:0,
					dragon:0,she:0,ma:0,yang:0,hou:0,ji:0,isLoading:false,gobetsrst:{},errorMsg:''}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case COUNTERALLBETS:
        	switch (action.whichone) {
        		case 'gou':
	            return {...state,
	                gou: state.gou + Number(action.betnum)
	            };
        		case 'zhu':
	            return {...state,
	                zhu: state.zhu + Number(action.betnum)
	            };
        		case 'shu':
	            return {...state,
	                shu: state.shu + Number(action.betnum)
	            };
        		case 'niu':
	            return {...state,
	                niu: state.niu + Number(action.betnum)
	            };
        		case 'hu':
	            return {...state,
	                hu: state.hu + Number(action.betnum)
	            };
        		case 'tu':
	            return {...state,
	                tu: state.tu + Number(action.betnum)
	            };
        		case 'dragon':
	            return {...state,
	                dragon: state.dragon + Number(action.betnum)
	            };
        		case 'she':
	            return {...state,
	                she: state.she + Number(action.betnum)
	            };
        		case 'ma':
	            return {...state,
	                ma: state.ma + Number(action.betnum)
	            };
        		case 'yang':
	            return {...state,
	                yang: state.yang + Number(action.betnum)
	            };
        		case 'hou':
	            return {...state,
	                hou: state.hou + Number(action.betnum)
	            };
        		case 'ji':
	            return {...state,
	                ji: state.ji + Number(action.betnum)
	            };
        		case 'da':
	            return {...state,
	                da: state.da + Number(action.betnum)
	            };
        		case 'xiao':
	            return {...state,
	                xiao: state.xiao + Number(action.betnum)
	            };
        		case 'dan':
	            return {...state,
	                dan: state.dan + Number(action.betnum)
	            };
        		case 'shuang':
	            return {...state,
	                shuang: state.shuang + Number(action.betnum)
	            };
        		case 'hong':
	            return {...state,
	                hong: state.hong + Number(action.betnum)
	            };
        		case 'lv':
	            return {...state,
	                lv: state.lv + Number(action.betnum)
	            };
        		case 'lan':
	            return {...state,
	                lan: state.lan + Number(action.betnum)
	            };
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
