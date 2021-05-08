import React from 'react'
export default function Sqaure(props) {
    let style={}
    if(props.winnerCell){
        for (let index of props.winnerCell){
            if(props.id === index){
                style.backgroundColor = "Yellow" 
    }}}
    return (
            <button className="cell" style={style} onClick={()=>props.oncellclick(props.id)}>{props.value}</button>
    );
}
