import React,{Component} from 'react';

class Scheduler extends Component{
    render(){
        return(
            <div className ="App">
                <h1>Today's Date</h1>
                <h1>{this.props.date.toLocaleDateString()}</h1>
                <h1>Current Time</h1>
                <h1>{this.props.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
export default Scheduler;