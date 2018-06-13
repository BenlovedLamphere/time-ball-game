import React, {Component} from 'react';
import {connect} from 'react-redux';
import {countAllbets,goplaythebets} from 'actions/bets.js';

import style from './bets.css';
class Bets extends Component {

		constructor(props) {
			super(props);
			this.abut = this.props.betsdata;
			this.time = 0;
			this.timemisson;
			this.timeAround = this.timeAround.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}

  		timeAround () {
    		this.time = this.time + 1;
    		console.log(this.time);
    		this.timemisson = 
			setTimeout(()=> {
				this.timeAround ();
			}, 1000)
    		if (this.time == 1) {
                let afn = this.checkbetsright.bind(this);
    			this.props.goplaythebets(this.props.gmsid,this.props.betsdatacenter,this.abut.ukey,afn);
				clearTimeout(this.timemisson);
    		}
    	}
        checkbetsright () {
                    if (this.props.betsdatacenter.gobetsrst.isSuccess == true) {
                    let allbets = Number(this.props.betsdatacenter.gou) + 
                                  Number(this.props.betsdatacenter.zhu) + 
                                  Number(this.props.betsdatacenter.shu) +
                                  Number(this.props.betsdatacenter.niu) +
                                  Number(this.props.betsdatacenter.hu) +
                                  Number(this.props.betsdatacenter.tu) +
                                  Number(this.props.betsdatacenter.dragon) +
                                  Number(this.props.betsdatacenter.she) +
                                  Number(this.props.betsdatacenter.ma) +
                                  Number(this.props.betsdatacenter.yang) +
                                  Number(this.props.betsdatacenter.hou) +
                                  Number(this.props.betsdatacenter.ji) +
                                  Number(this.props.betsdatacenter.da) +
                                  Number(this.props.betsdatacenter.xiao) +
                                  Number(this.props.betsdatacenter.dan) +
                                  Number(this.props.betsdatacenter.shuang) +
                                  Number(this.props.betsdatacenter.hong) +
                                  Number(this.props.betsdatacenter.lv) +
                                  Number(this.props.betsdatacenter.lan)
                                  this.props.countbets(allbets);    
                    }
        }
    	handleClick(which) {
            // let allbets = Number(this.props.betsdatacenter.gou) + 
            //               Number(this.props.betsdatacenter.zhu) + 
            //               Number(this.props.betsdatacenter.shu) +
            //               Number(this.props.betsdatacenter.niu) +
            //               Number(this.props.betsdatacenter.hu) +
            //               Number(this.props.betsdatacenter.tu) +
            //               Number(this.props.betsdatacenter.dragon) +
            //               Number(this.props.betsdatacenter.she) +
            //               Number(this.props.betsdatacenter.ma) +
            //               Number(this.props.betsdatacenter.yang) +
            //               Number(this.props.betsdatacenter.hou) +
            //               Number(this.props.betsdatacenter.ji) +
            //               Number(this.props.betsdatacenter.da) +
            //               Number(this.props.betsdatacenter.xiao) +
            //               Number(this.props.betsdatacenter.dan) +
            //               Number(this.props.betsdatacenter.shuang) +
            //               Number(this.props.betsdatacenter.hong) +
            //               Number(this.props.betsdatacenter.lv) +
            //               Number(this.props.betsdatacenter.lan)
            // if (Number(this.props.ifbets) <= Number(allbets)) {
            //     return;
            // } else if (Number(this.props.ifbets) > Number(allbets))   {
            //     if (Number(this.props.ifbets) - Number(allbets) < Number(this.props.betnum)) {
            //         return;
            //     }else {
            //         this.time = 0;
            //         clearTimeout(this.timemisson);
            //         this.timeAround();
            //         this.props.countAllbets(which,this.props.betnum);     
            //         this.props.decrement(); 
            //     }
            // } else {
            //     this.time = 0;
            //     clearTimeout(this.timemisson);
            //     this.timeAround();
            //     this.props.countAllbets(which,this.props.betnum);     
            //     this.props.decrement(); 
            // }

            if (Number(this.props.ifbets) >= Number(this.props.betnum)) {
                this.time = 0;
                clearTimeout(this.timemisson);
                this.timeAround();
                this.props.countAllbets(which,this.props.betnum);     
                this.props.decrement(); 
            } else {
              return;
            }
    	}
    render() {
  		console.log(this)

        return (
            <div className = {style.bigbody}>
                <dl className = {style.plusanmbtn}>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('gou')}}>狗<span>{this.props.betsdatacenter.gou}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('zhu')}}>猪<span>{this.props.betsdatacenter.zhu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('shu')}}>鼠<span>{this.props.betsdatacenter.shu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('niu')}}>牛<span>{this.props.betsdatacenter.niu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hu')}}>虎<span>{this.props.betsdatacenter.hu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('tu')}}>兔<span>{this.props.betsdatacenter.tu}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('dragon')}}>龙<span>{this.props.betsdatacenter.dragon}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('she')}}>蛇<span>{this.props.betsdatacenter.she}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('ma')}}>马<span>{this.props.betsdatacenter.ma}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('yang')}}>羊<span>{this.props.betsdatacenter.yang}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hou')}}>猴<span>{this.props.betsdatacenter.hou}</span></a></dd>
                    <dd><a href = 'javascript:;' onClick={() => {this.handleClick('ji')}}>鸡<span>{this.props.betsdatacenter.ji}</span></a></dd>
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
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('da')}}>大<span>{this.props.betsdatacenter.da}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('xiao')}}>小<span>{this.props.betsdatacenter.xiao}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('dan')}}>单<span>{this.props.betsdatacenter.dan}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('shuang')}}>双<span>{this.props.betsdatacenter.shuang}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('hong')}}>红<span>{this.props.betsdatacenter.hong}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('lv')}}>绿<span>{this.props.betsdatacenter.lv}</span></a></dd>
                        <dd><a href = 'javascript:;' onClick={() => {this.handleClick('lan')}}>蓝<span>{this.props.betsdatacenter.lan}</span></a></dd>
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


