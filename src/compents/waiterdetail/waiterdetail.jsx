import React, { Component } from 'react';
import './waiterdetail.less'
import '../index/index.less'
import {connect} from "react-redux";
import Header from '../header/header'
import Consult from '../consult/consult'
import { Toast } from 'antd-mobile';
class Waiterdetail extends Component {
    componentDidMount(){

    }
    render() {
        var data = this.props.location.data
        return (
            <div className="Waiterdetail">
                <Header goBack={true} city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'月嫂详情'}/>
                <div className='waiter-user-info-wrap'>
                    <div className='waiter-user-info'>
                        <div className='waiter-head'>
                            <img src={data.head} />
                        </div>
                        <div className='info'>
                            <p className='waiter-user-name'>{data.name}</p>
                            <p className='waiter-user-price'>{data.price}</p>
                            <p className='waiter-user-address'>{data.age?'':'47岁'} 来自{data.address?'':'山东省'}</p>
                        </div>
                    </div>
                    <div className='introduction'>
                        自我简介：2011年开始从事母婴行业，带过双胎，早产儿，肺炎，低体重新生儿
                    </div>
                </div>
                <div className='certificate'>
                    <ul className='certificate-list'>
                        {
                            this.props.waiter_detail.certificate_list.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={item.img}/>
                                        <p>{item.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='work-img-wrap'>
                    <div className='work-title'>工作照片</div>
                    <div className='work-img'>
                        <ul className='img-list'>
                            {
                                this.props.waiter_detail.work_img.map((item,index)=>{
                                    return (
                                        <li key={index} style={{'marginLeft':`${index===0?'20px':''}`}}>
                                            <img src={item}/>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className='tags-wrap'>
                    <div className='work-title'>印象标签</div>
                    <div className='tags-list'>
                        <ul>
                            {
                                this.props.waiter_detail.tags_list.map((item,index)=>{
                                    return (
                                        <li key={index}><span>{item}</span></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='user-dianping'>
                    <div className='work-title'>客户点评(10)</div>
                    {
                        this.props.index.evaluate_list.map((item,index)=>{
                            return (
                                <div className='evaluate-wrap' key={index}>
                                    <div className='evaluate-content'>
                                        <div className='evaluate-item'>
                                            <div className='evaluate-header'>
                                                <div className='user-header'>
                                                    <img src={item.user_header} />
                                                </div>
                                                <div className='user-info'>
                                                    <div className='user-name'>
                                                        {item.user_name}
                                                    </div>
                                                    <div className='star-num'>
                                                        <div className='star-wrap'>
                                                            <img src="http://cdn.ayi800.com/wx_wap/start.png"/>
                                                            <img src="http://cdn.ayi800.com/wx_wap/start.png"/>
                                                            <img src="http://cdn.ayi800.com/wx_wap/start.png"/>
                                                            <img src="http://cdn.ayi800.com/wx_wap/start.png"/>
                                                            <img src="http://cdn.ayi800.com/wx_wap/start.png"/>
                                                        </div>
                                                        <div className='evaluate_time'>{item.time}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`evaluate-text ${this.props.waiter_detail.show_evaluate_active!==index?'evaluate-hidden':''}`} onClick={()=>this.props.show_evaluate(index)}>
                                                {item.content}
                                            </div>
                                            <div className='evaluate-img'>
                                                {
                                                    item.evaluate_img.map((i,n)=>{
                                                        return <img src={i.img} key={n}/>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <Consult />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch,state) {
    return {
//评价内容显示隐藏
        show_evaluate(index){
            if (!this.waiter_detail.show_evaluate_text){
                dispatch({
                    type: 'SHOW_EVALUATE_D',
                    active : index,
                    show : true
                })
            }else{
                dispatch({
                    type: 'SHOW_EVALUATE_D',
                    active : null,
                    show : false
                })
                if (index === this.waiter_detail.show_evaluate_active){
                    dispatch({
                        type: 'SHOW_EVALUATE_D',
                        active : null,
                        show : false
                    })
                }else{
                    dispatch({
                        type: 'SHOW_EVALUATE_D',
                        active : index,
                        show : true
                    })
                }

            }
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Waiterdetail);
