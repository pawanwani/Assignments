import React from 'react'
import Square from "./Square";

function Board(props) {
        let status;
        if(props.winner){
            status = "Winner :" +  (props.winner.winner ==='X'? props.player1:props.player2)
        }else if(props.current.filter((cell)=> cell!==null).length === 9){
            status = "Draw!"
        }
        else{
            status   = "Next Move: " + (props.next ? 'X':'O') +"-->"+ (props.next ? props.player1 : props.player2)
        }
    return (
        <div>   
            <div>
                 <div className ="status">{status}</div>
                    <div className="board">
                    {
                        props.current.map((value,index)=>(
                        <Square id={index} value={value} winnerCell={props.winner? props.winner.winnerCell:null} oncellclick={props.handelcellclick}/>)
                        )
                    }        
                 </div>
             </div>
            
            
        </div>
    )
}
export default Board;