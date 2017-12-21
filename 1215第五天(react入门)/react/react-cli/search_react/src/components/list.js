/**
 * Created by lizhong on 2017/12/21.
 */
import React,{Component} from 'react'
import Axios from 'axios';
export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            firstView:true,
            loading:false,
            errorMsg:null,
            getList:[]
        }
    }
    componentWillReceiveProps(nextProps){  //父组件更新,传过来了新的属性
        //更新为请求状态
        this.setState({
            firstView:false,
            loading:true
        })
        const {searchName} = nextProps
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        Axios.get(url)
            .then(res=>{
                const items = res.data.items;
                const getList = items.map((item,index)=>{
                    return {html_url:item.html_url,avatar_url:item.avatar_url,login:item.login};
                })
                this.setState({
                    loading:false,
                    getList
                })
            })
            .catch(err=>{
                this.setState({
                    loading:false,
                    errorMsg:err.message
                })
            })
    }
    render(){
        const {firstView,loading,errorMsg,getList} = this.state;
        if(firstView){
            return <h3>请输入查询条件进行查询!</h3>
        }else if(loading){
            return <h3>Loading...</h3>
        }else if(errorMsg){
            return <h3>查询错误!</h3>
        }else{
            const itemApp = getList.map((item,index)=> (
                <div key={index} style={{float:'left',margin:'20px'}}>
                    <a href={item.html_url}>
                        <img src={item.avatar_url} alt="" style={{width:'100px'}}/>
                    </a>
                    <p>{item.login}</p>
                </div>
            ))
            return(
               <div style={{overflow:'hidden',margin:'50px auto 0',width:'80%'}}>{itemApp}</div>
            )
        }

    }
}
