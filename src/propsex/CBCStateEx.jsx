import React, { Component } from 'react'

 class CBCStateEx extends Component {
    constructor(){
        super();
        this.state = {
            users:["prabhas","606","sathwik","manoj","yash"],
            num:100
        };
    }
    changeNumber=()=>{
        this.setState({num:200})
    }
    render(){
        console.log(this);
        return (
            <div>
                {
                    this.state.users.map((users,i)=>{
                        return <li key={i}>{users}</li>
                    })
                }
                <h1>{this.state.num}</h1>
                <button onClick={this.changeNumber}>Change number</button>
            </div>
        )

    }
 }

 export default CBCStateEx