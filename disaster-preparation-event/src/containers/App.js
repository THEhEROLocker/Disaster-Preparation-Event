import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`
    min-height: 100%;
    min-width: 100%;
`

export default class App extends Component{
    constructor(props){
        super();
    }

    render(){
        return (
            <Body>
                {this.props.children}
            </Body>
        );
    }
}

