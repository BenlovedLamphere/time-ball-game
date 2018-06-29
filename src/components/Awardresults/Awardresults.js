import React, {Component} from 'react';
import {getRst} from 'actions/awardresults.js';
import {connect} from 'react-redux';
import style from './awardresults.css';


class Awardresults extends Component {

    constructor(props) {
        super(props);
        this.abut = this.props.betsdata;
        this.state = {chi:'暂无',pei:'暂无'}
    }

    componentDidMount() {
        let gmid = this.abut.gameid;
        let ukey = this.abut.ukey;
        let rstUrl = this.props.apiurl + 'game/getWinners.xhtml?gameId=' + gmid + '&ukey=' + ukey;
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
            let rstUrl = this.props.apiurl + 'game/getWinners.xhtml?gameId=' + gmid + '&ukey=' + ukey;
            let rstfn = this.callrstagain.bind(this);
            setTimeout(()=> {
                this.props.getRst(rstUrl,rstfn);
            }, 1000)            
        } else {
            setTimeout(()=>{
                window.location.reload();
            },10000)
        }
    }

    render() {
        let pagerst =   <div className = {style.darkbg}>
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
        let chipeielt = '';
        if (this.props.gamerst.aresult.data) {
            let rstarr = this.props.gamerst.aresult.data.winners;
            let pagerstchild = rstarr.map((elt,index)=>{
                // let numelt = Number(elt);
                let fefno = 'n' + elt;
                if (index == 6) {
                    this.refs[fefno].style.opacity = 1;
                    this.refs[fefno].children[0].className = style.five;
                    console.log('这是第六个')
                } else {
                    this.refs[fefno].style.opacity = 1;
                }
            })
            pagerst = '';               
            if (this.props.gamerst.aresult.data.chi || this.props.gamerst.aresult.data.pei) {
                chipeielt = <div className = {style.chipei}>
                                <p><img src = {require('./img/icon_chi.png')} /><span>{this.props.gamerst.aresult.data.chi}</span></p>
                                <p><img src = {require('./img/icon_pei.png')} /><span>{this.props.gamerst.aresult.data.pei}</span></p>
                            </div>
            }



                       // <ul className = {style.wraps}>
                       //      {chipeielt}
                       //      {pagerstchild}
                       //      
                       //  </ul>

            // setTimeout(()=> {
            //     window.location.reload()
            // }, 15000)

        } 

        return (
            <div className = {style.bigbigbody}>
                <div className = {style.bigbody}>
                    {pagerst}
                    {chipeielt}
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
                        <li className = {style.redball} ref = 'n1'><a href = 'javascript:;'>01</a></li>
                        <li className = {style.redball} ref = 'n12'><a href = 'javascript:;' >12</a></li>
                        <li className = {style.greenball} ref = 'n11'><a href = 'javascript:;' >11</a></li>
                        <li className = {style.blueball} ref = 'n10'><a href = 'javascript:;' >10</a></li>
                        <li className = {style.blueball} ref = 'n9'><a href = 'javascript:;' >09</a></li>
                        <li className = {style.redball} ref = 'n8'><a href = 'javascript:;' >08</a></li>
                        <li className = {style.redball} ref = 'n7'><a href = 'javascript:;' >07</a></li>
                        <li className = {style.greenball} ref = 'n6'><a href = 'javascript:;' >06</a></li>
                        <li className = {style.greenball} ref = 'n5'><a href = 'javascript:;' >05</a></li>
                        <li className = {style.blueball} ref = 'n4'><a href = 'javascript:;' >04</a></li>
                        <li className = {style.blueball} ref = 'n3'><a href = 'javascript:;' >03</a></li>
                        <li className = {style.redball} ref = 'n2'><a href = 'javascript:;' >02</a></li>
                    </ul>
                    <ul>
                        <li className = {style.redball} ref = 'n13'><a href = 'javascript:;' >13</a></li>
                        <li className = {style.redball} ref = 'n24'><a href = 'javascript:;' >24</a></li>
                        <li className = {style.redball} ref = 'n23'><a href = 'javascript:;' >23</a></li>
                        <li className = {style.greenball} ref = 'n22'><a href = 'javascript:;' >22</a></li>
                        <li className = {style.greenball} ref = 'n21'><a href = 'javascript:;' >21</a></li>
                        <li className = {style.blueball} ref = 'n20'><a href = 'javascript:;' >20</a></li>
                        <li className = {style.redball} ref = 'n19'><a href = 'javascript:;' >19</a></li>
                        <li className = {style.redball} ref = 'n18'><a href = 'javascript:;' >18</a></li>
                        <li className = {style.greenball} ref = 'n17'><a href = 'javascript:;' >17</a></li>
                        <li className = {style.greenball} ref = 'n16'><a href = 'javascript:;' >16</a></li>
                        <li className = {style.blueball} ref = 'n15'><a href = 'javascript:;' >15</a></li>
                        <li className = {style.blueball} ref = 'n14'><a href = 'javascript:;' >14</a></li>
                    </ul>
                    <ul>
                        <li className = {style.blueball} ref = 'n25'><a href = 'javascript:;' >25</a></li>
                        <li className = {style.blueball} ref = 'n36'><a href = 'javascript:;' >36</a></li>
                        <li className = {style.redball} ref = 'n35'><a href = 'javascript:;' >35</a></li>
                        <li className = {style.redball} ref = 'n34'><a href = 'javascript:;' >34</a></li>
                        <li className = {style.greenball} ref = 'n33'><a href = 'javascript:;' >33</a></li>
                        <li className = {style.greenball} ref = 'n32'><a href = 'javascript:;' >32</a></li>
                        <li className = {style.blueball} ref = 'n31'><a href = 'javascript:;' >31</a></li>
                        <li className = {style.redball} ref = 'n30'><a href = 'javascript:;' >30</a></li>
                        <li className = {style.redball} ref = 'n29'><a href = 'javascript:;' >29</a></li>
                        <li className = {style.greenball} ref = 'n28'><a href = 'javascript:;' >28</a></li>
                        <li className = {style.greenball} ref = 'n27'><a href = 'javascript:;' >27</a></li>
                        <li className = {style.blueball} ref = 'n26'><a href = 'javascript:;' >26</a></li>
                    </ul>
                    <ul>
                        <li className = {style.blueball} ref = 'n37'><a href = 'javascript:;' >37</a></li>
                        <li className = {style.blueball} ref = 'n48'><a href = 'javascript:;' >48</a></li>
                        <li className = {style.blueball} ref = 'n47'><a href = 'javascript:;' >47</a></li>
                        <li className = {style.redball} ref = 'n46'><a href = 'javascript:;' >46</a></li>
                        <li className = {style.redball} ref = 'n45'><a href = 'javascript:;' >45</a></li>
                        <li className = {style.greenball} ref = 'n44'><a href = 'javascript:;' >44</a></li>
                        <li className = {style.greenball} ref = 'n43'><a href = 'javascript:;' >43</a></li>
                        <li className = {style.blueball} ref = 'n42'><a href = 'javascript:;' >42</a></li>
                        <li className = {style.blueball} ref = 'n41'><a href = 'javascript:;' >41</a></li>
                        <li className = {style.redball} ref = 'n40'><a href = 'javascript:;' >40</a></li>
                        <li className = {style.greenball} ref = 'n39'><a href = 'javascript:;' >39</a></li>
                        <li className = {style.greenball} ref = 'n38'><a href = 'javascript:;' >38</a></li>
                    </ul>
                </div>

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

                // <a className = {style.cangoplay} href = 'javascript:;' onClick = {()=>window.location.reload()}>知道了，返回游戏</a>


                // {pagerst}




