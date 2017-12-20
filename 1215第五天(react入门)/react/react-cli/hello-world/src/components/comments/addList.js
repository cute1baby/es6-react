/**
 * Created by lizhong on 2017/12/19.
 */
import React,{Component} from 'react'


export default class AddList extends Component {
    render(){
        return (
            <div>
                <label htmlFor="userName">用户名:
                    <input type="text" className="userName" placeholder="请输入用户名"/>
                </label><br/><br/>
                <label htmlFor="userContent">请输入内容:
                    <textarea type="text" className="userContent" placeholder="请输入用户名"></textarea>
                </label><br/><br/>
                <input type="button" value='提交'/>
            </div>
        )
    }
}
