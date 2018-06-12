import React, { Component } from 'react';
import {connect} from "react-redux";
import './waiterService.less'
import Header from '../header/header'
import Service from '../serviceBaozhang/serviceBaozhang'
import { Carousel } from 'antd-mobile';

class WaiterService extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }

    render() {
        var store = this.props.waiterService
        return (
            <div className="waiter-service">
                <Header goBack={true} city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'月嫂服务'}/>
                <div className='waiter-service-banner'>
                    <img src="http://cdn.ayi800.com/image/png/xiaochengxu_waiter_service_banner2waiter_server.png"/>
                </div>
                <div className='service-explain'>
                    <div className='service-explain-title'>服务说明</div>
                    <div className='service-price'>
                        <span>服务价格：</span>
                        <span>9800元－18800元</span>
                    </div>
                    <div className='service-time'>
                        <span>服务时间：</span>
                        <span>26天(自上门服务日起)</span>
                    </div>
                </div>
                <div className='service-flow'>
                    <div className='service-flow-title'>
                        服务流程
                    </div>
                    <div className='service-flow-list'>
                        <ul className='list'>
                            {
                                store.service_flow.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <div className='list-item'>
                                                <img src={item.img}/>
                                                <p>{item.text}</p>
                                            </div>
                                            <div className={`list-arrow ${index===store.service_flow.length-1?'arrow-hide':''}`} >
                                                <img src="http://cdn.ayi800.com/image/png/wx_waple_service_arrow1%E6%9C%88%E5%AB%82%E6%9C%8D%E5%8A%A1_03.png"/>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='everyday-work'>
                    <div className='service-flow-title'>
                        每日工作
                    </div>
                    <div style={{'overflow':'hidden'}}>
                        <Carousel
                            className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={10}
                            slideWidth={0.7}
                            autoplay={false}
                            infinite
                            dots={false}
                        >
                            {
                                store.work_list.map((item,index)=>{
                                    return (
                                        <div className='work-item' key={index}>
                                            <div className='work-time'>
                                                <img src="http://cdn.ayi800.com/image/png/wx_waple_service_time_icon%E6%97%B6%E9%97%B4-2@2x.png"/>
                                                <span>{item.time}</span>
                                            </div>
                                            <div className='work-content'>
                                                {
                                                    item.content.map((item,index)=>{
                                                        return (
                                                            <div key={index}>
                                                                <p>{item.text1}</p>
                                                                <p>{item.text2}</p>
                                                                <p>{item.text3}</p>
                                                                <p>{item.text4}</p>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className='server-baozhang-wrap'>
                    <Service title={true}/>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return state
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WaiterService);
