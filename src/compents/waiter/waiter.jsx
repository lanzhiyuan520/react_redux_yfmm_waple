import React, { Component } from 'react';
import './waiter.less'
import Header from '../header/header'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class Waiter extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){

    }
    waiter_detail(item){
        var {history} = this.context.router
        console.log(item)
        history.push({pathname:'/waiterdetail',data:item})
    }
    render() {
        var store = this.props.waiter
        return (
            <div className="waiter">
                <Header city={true} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'}/>
                <div className='waiter-list-wrap'>
                    <ul className='list'>
                        {
                            store.waiter_list.map((item,index)=>{
                                return (
                                    <li key={index} onClick={()=>this.waiter_detail(item)}>
                                        <div className='waiter-item'>
                                            <img src={item.head} className='waiter-header'/>
                                            <p className='waiter-name'>{item.name}</p>
                                            <div className='waiter-userinfo'>
                                                <span>{item.age}岁</span>
                                                <span>{item.address}</span>
                                                <span>{item.good}好评</span>
                                            </div>
                                            <div className='tags'>
                                                {
                                                    item.tags.map((item,index)=>{
                                                        return (
                                                            <div className='tag-item' key={index}>
                                                                <span>{item}</span>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Waiter);
