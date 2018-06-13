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
            this.state = {da:0,xiao:0,dan:0,shuang:0,hong:0,lv:0,lan:0,shu:0,niu:0,hu:0,tu:0,dragon:0,she:0,ma:0,yang:0,hou:0,ji:0,gou:0,zhu:0}
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
                let p = new Promise (function (resolve,veject){
                    _this.props.countAllbets(which,_this.props.betnum)
                    resolve();
                }).then(function () {
                    _this.props.goplaythebets(_this.props.gmsid,_this.props.betsdatacenter,_this.abut.ukey,afn);
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
                    <li className = {style.redball}><span>01</span></li>
                    <li className = {style.redball}><span>12</span></li>
                    <li className = {style.greenball}><span>11</span></li>
                    <li className = {style.blueball}><span>10</span></li>
                    <li className = {style.blueball}><span>09</span></li>
                    <li className = {style.redball}><span>08</span></li>
                    <li className = {style.redball}><span>07</span></li>
                    <li className = {style.greenball}><span>06</span></li>
                    <li className = {style.greenball}><span>05</span></li>
                    <li className = {style.blueball}><span>04</span></li>
                    <li className = {style.blueball}><span>03</span></li>
                    <li className = {style.redball}><span>02</span></li>
                </ul>
                <ul>
                    <li className = {style.redball}><span>13</span></li>
                    <li className = {style.redball}><span>24</span></li>
                    <li className = {style.redball}><span>23</span></li>
                    <li className = {style.greenball}><span>22</span></li>
                    <li className = {style.greenball}><span>21</span></li>
                    <li className = {style.blueball}><span>20</span></li>
                    <li className = {style.redball}><span>19</span></li>
                    <li className = {style.redball}><span>18</span></li>
                    <li className = {style.greenball}><span>17</span></li>
                    <li className = {style.greenball}><span>16</span></li>
                    <li className = {style.blueball}><span>15</span></li>
                    <li className = {style.blueball}><span>14</span></li>
                </ul>
                <ul>
                    <li className = {style.blueball}><span>25</span></li>
                    <li className = {style.blueball}><span>36</span></li>
                    <li className = {style.redball}><span>35</span></li>
                    <li className = {style.redball}><span>34</span></li>
                    <li className = {style.greenball}><span>33</span></li>
                    <li className = {style.greenball}><span>32</span></li>
                    <li className = {style.blueball}><span>31</span></li>
                    <li className = {style.redball}><span>30</span></li>
                    <li className = {style.redball}><span>29</span></li>
                    <li className = {style.greenball}><span>28</span></li>
                    <li className = {style.greenball}><span>27</span></li>
                    <li className = {style.blueball}><span>26</span></li>
                </ul>
                <ul>
                    <li className = {style.blueball}><span>37</span></li>
                    <li className = {style.blueball}><span>48</span></li>
                    <li className = {style.blueball}><span>47</span></li>
                    <li className = {style.redball}><span>46</span></li>
                    <li className = {style.redball}><span>45</span></li>
                    <li className = {style.greenball}><span>44</span></li>
                    <li className = {style.greenball}><span>43</span></li>
                    <li className = {style.blueball}><span>42</span></li>
                    <li className = {style.blueball}><span>41</span></li>
                    <li className = {style.redball}><span>40</span></li>
                    <li className = {style.greenball}><span>39</span></li>
                    <li className = {style.greenball}><span>38</span></li>
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
        	dispatch(goplaythebets(id,data,ukey,fn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bets);


