import React, { Component } from 'react';
import '../index/index.less'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class WaiterRecommend extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){

    }
    waiter_detail(item){
        var {history} = this.context.router
        history.push({pathname:'/waiterdetail',data:item})
    }
    render() {
        var store = this.props.index
        return (
                <div className='waiter-list'>
                    <ul className="list">
                        {
                            this.props.waiter_recommend_list.map((item,index)=>{
                                return (
                                    <li key={index} className={index===store.waiter_recommend_list.length-1?'waiter-last':''} onClick={()=>this.waiter_detail(item)}>
                                        <img src={item.head}/>
                                        <p className='waiter-name'>{item.name}</p>
                                        <div className='pink-leval'></div>
                                        <p className='waiter-price'>{item.price}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        //城市下拉显示隐藏
        show_city () {
            dispatch({
                type: 'CHANGE_NAME'
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WaiterRecommend);