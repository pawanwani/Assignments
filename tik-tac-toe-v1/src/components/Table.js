import React from 'react'

export default function Table(props) {
    return (
        <div >
            
             <table >
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Value</th>
                            <th>Position</th>
                       </tr>
                    </thead>
                    <tbody>
                    {props.data.map((value)=>{
                        return(
                            <tr>
                                <td>{value.index}</td>
                                <td>{value.player}</td>
                                <td>{value.cellNo}</td>
                            </tr>
                        )     
                    })}
                    </tbody>
            </table>
        </div>
    )
}
