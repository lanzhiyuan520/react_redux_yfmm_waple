import React, { Component } from 'react';
import './my.less'
import Header from '../header/header'
import {connect} from "react-redux";
import { Toast } from 'antd-mobile';
class My extends Component {
    componentDidMount(){

    }
    render() {
        var store = this.props.my
        return (
            <div className="my">
                <Header city={false} logo={false} bgc={'#ff7782'} nav_text_color={'#fff'} nav_title={'绑定手机号'}/>
                <div className='login-wrap'>
                    <div className="login-content">
                        <div className='input-wrap'>
                            <form action="#">
                                <span className="lable-input">手机号</span>
                                <input type="text" maxLength={11} placeholder='手机号' value={store.phone_value} className="phone" onChange={this.props.changphone}/>
                            </form>
                        </div>
                        <div className='input-wrap'>
                            <form action="#">
                                <span className="lable-input">验证码</span>
                                <input type="text" placeholder='验证码' value={store.verification} className="phone" onChange={this.props.verification}/>
                            </form>
                        </div>
                    </div>
                    <div className='bind-text'>*首次绑定手机号即默认注册</div>
                    <div className='login-btn' onClick={()=>{this.props.submit()}}>提交</div>
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
        changphone(e){
            dispatch({
                type: 'CHANGE_PHONE',
                phone : e.target.value
            })
        },
        verification(e){
            dispatch({
                type: 'CHANGE_VERIFICATION',
                verification : e.target.value
            })
        },
        submit(){
            var phone = this.my.phone_value
            var verification = this.my.verification
            phone = phone.replace(/(^\s*)|(\s*$)/g, "");
            var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            if (phone === ''){
                Toast.info('手机号不能为空', 1);
                return false
            }
            if (!phoneReg.test(phone)){
                Toast.info('手机号格式错误', 1);
            }else{
                if (verification === ''){
                    Toast.info('请输入验证码', 1);
                    return false
                }else{
                    Toast.loading('登录中...', 1, () => {
                        setTimeout(()=>{Toast.info('登录成功', 1);},0)
                        dispatch({
                            type: 'CLEAN_VALUE'
                        })
                    });
                }
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(My);
