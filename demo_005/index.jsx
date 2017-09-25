import React,{Component}from 'react'
import {render} from 'react-dom'
class App extends Component{
    render(){
        let str = <h1>Hello World</h1>
        return str
    }
}
render(<App />,document.querySelector('#app'))