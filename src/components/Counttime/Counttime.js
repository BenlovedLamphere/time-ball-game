import React, {Component} from 'react';

export default class Counttime extends Component {

    constructor(props) {
        super(props);
        this.state = {clock:this.props.times};
        this.countdowntmisson;
    }
    componentDidMount() {
    	this.countdowntime ();
    }

    componentWillUnmount() {
        clearTimeout(this.countdowntmisson);
    }    
    countdowntime () {
    	let aclock = this.state;
    	aclock.clock = Number(aclock.clock) - 1;
        if (aclock.clock < 21 ) {
            this.props.stopbets(aclock.clock);
            return;
        }
    	this.setState (aclock);
		this.countdowntmisson =	setTimeout(()=> {
				this.countdowntime ();
			}, 1000)
    }
    render() {
        return (
			<span>{this.state.clock}</span>
        )
    }
}