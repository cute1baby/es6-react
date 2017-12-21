/**
 * Created by lizhong on 2017/12/19.
 */

import React,{Component} from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }
/*    static propTypes = {
        comment: PropTypes.object.isRequired,
        remove: PropTypes.func,
        index: PropTypes.number.isRequired
    }*/
    removeItem(){
        const {comment,remove,index} = this.props
        if(window.confirm(`确定要删除${comment.name}的评论吗?`)){
            remove(index)
        }
    }
    render(){
        const {comment} = this.props
        return (
            <div>
                <li>
                    <p className="relativeP"><span>{comment.name}</span>说：<span>{comment.content}</span><em className="delateSelf" onClick={this.removeItem}>删除</em></p>
                    <hr/>
                </li>
            </div>
        )
    }
}
/*
Todo.propTypes = {
    comment:PropTypes.object.isRequired
}*/
