import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import Playgame from 'bundle-loader?lazy&name=playgame!pages/Playgame/Playgame';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component,a) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component thisurl = {a} {...props} /> : <Loading/>
        }
    </Bundle>
);

export default (a) => (
    <div>
        <Switch>
            <Route path="/home" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route exact path="/" component={createComponent(Playgame,a)} />
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
