import React, {Component} from 'react';
import {getlastrecord} from 'actions/lastrecord.js';
import {connect} from 'react-redux';
import style from './lastrecord.css'


class Lastrecord extends Component {

    componentDidMount() {
    	let getrecordUrl = 'http://m.ilikezu.cn:8080/ssc/game/getgameHistory.xhtml';
    	this.props.getlastrecord (getrecordUrl);
    }	





	render () {

		console.log (123,this)
		let recordpage;
		if (this.props.havrecord.recordback.data) {
			let recordarr = this.props.havrecord.recordback.data.list;
			recordarr.splice(4,1);
			recordpage = recordarr.map((elt)=>{
				let puqiuarr = elt.puqiu.replace(/,/g,' ');
				return	<dd key = {Math.random()}>
                    		<p>{elt.index}</p>
                    		<p className = {style.colfff}>{puqiuarr} {elt.tema}</p>
                		</dd>
			})

		}
		return (

            <dl>
                <dt>往期开奖</dt>
                {recordpage}
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