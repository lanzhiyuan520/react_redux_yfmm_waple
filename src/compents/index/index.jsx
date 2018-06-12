import React, { Component } from 'react';
import './index.less'
import { connect } from 'react-redux'
import Header from '../header/header'
import WaiterRecommend from '../waiterRecommend/waiterRecommend'
import PropTypes from 'prop-types'
class Index extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    //首页服务列表跳转
    goService=index=>{
        var {history} = this.context.router
        if (index === 0){
            history.push('/waiterservice')
        }
    }
    render() {
        var store = this.props.index
        return (
            <div className="index-wrap">
                <Header city={true} logo={true} bgc={'#fff'} nav_text_color={'#000'}/>
                <div className="index-banner">
                    <img src="http://cdn.ayi800.com/image/png/wx_waple_index_bannerbanner@2x.png" />
                </div>
                <div className='service-list'>
                    <ul className='list'>
                        {
                            store.service_list.map((item,index)=>{
                                return (
                                    <li key={index} onClick={()=>{this.goService(index)}}>
                                        <img src={item.img}/>
                                        <p>{item.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='leval'></div>
                <div className='waiter-recommend'>
                    <div className='title-content'>
                        <div className='waiter-recommend-text'>月嫂推荐</div>
                        <div className='waiter-more' onClick={()=>{this.props.more()}}>
                            <span className='waiter-more-text'>更多</span>
                            <span className='arrow-right'></span>
                        </div>
                    </div>
                    <WaiterRecommend waiter_recommend_list={store.waiter_recommend_list}/>
                </div>
                <div className='leval'></div>
                <div className='user_evaluate'>
                    <div className="evaluate-title">
                        用户点评
                    </div>
                    {
                        store.evaluate_list.map((item,index)=>{
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
                                            <div className={`evaluate-text ${store.show_evaluate_active!==index?'evaluate-hidden':''}`} onClick={()=>this.props.show_evaluate(index)}>
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
                                        <div className='leval'></div>
                                        <div className='waiter-info'>
                                            <img src={item.waiter_header} className='waiter-header'/>
                                            <span className='waiter-name'>{item.waiter_name}</span>
                                            <span className='waiter-price'>{item.waiter_price}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }



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
        //评价内容显示隐藏
        show_evaluate(index){
            if (!this.index.show_evaluate_text){
                dispatch({
                    type: 'SHOW_EVALUATE',
                    active : index,
                    show : true
                })
            }else{
                dispatch({
                    type: 'SHOW_EVALUATE',
                    active : null,
                    show : false
                })
                if (index === this.index.show_evaluate_active){
                    dispatch({
                        type: 'SHOW_EVALUATE',
                        active : null,
                        show : false
                    })
                }else{
                    dispatch({
                        type: 'SHOW_EVALUATE',
                        active : index,
                        show : true
                    })
                }

            }
        },
        more(){
            dispatch({
                type:'MORE_WAITER',
                selectedTab : '找月嫂'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);
