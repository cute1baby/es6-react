import React, { Component } from 'react';  //{ Component }写法省略了React.Component中的React
import AddList from '../comments/addList'
import Todos from '../comments/todos'
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.doleteTodo= this.doleteTodo.bind(this)
        this.addComments= this.addComments.bind(this)
        this.state ={
            comments:[]
        }
    }
    doleteTodo(index){
        //疑问:这里的index为什么能生效
        const comments = this.state.comments;
        comments.splice(index,1)
        this.setState({comments})
    }
    addComments(comment){
        const comments = this.state.comments;
        comments.push(comment)
        this.setState({comments})
    }
    componentDidMount(){
        //模拟请求获取数据
        const comments =[
            {name:'lizhong',content:'我喜欢读书和学习'},
            {name:'锅包肉',content:'这就是爱'},
            {name:'楼顶',content:'站在高空的感觉美爆了'}
        ]
        setTimeout(()=>{
            //更新状态
            this.setState({comments});
        },1000)

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React.todoList</h1>
        </header>
        <div className="App-intro">
            <div className="left">
                <AddList addComments={this.addComments}/>
            </div>
            <div className="right">
                <Todos comments={this.state.comments} doleteTodo={this.doleteTodo}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
