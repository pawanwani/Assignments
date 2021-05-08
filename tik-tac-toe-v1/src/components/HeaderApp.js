import React from 'react';

function HeaderApp (props){
    let styleHead = {
        backgroundColor : "#4287f5",
        margin: "0px",
        height: "80px",
        color: "white",
        padding: "25px 0px 0px 25px",
    }
    if(props.Theme ==='Dark'){
        styleHead.backgroundColor = "black";
    }
    return(
        <h1 style={styleHead}>{props.siteTitle}</h1>
    )
}

export default HeaderApp; 