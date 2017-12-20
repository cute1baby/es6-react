/**
 * Created by lizhong on 2017/12/19.
 */
import React,{Component} from 'react'
import Todo from './todo'

export default class Todos extends Component {
    render(){
        const {comments} = this.props;
        //计算提示文本的显示性
        let display = comments.length ===0 ?'block':'none';
        return (
            <div>
                <p style={{display:display}}>暂时没有用户评论!</p>
                <ul>
                    {
                        comments.map((comment,index)=>{
                            return <Todo key={index} comment={comment} doleteTodo={this.props.doleteTodo}/>
                        })
                    }
                </ul>
            </div>

        )
    }
}
/*
Todos.propTypes = {
    comments:PropTypes.array.isRequired
}*/
