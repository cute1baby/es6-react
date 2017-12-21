/**
 * Created by lizhong on 2017/12/19.
 */
import React,{Component} from 'react'
import Todo from './todo'

export default class Todos extends Component {
/*    static propTypes = {
        remove: PropTypes.func,
        comments: PropTypes.object.isRequired
    }*/
    render(){
        const {comments,remove} = this.props;
        //计算提示文本的显示性
        let display = comments.length ===0 ?'block':'none';
        const items = comments.map((comment,index)=>{
            const paramssign = {
                key:index,
                comment,
                remove,
                index
            }
            return <Todo {...paramssign}/>
        })
        return (
            <div>
                <p style={{display:display}}>占时没有评论!</p>
                <ul>
                    {items}
                </ul>
            </div>

        )
    }
}
/*
Todos.propTypes = {
    comments:PropTypes.array.isRequired
}*/
