import React, {Component} from 'react';
import {getlogin} from 'actions/playgames.js';
import {connect} from 'react-redux';
import Win from 'components/Setfontsize/Setfontsize';
import Wait from 'components/Wait/Wait';
import style from './playgame.css';

class Playgames extends Component {

    constructor(props) {
        super(props);
        this.state = {ukey:undefined};

    }
    componentDidMount() {
        Win(false);
        this.getalogin();

        // let loginUrl = 'https://bird.ioliu.cn/v2/?url=http://m.ilikezu.cn:8080/ssc/login.xhtml?agentId=' + agentId + "&ukey=" + ukey;
        // let loginUrl = 'http://ssc-pro-1171426898.us-east-2.elb.amazonaws.com/ssc/login.xhtml?agentId=' + agentId + "&ukey=" + ukey;
    }


    getalogin () {
        var cookie = {
            get:function(key){//获取cookie方法
                /*获取cookie参数*/
                var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
                var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
                var tips;  //声明变量tips
                for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                    var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                    if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                        tips=arr[1];   //将cookie的值赋给变量tips
                        break;   //终止for循环遍历
                    }
                }
                return tips;
            }
        }
        if (cookie.get("sscuserskey1")  ==  undefined || cookie.get("sscuserskey1")  ==  '' ) {
            let ukey;
            let agentId = this.props.location.search.substring(1);
            let loginUrl = this.props.thisurl + 'login.xhtml?agentId=' + agentId
            this.props.getlogin(loginUrl);



        } else if (cookie.get("sscuserskey1")) {
            let adatastring = cookie.get("sscuserskey1");
            let dataarr = adatastring.split("_");
            let dataarrobj = dataarr.map ((elt)=>{
                return JSON.parse(elt); 
            })
            let agentId = this.props.location.search.substring(1);
            let chosedarr = dataarrobj.find((et)=>{
                return et.id == agentId;
            })
            if (chosedarr != -1 && chosedarr != undefined) {
                let aukeystate = this.state;
                aukeystate.ukey = chosedarr.ukey;
                this.setState(aukeystate);                    
                let loginUrl = this.props.thisurl + 'login.xhtml?agentId=' + agentId + '&ukey=' + chosedarr.ukey;
                this.props.getlogin(loginUrl);
            } else {
                let ukey;
                let agentId = this.props.location.search.substring(1);
                let loginUrl = this.props.thisurl + 'login.xhtml?agentId=' + agentId
                this.props.getlogin(loginUrl);
            }
        }
    }
    giveapage (ev) {
        if (ev.isnew == true) {
            var cookie = {
                set:function(key,val,time){//设置cookie方法
                    var date=new Date(); //获取当前时间
                    var expiresDays=time;  //将date设置为n天以后的时间
                    date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
                    document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
                },
                get:function(key){//获取cookie方法
                    /*获取cookie参数*/
                    var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
                    var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
                    var tips;  //声明变量tips
                    for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                        var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                        if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                            tips=arr[1];   //将cookie的值赋给变量tips
                            break;   //终止for循环遍历
                        }
                    }
                    return tips;
                }
            }
            if (cookie.get("sscuserskey1")  ==  undefined || cookie.get("sscuserskey1")  ==  '' ) {
                let dailiId = this.props.location.search.substring(1);
                let userKey = ev.ukey;
                let userdataarr = new Array();
                let userdataobj = new Object();
                userdataobj.id = dailiId;
                userdataobj.ukey = userKey;
                let userobjtostring = JSON.stringify(userdataobj);
                userdataarr.push(userobjtostring);
                let userdataarrstring = userdataarr.join('_');
                cookie.set("sscuserskey1",userdataarr,30);                
            } else if (cookie.get("sscuserskey1")) {
                let adatastring = cookie.get("sscuserskey1");
                let dataarr = adatastring.split("_");
                let dailiId = this.props.location.search.substring(1);
                let userKey = ev.ukey;
                let userdataobj = new Object();
                userdataobj.id = dailiId;
                userdataobj.ukey = userKey;
                let userobjtostring = JSON.stringify(userdataobj);
                dataarr.push(userobjtostring);
                let userdataarrstring = dataarr.join('_');
                cookie.set("sscuserskey1",userdataarrstring,30);                
                // let dataarrobj = dataarr.map ((elt)=>{
                //     return JSON.parse(elt); 
                // })
            }
        return  <div className = {style.layout}>
                    <div className = {style.pbox}>
                        <p className = {style.newuser}>您好！这是您首次登录，请您<span>务必劳记并妥善保管</span>以下信息：<br/>您的ID：<strong>{ev.username}</strong><br/>您的安全码：<strong>{ev.safeCode}</strong><br/>请<span>务必劳记或截屏保管此信息</span>，如有疑问，请向工作人员出示以上信息和安全码，以便求助。</p>
                        <a className = {style.cangoplay} href = 'javascript:;' onClick = {()=>this.getalogin()} >我已牢记并保存以上信息，现在开始游戏</a>
                    </div>
                </div>
                    
        } else if (ev.isnew == false){
            return  <Wait number = {ev} ukeystate = {this.state.ukey} apiurl = {this.props.thisurl} />
        }
    }

    render() {
        let page;
        let logindata;
        console.log('hahaha')

        if (this.props.gamesdata.callback.data) {
            logindata = this.props.gamesdata.callback.data;
            if (logindata.username) {
                page = this.giveapage(logindata);
            }
        }
        return (
            <div className =  {style.bigbg}>
                {page}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gamesdata: state.playgames
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getlogin: (url) => {
            dispatch(getlogin(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Playgames);

