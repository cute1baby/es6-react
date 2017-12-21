import React, { Component } from 'react';
import Search from './components/search';
import List from './components/list';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            searchName:''
        }
        this.searchNameWay = this.searchNameWay.bind(this);
    }
    searchNameWay(name){
        this.setState({
            searchName:name
        })
    }
      render() {
        return (
          <div className="App">
              <h3>这是一个搜索github用户姓名搜索人物的项目!</h3>
              <Search searchNameWay={this.searchNameWay}/>
              <hr/>
              <List searchName={this.state.searchName}/>
          </div>
        );
      }
}

export default App;
