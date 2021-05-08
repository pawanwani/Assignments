import React from 'react'
import HeaderApp from './HeaderApp'
import  Board  from "./Board";
import Table from './Table';
import Reset from './Reset';
import Inputfield from './Inputfield';
import Timer from './Timer';
let rows = [];
let stopTimer = false;
class Game extends React.Component {
  constructor(props){
    super();
    this.state = {
        history:[{
          cells:Array(9).fill(null)
        }],
        next:true,
        player1Name : "X",
        player2Name : "O",
        mode: 'Input',
        turn: "first",
        resetTimer:false 
    }
  }
  handelcellclick=(id)=>{
    const history = this.state.history;
    const current = history[history.length - 1];
    const currentCell = [...current.cells]
    if(calculateWinner(currentCell) || currentCell[id]){
        return;
    }
    currentCell[id] = this.state.next ? 'X':'O';
    let index=currentCell.filter((num)=>{
        return num!=null
    }).length
    let row ={cellNo:id , player : currentCell[id],index:index}
    rows.push(row);
    this.setState({
        history: history.concat([{
          cells: currentCell,
        }]),
        next: !this.state.next,
        turn: this.state.next ? 'second':'first'
      });
        
      
  } 
  clearAllRecord=()=>{
    this.setState({
        history:[{
            cells: Array(9).fill(null),
        }],
        next : true,
        resetTimer: !this.state.resetTimer
    });
    rows=[];
  }
  handlePlayerNames =(player1,player2,newMode)=>{
    this.setState({
      player1Name: player1,
      player2Name: player2,
      mode:newMode
    })
  }
  renderInputField=()=>{
    return(
      <div>
          <Inputfield handlePlayerNames={this.handlePlayerNames} player1={this.state.player1Name} player2={this.state.player2Name}/>
      </div>
      
    );
  };
  renderGameField=()=>{
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.cells);
    if(winner){
      stopTimer= !stopTimer;
    }
      return(
        <>
        <div className="horizontal-layout">
             <div>
                 <Board current={current.cells} player1={this.state.player1Name} player2={this.state.player2Name} winner={winner} next={this.state.next} handelcellclick={this.handelcellclick} rows={this.rows}/>
             </div>
             <div className="resultTable">
                 <Table data = {rows}/>
             </div>
         </div>
         <Reset flushAll={this.clearAllRecord}/>
        <div className="horizontal-layout timer-layout">
          <Timer uniqueName="X" player={this.state.player1Name} turn={this.state.turn} resetTimer={this.state.resetTimer} stopTimer={stopTimer}/>
          <Timer uniqueName="O" player={this.state.player2Name} turn={this.state.turn} resetTimer={this.state.resetTimer} stopTimer={stopTimer}/>
        </div>
        </>
    );  
  };
  
  render() {
    
    return (
      <div>
        <div className="App">
          <HeaderApp siteTitle="Tic-Tak-Toe" Theme="Dark"/>
          {
            this.state.mode==="Input"? this.renderInputField() : this.renderGameField()
          }
      </div>
      </div>
    )
  }
}
function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return {winner:cells[a], winnerCell:lines[i]};
    }
  }
  return null;
}

export default Game;
