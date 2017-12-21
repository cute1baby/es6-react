/**
 * Created by lizhong on 2017/12/21.
 */
import React,{Component} from 'react'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.searchApp = this.searchApp.bind(this);
    }
    searchApp(){
        const {searchNameWay} = this.props,
            searchName = this.refs.searchName.value.trim();
        if(!searchName){
            alert('请输入搜索条件之后在查询!');
            return;
        }
        searchNameWay(searchName);
    }

    render() {
        return (
            <div>
                <input type="text" ref="searchName"/>
                <button onClick={this.searchApp}>查询账号</button>
            </div>
        )
    }
}