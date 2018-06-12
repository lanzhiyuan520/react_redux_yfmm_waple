import React, { Component } from 'react';
import {connect} from "react-redux";
import './youfu.less'
import Header from '../header/header'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

class Youfu extends Component {
    constructor(props){
        super(props)
        this.state= {
           tabs : [
                { title: '孕晚期秘籍' ,id:0},
                { title: '分娩不痛苦' ,id:1},
                { title: '好好坐月子' ,id:2},
                { title: '新生儿护理' ,id:3},
                { title: '早教大课堂' ,id:4},
                { title: '辅食跟我学' ,id:5},
                { title: '福滋味视频' ,id:6},
            ]
        }
    }
    componentDidMount(){

    }
    changeTab=(e)=>{

    }
    _renderItem=(tab,activeTab)=>{
        var {article_list} = this.props.youfu
        return (
            <div style={{backgroundColor: '#fff'}}>
                <div className='whiteSpace'></div>
                <div className='article'>
                    <ul className='article-list'>
                        {
                            article_list.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className='article-img'>
                                            <img src={item.article_img}/>
                                        </div>
                                        <div className='article-content'>
                                            <div className='article-title'>
                                                {item.article_title}
                                            </div>
                                            <div className='article-info'>
                                                <div className='article-time'>{item.article_time}</div>
                                                <div className='article-read'>阅读量：{item.article_read}</div>
                                            </div>
                                        </div>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    render() {
        var store = this.props.youfu
        var {article_list} = this.props.youfu
        return (
            <div className="Youfu">
                <Header city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'有福说'}/>
                <Tabs
                    tabBarPosition='top'
                    tabBarTextStyle={{'padding':'25px','fontSize':'15px'}}
                    animated={true}
                    tabs={this.state.tabs}
                    onChange={(e)=>{this.changeTab(e)}}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}/>}
                >
                    {
                       this._renderItem
                    }
                </Tabs>
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
export default connect(mapStateToProps,mapDispatchToProps)(Youfu);
