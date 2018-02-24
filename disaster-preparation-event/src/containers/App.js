import { Component } from 'react'

export default class App extends Component{
    constructor(props){
        super();
    }

    render(){
        return (
            this.props.children
        );
    }
}

