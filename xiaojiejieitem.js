import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.starname}-{this.props.content}
            </li>
         );
    }
}
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    starname:PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps={
    starname:'深田咏美'
}

 
export default XiaojiejieItem;