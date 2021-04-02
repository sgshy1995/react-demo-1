import React, {useState, useEffect} from "react"
import "./custom.css"

function CustomFunction(props) {
    const [state, setState] = useState({
        n: 0,
        m: 0
    })

    /**
     * 自定义 hook
     * 第一次渲染不更新
     * */
    const useUpdate = (fn, dependency) => {
        const [count, setCount] = useState(0)
        useEffect(() => {
            setCount(count => count + 1)
        }, [...dependency])
        useEffect(() => {
            if (count > 1) {
                fn()
            }
        }, [count,fn])
    }
    useUpdate(() => {
        console.log("m变化了------------", state.m)
    }, [state.m])

    return (
        <div className="custom">
            React Function Create
            <hr/>
            {props.numbers.join("-")}
            <br/>
            n: {state.n}
            <br/>
            <button onClick={() => {
                setState({...state, n: state.n + 1})
            }}>+1
            </button>
            <br/>
            m: {state.m}
            <br/>
            <button onClick={() => {
                setState({...state, m: state.m + 1})
            }}>+1
            </button>
        </div>
    )
}

export default CustomFunction
