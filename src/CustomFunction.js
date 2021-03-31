import React from 'react'
import './custom.css'

function CustomFunction(props) {
    const [state, setState] = React.useState({
        n:0,
        m:0
    })
    return (
        <div className="custom">
            React Function Create
            <hr />
            {props.numbers.join('-')}
            <br />
            n: {state.n}
            <br />
            <button onClick={() => {
                setState({...state,n:state.n+1})
            }}>+1</button>
            <br />
             m: {state.m}
            <br />
            <button onClick={() => {
                setState({...state,m:state.m+1})
            }}>+1</button>
        </div>
    )
}

export default CustomFunction