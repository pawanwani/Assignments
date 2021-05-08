import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer : 0,
            resetFlag: false
        }
    }
    render() {
        return (
            <div>
               <p className="timer">{this.state.timer}</p> 
               <h4 className="player-name">{this.props.player}</h4> 
            </div>
        )
    }
    checkReset(){
        if(this.props.resetTimer !== this.state.resetFlag){
            this.setState({timer:0,resetFlag:!this.state.resetFlag})
        }
    }
    componentDidMount(){
            {   
                    this.myInterval = setInterval(() => {
                        this.checkReset();
                        if(this.props.uniqueName === "X" && this.props.turn === "first" && !this.props.stopTimer){
                            this.setState({
                                timer : this.state.timer + 1
                            })
                        }else if(this.props.uniqueName === "O" && this.props.turn === "second" && !this.props.stopTimer){
                            this.setState({
                                timer : this.state.timer + 1
                            })
                        }
                    }, 1000);
            }
    }
}
