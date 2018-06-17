import React, {Component} from 'react';
import {getlastrecord} from 'actions/lastrecord.js';
import {connect} from 'react-redux';
import style from './lastrecord.css'


class Lastrecord extends Component {
    componentDidMount() {
    	let getrecordUrl = 'http://m.ilikezu.cn:8080/ssc/game/getgameHistory.xhtml?max=28';
    	this.props.getlastrecord (getrecordUrl);
    }	





	render () {
		console.log (123,this)
		let recordpage;
		// if (this.props.havrecord.recordback.data) {
		// 	let recordarr = this.props.havrecord.recordback.data.list;
		// 	recordarr.splice(4,1);
		// 	recordpage = recordarr.map((elt)=>{
		// 		let puqiuarr = elt.puqiu.replace(/,/g,' ');
		// 		return	<dd key = {Math.random()}>
  //                   		<p>{elt.index}</p>
  //                   		<p className = {style.colfff}>{puqiuarr} {elt.tema}</p>
  //               		</dd>
		// 	})
		// }
        // 
        if (this.props.havrecord.recordback.data) {
            let recordarr = this.props.havrecord.recordback.data.temaList;
            recordpage = recordarr.map ((elt)=>{
                let numelt = Number(elt);
                if (numelt == 1 || numelt == 12 || numelt == 8 || numelt == 7 || numelt == 2
                 || numelt == 13 || numelt == 24 || numelt == 23 || numelt == 19 || numelt == 18 || numelt ==  35  || numelt == 34
                 || numelt == 30 || numelt == 29 || numelt == 46 || numelt == 45 || numelt == 40) {
                    return  <span key = {Math.random()} className = {style.ballsred}>{numelt}</span>
                } else if (numelt == 11 || numelt == 6 || numelt == 5 || numelt == 22 || numelt == 21
                 || numelt == 17 || numelt == 16 || numelt == 33 || numelt == 32 || numelt == 28 || numelt ==  27  || numelt == 44
                 || numelt == 43 || numelt == 39 || numelt == 38) {
                    return  <span key = {Math.random()} className = {style.ballsgreen}>{numelt}</span>
                } else if (numelt == 10 || numelt == 9 || numelt == 4 || numelt == 3 || numelt == 20
                 || numelt == 15 || numelt == 14 || numelt == 25 || numelt == 36 || numelt == 31 || numelt ==  26  || numelt == 37
                 || numelt == 48 || numelt == 47 || numelt == 42 || numelt == 41) {
                    return  <span key = {Math.random()} className = {style.ballsblue}>{numelt}</span>
                }                
            })

        }
		return (
            <dl className = {style.lastrecord}>
                <dt>往期特码</dt>
                <dd>
                    {recordpage}
                </dd>
            </dl>
		)
	}
}



const mapStateToProps = (state) => {
    return {
        havrecord: state.lastrecord
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getlastrecord: (url) => {
            dispatch(getlastrecord(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lastrecord);



                // {recordpage}
