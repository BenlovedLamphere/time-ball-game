import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';

var apiUrl = 'http://m.ilikezu.cn:8080/ssc/';

renderWithHotReload(App,apiUrl);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp,apiUrl);
    });
}

function renderWithHotReload(RootElement,apiurl) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement apiurl = {apiurl} />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
