import React, {Component} from 'react';
import {connect} from 'react-redux';
import {countAllbets,goplaythebets} from 'actions/bets.js';

import style from './bets.css';
class Bets extends Component {
		constructor(props) {
			super(props);
			this.abut = this.props.betsdata;
			// this.time = 0;
			// this.timemisson;
			// this.timeAround = this.timeAround.bind(this);
			this.handleClick = this.handleClick.bind(this);
            this.state = {da:0,xiao:0,dan:0,shuang:0,hong:0,lv:0,lan:0,shu:0,niu:0,hu:0,tu:0,dragon:0,she:0,ma:0,yang:0,hou:0,ji:0,gou:0,zhu:0,
                          no1:0,no2:0,no3:0,no4:0,no5:0,no6:0,no7:0,no8:0,no9:0,no10:0,no11:0,no12:0,no13:0,no14:0,no15:0,no16:0,no17:0,no18:0,
                          no19:0,no20:0,no21:0,no22:0,no23:0,no24:0,no25:0,no26:0,no27:0,no28:0,no29:0,no30:0,no31:0,no32:0,no33:0,no34:0,no35:0,
                          no36:0,no37:0,no38:0,no39:0,no40:0,no41:0,no42:0,no43:0,no44:0,no45:0,no46:0,no47:0,no48:0}
		}
        checkbetsright () {
            if (this.props.betsdatacenter.gobetsrst.isSuccess == true) {
                let allbetback = this.props.betsdatacenter.gobetsrst.data.xiazhu;
                let abetstate = this.state;
                abetstate = allbetback;
                this.setState(abetstate);
                this.props.decrement(this.props.betsdatacenter.gobetsrst.data.yue);
                this.props.countbets(this.props.betsdatacenter.gobetsrst.data.xiazhutotal);
            }
        }
    	handleClick(which) {
            if (Number(this.props.ifbets) >= Number(this.props.betnum)) {
                let afn = this.checkbetsright.bind(this);
                let _this = this;//改变this的指向
                let URL = _this.props.apiurl + 'game/play.xhtml?gameId=';
                let p = new Promise (function (resolve,veject){
                    _this.props.countAllbets(which,_this.props.betnum)
                    resolve();
                }).then(function () {
                    _this.props.goplaythebets(_this.props.gmsid,_this.props.betsdatacenter,_this.abut.ukey,afn,URL);
                })
            } else {
              return;
            }
    	}
    render() {
  		console.log(this)
        return (
            <div className = {style.bigbody}>
                <dl className = {style.plusanmbtn}>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('gou')}}>狗<span>{this.state.gou}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('zhu')}}>猪<span>{this.state.zhu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('shu')}}>鼠<span>{this.state.shu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('niu')}}>牛<span>{this.state.niu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hu')}}>虎<span>{this.state.hu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('tu')}}>兔<span>{this.state.tu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('dragon')}}>龙<span>{this.state.dragon}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('she')}}>蛇<span>{this.state.she}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('ma')}}>马<span>{this.state.ma}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('yang')}}>羊<span>{this.state.yang}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hou')}}>猴<span>{this.state.hou}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('ji')}}>鸡<span>{this.state.ji}</span></a></dd>
                </dl>
                <dl>
                    <dt><img src = {require('./img/31.png')} /></dt>
                    <dt><img src = {require('./img/32.png')} /></dt>
                    <dt><img src = {require('./img/21.png')} /></dt>
                    <dt><img src = {require('./img/22.png')} /></dt>
                    <dt><img src = {require('./img/23.png')} /></dt>
                    <dt><img src = {require('./img/24.png')} /></dt>
                    <dt><img src = {require('./img/25.png')} /></dt>
                    <dt><img src = {require('./img/26.png')} /></dt>
                    <dt><img src = {require('./img/27.png')} /></dt>
                    <dt><img src = {require('./img/28.png')} /></dt>
                    <dt><img src = {require('./img/29.png')} /></dt>
                    <dt><img src = {require('./img/30.png')} /></dt>
                </dl>
                <ul>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no1')}}>01<span>{this.state.no1}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no12')}}>12<span>{this.state.no12}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no11')}}>11<span>{this.state.no11}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no10')}}>10<span>{this.state.no10}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no9')}}>09<span>{this.state.no9}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no8')}}>08<span>{this.state.no8}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no7')}}>07<span>{this.state.no7}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no6')}}>06<span>{this.state.no6}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no5')}}>05<span>{this.state.no5}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no4')}}>04<span>{this.state.no4}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no3')}}>03<span>{this.state.no3}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no2')}}>02<span>{this.state.no2}</span></a></li>
                </ul>
                <ul>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no13')}}>13<span>{this.state.no13}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no24')}}>24<span>{this.state.no24}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no23')}}>23<span>{this.state.no23}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no22')}}>22<span>{this.state.no22}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no21')}}>21<span>{this.state.no21}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no20')}}>20<span>{this.state.no20}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no19')}}>19<span>{this.state.no19}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no18')}}>18<span>{this.state.no18}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no17')}}>17<span>{this.state.no17}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no16')}}>16<span>{this.state.no16}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no15')}}>15<span>{this.state.no15}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no14')}}>14<span>{this.state.no14}</span></a></li>
                </ul>
                <ul>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no25')}}>25<span>{this.state.no25}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no36')}}>36<span>{this.state.no36}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no35')}}>35<span>{this.state.no35}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no34')}}>34<span>{this.state.no34}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no33')}}>33<span>{this.state.no33}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no32')}}>32<span>{this.state.no32}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no31')}}>31<span>{this.state.no31}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no30')}}>30<span>{this.state.no30}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no29')}}>29<span>{this.state.no29}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no28')}}>28<span>{this.state.no28}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no27')}}>27<span>{this.state.no27}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no26')}}>26<span>{this.state.no26}</span></a></li>
                </ul>
                <ul>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no37')}}>37<span>{this.state.no37}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no48')}}>48<span>{this.state.no48}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no47')}}>47<span>{this.state.no47}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no46')}}>46<span>{this.state.no46}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no45')}}>45<span>{this.state.no45}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no44')}}>44<span>{this.state.no44}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no43')}}>43<span>{this.state.no43}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no42')}}>42<span>{this.state.no42}</span></a></li>
                    <li className = {style.blueball}><a href = 'javascript:;' onClick={() => {this.handleClick('no41')}}>41<span>{this.state.no41}</span></a></li>
                    <li className = {style.redball}><a href = 'javascript:;' onClick={() => {this.handleClick('no40')}}>40<span>{this.state.no40}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no39')}}>39<span>{this.state.no39}</span></a></li>
                    <li className = {style.greenball}><a href = 'javascript:;' onClick={() => {this.handleClick('no38')}}>38<span>{this.state.no38}</span></a></li>
                </ul>
                <div className = {style.plusbtnout}>
                    <dl className = {style.plusbtn}>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('da')}}>大<span>{this.state.da}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('xiao')}}>小<span>{this.state.xiao}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('dan')}}>单<span>{this.state.dan}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('shuang')}}>双<span>{this.state.shuang}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hong')}}>红<span>{this.state.hong}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('lv')}}>绿<span>{this.state.lv}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('lan')}}>蓝<span>{this.state.lan}</span></a></dd>
                    </dl>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        betsdatacenter: state.bets
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        countAllbets: (which,betnumber) => {
            dispatch(countAllbets(which,betnumber))
        },
        goplaythebets:(id,data,ukey,fn) => {
        	dispatch(goplaythebets(id,data,ukey,fn,url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bets);


