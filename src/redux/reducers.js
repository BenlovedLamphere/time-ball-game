import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import playgames from 'reducers/playgames';
import wait from 'reducers/wait';
import bets from 'reducers/bets';
import awardresults from 'reducers/awardresults';
import lastrecord from 'reducers/lastrecord';

export default combineReducers({
    counter,
    userInfo,
    playgames,
    wait,
    bets,
    awardresults,
    lastrecord
});


// this.countNowbets()