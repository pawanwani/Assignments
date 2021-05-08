import React from 'react'
function Inputfield(props) {
    let player1Name;
    let player2Name;
    const handlePlayer1 = (name)=>{
        player1Name = name.target.value;
    }
    const handlePlayer2 = (name)=>{
        player2Name = name.target.value;
    }
    const saveValues=()=>{
        if(player1Name && player2Name){
            // console.log(player1Name,player2Name);
            props.handlePlayerNames(player1Name,player2Name,"Game")
        }else{
            alert("Enter Name of Players")
        }
    }
    return (
        <div className="input-field">
            <label>Player 1</label>
            <input type="text" onChange={handlePlayer1} placeholder={props.player1} required></input>
            <label>Player 2</label>
            <input type="text" onChange={handlePlayer2} placeholder={props.player2} required></input>
            <button className="submit-btn" onClick={saveValues}>Submit</button>
        </div>
    )
}

export default Inputfield;