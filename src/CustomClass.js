import React from "react"
import "./custom.css"

class CustomClass extends React.PureComponent {
    myRef = undefined
    constructor(props) {
        super(props)
        this.state = {
            m: 0,
            n: 0,
            x: 0,
            person: {
                name: "frank",
                age: 18
            },
            width: null
        }
        this.myRef = React.createRef()
    }

    /**
     * 语法糖，相当于在 constructor 中定义
     * this.addM = ()=>{this.setState({m:this.state.m+1})}
     * this.addN = ()=>{this.setState({n:this.state.n+1})}
     */
    addM = () => {
        this.setState((state) => ({m: state.m + 1}))
    }
    addN = () => {
        this.setState((state) => ({n: state.n + 1}))
    }
    changeName = () => {
        this.setState((state) => ({person: {...state.person, name: state.person.name === "frank" ? "sgs" : "frank"}}))
    }
    changeAge = () => {
        this.setState((state) => ({person: {...state.person, age: state.person.age + 2}}))
    }

    /**
     * 阻止 Render
     * */
    preventRender = () => {
        this.setState(state => ({
            x: state.x + 1
        }))
        this.setState(state => ({
            x: state.x - 1
        }))
    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return JSON.stringify(nextState) !== JSON.stringify(this.state)
    }*/

    componentDidMount() {
        let {width} = this.myRef.current.getBoundingClientRect()
        width = Math.round(width) + 'px'
        this.setState(state=>({
            width
        }))

        // 此处发送 AJAX 请求最好
        let request = new XMLHttpRequest()
        request.open('post','https://www.baidu.com')
        request.send({
            id: 13757
        })
        request.onreadystatechange = ()=>{
            if (request.readyState===4){
                console.log('发完了---------------')
            }
        }
    }


    render() {
        console.log('render 了 一次')
        return (
            <div className="custom" ref={this.myRef}>
                React Class Create
                <hr/>
                {this.props.numbers.join("-")}
                <br/>
                n: {this.state.n}
                <br/>
                <button onClick={this.addN}>+1</button>
                <br/>
                m: {this.state.m}
                <br/>
                <button onClick={this.addM}>+1</button>
                <br/>
                name: {this.state.person.name}
                <br/>
                age: {this.state.person.age}
                <br/>
                <button onClick={this.changeName}>change name</button>
                <br/>
                <button onClick={this.changeAge}>change age</button>
                <br/>
                x: {this.state.x}
                <br/>
                <button onClick={this.preventRender}>prevent render</button>
                <br/>
                width: {this.state.width}
            </div>
        )
    }

}

export default CustomClass
