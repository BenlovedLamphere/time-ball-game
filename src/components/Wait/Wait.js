import React, {Component} from 'react';
import {getinfo,timedecrementAround} from 'actions/wait.js';
import {connect} from 'react-redux';
import Bets from 'components/Bets/Bets';
import Counttime from 'components/Counttime/Counttime';
import Awardresults  from 'components/Awardresults/Awardresults';
import Lastrecord  from 'components/Lastrecord/Lastrecord';
import style from './wait.css';

class Wait extends Component {
    constructor(props) {
        super(props);
        this.state = {alltheBets:0,stopbet:22,betnum:1,gamesall:{}};
        this.waittimemisson;
    }

    countAlltheBets (e) {
        let astate = this.state;
        astate.alltheBets = e;
        this.setState(astate);
    }
    setgamesid () {
        let gamesidstate = this.state;
        gamesidstate.gamesall = this.props.gamesinfo.infoback.data;
        this.setState(gamesidstate);
    }
    componentWillUnmount() {
        clearTimeout(this.waittimemisson);
    }    
    componentDidMount() {
        this.reloadwait ();
        // this.countdowntime();
    }

    decrementbls (e) {
        let blsstate = this.state;
        blsstate.gamesall.blance = e;
        this.setState(blsstate);
    }

    reloadwait () {
        let ukey = this.props.ukeystate;
        let agmidfn = this.setgamesid.bind(this);
        let gameUrl = this.props.apiurl + 'game/realtimeInfo.xhtml?ukey=' + ukey;
        this.props.getinfo(gameUrl,agmidfn);
        if (this.state.stopbet > 21) {
        this.waittimemisson = setTimeout(()=> {
                this.reloadwait ();
            }, 3000)            
        }
    }
    changeBetnum(e) {
        let oneastate = this.state;
        oneastate.betnum = e.target.value;
        this.setState(oneastate);
    }

    stopBets (e) {
        let betstate = this.state;
        betstate.stopbet = e;
        this.setState(betstate);
    }

    render() {
        // let pagegame =  <div className = {style.layout}>
        //                     <div className = {style.plswait}>
        //                         <p>游戏载入中...</p>
        //                     </div>
        //                 </div>
                        
        let pagegame,countdowntime;
        let betsdata = {canbet:true,ukey:this.props.ukeystate};
        let layoutpage = '';
        let music = 'http://www.namcmusic.cn/bg.mp3';
        if (this.state.stopbet < 21) {
            // layoutpage = '';
            layoutpage = <Awardresults betsdata = {betsdata} stopbets = {this.stopBets.bind(this) } apiurl = {this.props.apiurl}/>
            music = 'http://www.namcmusic.cn/rst.mp3';
        }
        let infodata = new Object();
        let timepage = '';
        infodata.zaixian = 0;
        infodata.hong = 0;
        infodata.lan = 0;
        infodata.lv = 0;
        infodata.dan = 0;
        infodata.shuang = 0;
        infodata.da = 0;
        infodata.xiao = 0;
        infodata.blance = 0;
        console.log (betsdata);
        console.log (this);
        if (this.props.gamesinfo.infoback.data) {
            infodata = this.props.gamesinfo.infoback.data;
            betsdata.gameid = infodata.curr;
            //  = parseInt((Number(infodata.endtime) - Number(infodata.servertime)) / 1000);
            let timedifference = parseInt((Number(infodata.endtime) - Number(infodata.servertime)) / 1000);
            timepage = <Counttime times = {timedifference} stopbets = {this.stopBets.bind(this)} apiurl = {this.props.apiurl}/>;
            // pagegame =  
        }
        return (
            <div className = {style.w100}>
                <audio ref = 'playMusic' src={music} autoPlay loop hidden></audio>
                <div>
                            <div className = {style.top}>
                                <ul>
                                    <li>
                                        <span><img src = {require('./img/icon_people.png')} /></span>
                                        <p>{this.state.gamesall.zaixian}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_red.png')} /></span>
                                        <p>{this.state.gamesall.hong}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_blue.png')} /></span>
                                        <p>{this.state.gamesall.lan}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_green.png')} /></span>
                                        <p>{this.state.gamesall.lv}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_single.png')} /></span>
                                        <p>{this.state.gamesall.dan}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_double.png')} /></span>
                                        <p>{this.state.gamesall.shuang}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_big.png')} /></span>
                                        <p>{this.state.gamesall.da}</p>
                                    </li>
                                    <li>
                                        <span><img src = {require('./img/icon_small.png')} /></span>
                                        <p>{this.state.gamesall.xiao}</p>
                                    </li>                        
                                </ul>
                                <dl>
                                    <dt><span className = {style.notice}>{this.state.gamesall.notice}</span></dt>
                                    <dd>欢迎 <span>{this.props.number.username}</span></dd>
                                </dl>
                            </div>
                            <div className = {style.allthebody}>
                                <div className = {style.leftbody}>
                                    <Lastrecord apiurl = {this.props.apiurl} />
                                    <div className = {style.setbetsval}>
                                        <select value = {this.state.betnum} onChange = {(e)=>{
                                            this.changeBetnum(e);
                                        }}>
                                          <option value ="1">默认一次1注</option>
                                          <option value ="5">点一下5注</option>
                                          <option value="10">点一下10注</option>
                                          <option value="50">点一下50注</option>
                                        </select>
                                    </div>
                                </div>
                                <Bets apiurl = {this.props.apiurl} decrement = {this.decrementbls.bind(this)} ifbets = {this.state.gamesall.blance} gmsid = {this.state.gamesall.curr} betsdata = {betsdata} betnum = {this.state.betnum} countbets = {this.countAlltheBets.bind(this)}/>
                            </div>
                            <div className = {style.topleft}>
                                <h1>第<span>{this.state.gamesall.curr}</span>期</h1>
                                <ul>
                                    <li>余额：<span>{this.state.gamesall.blance}</span></li>
                                    <li>下注：<span>{this.state.alltheBets}</span></li>
                                    <li>开奖：<span>{timepage}</span></li>
                                </ul>                                
                            </div>
                            <div className = {style.bottomright}>
                            </div>
                        </div>
                {layoutpage}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        gamesinfo: state.wait
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getinfo: (url,gmidfn) => {
            dispatch(getinfo(url,gmidfn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);





                                    // <dl className = {style.mgb10}>
                                    //     <dt><img src = {require('./img/1.png')} /></dt>
                                    //     <dt><img src = {require('./img/2.png')} /></dt>
                                    //     <dt><img src = {require('./img/3.png')} /></dt>
                                    //     <dt><img src = {require('./img/4.png')} /></dt>
                                    //     <dt><img src = {require('./img/5.png')} /></dt>
                                    //     <dt><img src = {require('./img/6.png')} /></dt>
                                    //     <dt><img src = {require('./img/7.png')} /></dt>
                                    //     <dt><img src = {require('./img/8.png')} /></dt>
                                    //     <dt><img src = {require('./img/9.png')} /></dt>
                                    //     <dt><img src = {require('./img/10.png')} /></dt>
                                    //     <dt><img src = {require('./img/11.png')} /></dt>
                                    //     <dt><img src = {require('./img/12.png')} /></dt>
                                    // </dl>