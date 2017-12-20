/**
 * Created by lizhong on 2017/12/19.
 */

import React,{Component,PropTypes} from 'react'

export default class Todo extends Component {
    render(){

        const {comment} = this.props
        return (
            <div>
                <li>
                    <p className="relativeP"><span>{comment.name}</span>说：<span>{comment.content}</span><em className="delateSelf">删除</em></p>
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
