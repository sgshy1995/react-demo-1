import React from 'react'
import './custom.css'

class CustomClass extends React.Component {
    constructor(){
        super()
        this.state ={
            m: 0,
            n: 0,
            person:{
                name: 'frank',
                age: 18
            }
        }
    }
    
    /**
     * 语法糖，相当于在 constructor 中定义
     * this.addM = ()=>{this.setState({m:this.state.m+1})}
     * this.addN = ()=>{this.setState({n:this.state.n+1})}
     */
    addM = ()=>{this.setState({m:this.state.m+1})}
    addN = ()=>{this.setState({n:this.state.n+1})}
    changeName = ()=>{this.setState({person:{...this.state.person,name:this.state.person.name === 'frank' ? 'sgs' : 'frank'}})}
    changeAge = ()=>{this.setState({person:{...this.state.person,age:this.state.person.age+2}})}

    render(){
        return (
            <div className="custom">
                React Class Create
                <hr />
                {this.props.numbers.join('-')}
                <br />
                n: {this.state.n}
                <br />
                <button onClick={this.addN}>+1</button>
                <br />
                 m: {this.state.m}
                <br />
                <button onClick={this.addM}>+1</button>
                <br />
                name: {this.state.person.name}
                <br />
                age: {this.state.person.age}
                <br />
                <button onClick={this.changeName}>change name</button>
                <br />
                <button onClick={this.changeAge}>change age</button>
            </div>
        )
    }
    
}

export default CustomClass