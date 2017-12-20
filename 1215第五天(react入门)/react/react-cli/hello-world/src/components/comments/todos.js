/**
 * Created by lizhong on 2017/12/19.
 */
import React,{Component,PropTypes} from 'react'
import Todo from './todo'

export default class Todos extends Component {
    render(){
        const {comments} = this.props;
        //计算提示文本的显示性
        let display = comments.length ===0 ?'block':'none';
        return (
            <div>
                <p style={{display:display}}>占时没有评论!</p>
                <ul>
                    {
                        comments.map((comment,index)=>{
                            return <Todo key={index} comment={comment}/>
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
