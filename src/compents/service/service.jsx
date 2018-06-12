import React, { Component } from 'react';
import './service.less'
import {connect} from "react-redux";
import Header from '../header/header'
import ServiceBaozhang from '../serviceBaozhang/serviceBaozhang'
import { Toast } from 'antd-mobile';
class Service extends Component {
    componentDidMount(){

    }
    render() {
        var store = this.props.my
        return (
            <div className="Service">
                <Header goBack={true} city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'服务保障'}/>
                <div className='service-banner'>
                    <img src="http://cdn.ayi800.com/image/png/xiaochengxu_service_banner2services.png"/>
                </div>
                <div className='services-list'>
                    <ServiceBaozhang title={false}/>
                </div>
                <div className='services-btn'>
                    <div className='btn phone-btn'>
                        <a href="tel:010-123456">客服电话</a>
                    </div>
                    <div className='btn'>
                        <a href="javascript:;">意见反馈</a>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch,state) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Service);
