import React, { Component,Fragment } from 'react';
import './style.css'
import XiaojiejieItem from './xiaojiejieitem'
import Axios from 'axios';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
        
    }
    
    componentDidMount(){
        Axios.get('https://easy-mock.com/mock/5ea7f2ae345da32ea0fae5bd/xiaojiejie')
        .then((res)=>{
            console.log('axios获取数据成功'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{console.log('axios数据获取失败'+error)})
    }
  

    render() {    
        console.log('render')
    return ( 
            <Fragment>
            <div className='main-item'>
                <label htmlFor='dd'>增加服务：</label>
                <input 
                    id='dd' 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    ref={(input)=>{this.input=input}}/>
                <button onClick={this.addList.bind(this)}>增加服务</button>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                    timeout={2000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    key={index+item}
                                    appear={true}
                                >
                                        <XiaojiejieItem 
                                        key={index+item}
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)} 
                                        />
                                </CSSTransition>
                            
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
            
            </div>
            </Fragment>
         );
    }
    inputChange(e){
        this.setState({
                inputValue:this.input.value
        })
    } 
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{ console.log(this.ul.querySelectorAll('li').length)})
       
    }
    deleteItem(index){
        let list=this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
            
        })
    }
       
}
 
export default Xiaojiejie
