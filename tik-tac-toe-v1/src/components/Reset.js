import React from 'react'

export default function Reset(props) {
    return (
        <div>
            <button className="reset-btn" onClick={props.flushAll}>Reset</button>
        </div>
    )
}
