import React, {Component} from 'react'

export default class App extends Component {
    //初始化状态
    state = {
        count : 0
    }

    increment = ()=>{
        const num = this.select.value*1 //转移为字符串
        const count = this.state.count + num
        this.setState ({count})
    }
    decrement = ()=>{
        const num = this.select.value*1 //转移为字符串
        const count = this.state.count - num
        this.setState ({count})
    }
    incrementOdd = ()=>{
        const num = this.select.value*1 //转移为字符串
        const count = this.state.count
        if(count%2 ===1){
            this.setState ({count:count+num})
        }
    }
    incrementAsync = ()=>{
        const num = this.select.value*1 //转移为字符串
        const count = this.state.count
        setTimeout(()=>{
            this.setState ({count:count+num})
        },1000)

    }

    render() {
    const {count} = this.state //获取状态
    return (
      <div>
        <p>click {count} times</p>
        <div>
            <select ref={select =>this.select = select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementOdd}>increment of odd</button>&nbsp;
            <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}

