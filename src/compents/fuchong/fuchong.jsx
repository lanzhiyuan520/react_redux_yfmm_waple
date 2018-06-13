import React, { Component } from 'react';
import './fuchong.less'
import {connect} from "react-redux";
import Header from '../header/header'
import { Toast } from 'antd-mobile';
class Fuchong extends Component {
    componentDidMount(){

    }
    render() {
        var store = this.props.Fuchong
        return (
            <div className="Service">
                <Header goBack={true} city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'福宠套餐'}/>
                <div className='fuchong-banner'>
                    <img src="http://cdn.ayi800.com/image/png/xiaochengxu_fuchong_bannerfuchong.png"/>
                </div>
                <div className='five-project'>
                    <div className='five-project-title'>五大服务项目</div>
                    <div className='five-project-list'>
                        <ul className='project-list'>
                            {
                                store.five_project.map((item,index)=>{
                                    return (
                                        <li key={index} className={`project-item ${index===0?'five-first-item':''}`}>
                                            <div className='project-item-img'>
                                                <img src={item.img}/>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(Fuchong);
