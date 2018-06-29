import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';
import './public.css';

export default class App extends Component {
    render() {

    	let a = this.props.apiurl;
        return (
            <div>
                {getRouter(a)}
            </div>
        )
    }
}


                // <Nav/>
