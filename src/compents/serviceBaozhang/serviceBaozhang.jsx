import React, { Component } from 'react';
import './serviceBaozhang.less'
import {connect} from "react-redux";
class ServiceBaozhang extends Component {
    componentDidMount(){

    }
    render() {
        var store = this.props.ServiceBaozhang
        return (
            <div className="service-baozhang">
               <div className={`service-title ${this.props.title?'':'hide_title'}`}>服务保障</div>
                <div className='service-list'>
                    <ul className='list-item'>
                        {
                            store.service_baozhang_item.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <div className='service-img'>
                                            <img className='service-image' src={item.img}/>
                                        </div>
                                        <div className='service-content'>
                                            <div className='service-content-title'>{item.title}</div>
                                            <div className='service-item-content'>{item.content}</div>
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
    console.log(state)
    return state
}
function mapDispatchToProps(dispatch,state) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ServiceBaozhang);
