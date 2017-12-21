/**
 * Created by lizhong on 2017/12/19.
 */
import React,{Component} from 'react'


export default class AddList extends Component {
    constructor(props){
        super(props)
<<<<<<< HEAD
        this.addItem = this.addItem.bind(this)
    }
    addItem(){
        const {add} = this.props
        const name = this.refs.name.value,
            content = this.refs.content.value,
        itme = {
            name,content
        }
        if(!name || !content){
            alert(`请完善资料再提交`);
            return
        }
        add(itme)
=======
        this.addListInfo = this.addListInfo.bind(this)
    }
    addListInfo(){
        const name = this.refs.userName.value.trim(),
            content = this.refs.userContent.value.trim(),
            todo = {name:name,content:content},
            {addComments} = this.props;
        if(!name || !content){
            alert('请补充完资料再提交');
            return
        }
        addComments(todo);
        this.refs.userName.value = this.refs.userContent.value =""
>>>>>>> origin/master
    }
    render(){

        return (
            <div>
                <label htmlFor="userName">用户名:
<<<<<<< HEAD
                    <input type="text" className="userName" placeholder="请输入用户名" ref="name"/>
                </label><br/><br/>
                <label htmlFor="userContent">请输入内容:
                    <textarea type="text" className="userContent" placeholder="请输入用户名" ref="content"></textarea>
                </label><br/><br/>
                <input type="button" value='提交' onClick={this.addItem}/>
=======
                    <input type="text" className="userName" placeholder="请输入用户名" ref='userName'/>
                </label><br/><br/>
                <label htmlFor="userContent">请输入内容:
                    <textarea type="text" className="userContent" placeholder="请输入用户名" ref='userContent'></textarea>
                </label><br/><br/>
                <input type="button" value='提交' onClick={this.addListInfo}/>
>>>>>>> origin/master
            </div>
        )
    }
}
/*AddList.propTypes = {
    add: PropTypes.func
}*/

