import React, {Component} from 'react';
import {getRst} from 'actions/awardresults.js';
import {connect} from 'react-redux';
import style from './awardresults.css';


class Awardresults extends Component {

    constructor(props) {
        super(props);
        this.abut = this.props.betsdata;
    }

    componentDidMount() {
        let gmid = this.abut.gameid;
        let ukey = this.abut.ukey;
        let rstUrl = 'http://m.ilikezu.cn:8080/ssc/game/getWinners.xhtml?gameId=' + gmid + '&ukey=' + ukey;
        let rstfn = this.callrstagain.bind(this);
        setTimeout(()=> {
            this.props.getRst(rstUrl,rstfn);
        }, 20000)
        // this.props.getinfo(gameUrl);
        // this.countdowntime();
    }

    callrstagain () {
        if (this.props.gamerst.aresult.isSuccess == false) {
            let gmid = this.abut.gameid;
            let ukey = this.abut.ukey;
            let rstUrl = 'http://m.ilikezu.cn:8080/ssc/game/getWinners.xhtml?gameId=' + gmid + '&ukey=' + ukey;
            let rstfn = this.callrstagain.bind(this);
            setTimeout(()=> {
                this.props.getRst(rstUrl,rstfn);
            }, 1000)            
        }
    }

    render() {
        let pagerst =   <div>
                            <div className={style.container}>
                              <div className={style.wrap} >
                                <div className={style.ball1}></div>
                              </div>
                              <div className={style.wrap2}>
                                <div className={style.ball2}></div>
                              </div>

                              <div className={style.wrap3}>
                                <div className={style.ball3}></div>
                              </div>
                             
                              <div className={style.wrap4}>
                                <div className={style.ball4}></div>
                              </div>
                              <div className={style.wrap5} >
                                <div className={style.ball5} ></div>
                              </div>
                            </div>
                            <span>正在开奖中...</span>
                        </div>

        if (this.props.gamerst.aresult.data) {
            let rstarr = this.props.gamerst.aresult.data.winners;
            let chipeielt = '';
            let pagerstchild = rstarr.map((elt)=>{
                let numelt = Number(elt);
                if (numelt == 1 || numelt == 12 || numelt == 8 || numelt == 7 || numelt == 2
                 || numelt == 13 || numelt == 24 || numelt == 23 || numelt == 19 || numelt == 18 || numelt ==  35  || numelt == 34
                 || numelt == 30 || numelt == 29 || numelt == 46 || numelt == 45 || numelt == 40) {
                    return  <li key = {Math.random()}>
                                <div className={style.shadow}></div>
                                <div className={style.ballsred}>{elt}</div>
                            </li>
                } else if (numelt == 11 || numelt == 6 || numelt == 5 || numelt == 22 || numelt == 21
                 || numelt == 17 || numelt == 16 || numelt == 33 || numelt == 32 || numelt == 28 || numelt ==  27  || numelt == 44
                 || numelt == 43 || numelt == 39 || numelt == 38) {
                    return  <li key = {Math.random()}>
                                <div className={style.shadow}></div>
                                <div className={style.ballsgreen}>{elt}</div>
                            </li>
                } else if (numelt == 10 || numelt == 9 || numelt == 4 || numelt == 3 || numelt == 20
                 || numelt == 15 || numelt == 14 || numelt == 25 || numelt == 36 || numelt == 31 || numelt ==  26  || numelt == 37
                 || numelt == 48 || numelt == 47 || numelt == 42 || numelt == 41) {
                    return  <li key = {Math.random()}>
                                <div className={style.shadow}></div>
                                <div className={style.ballsblue}>{elt}</div>
                            </li>
                }
            })

            if (this.props.gamerst.aresult.data.chi || this.props.gamerst.aresult.data.pei) {
                chipeielt = <div className = {style.chipei}>
                                <p><img src = {require('./img/icon_chi.png')} /><span>{this.props.gamerst.aresult.data.chi}</span></p>
                                <p><img src = {require('./img/icon_pei.png')} /><span>{this.props.gamerst.aresult.data.pei}</span></p>
                            </div>
            }

            pagerst =   <ul className = {style.wraps}>
                            {chipeielt}
                            {pagerstchild}
                            <a className = {style.cangoplay} href = 'javascript:;' onClick = {()=>window.location.reload()}>知道了，返回游戏</a>
                        </ul>

            // setTimeout(()=> {
            //     window.location.reload()
            // }, 15000)

        } 

        return (
            <div className = {style.darkbg}>
                {pagerst}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        gamerst: state.awardresults
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRst: (url,rstfn) => {
            dispatch(getRst(url,rstfn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Awardresults);











