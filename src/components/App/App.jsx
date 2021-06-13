import React from 'react';
import './App.css';
import ResultContainer from '../Results/Results';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

const name = require("@rstacruz/startup-name-generator")

class App extends React.Component{
    state = {
        headTitle: "Name !T",
        headExpand: true,
        suggested: []
    } 

    handleInputChange = (inputText) =>{
        this.setState({
            headExpand: !inputText,
            suggested: inputText?name(inputText):[],
        });
    }
    render(){
        return(
            <div>
                <Header headExpand={this.state.headExpand} headName = {this.state.headTitle} />
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultContainer suggestedNames = {this.state.suggested} />
            </div>
        )
    }
}



export default App;