import React, { Component } from 'react';
import './consult.less'
import {connect} from "react-redux";
import { Toast , DatePicker ,List} from 'antd-mobile';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(time){
    return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
}
var time = now
class Consult extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: now,
        }
    }
    componentDidMount(){

    }
    render() {
        var store = this.props.consult
        return (
            <div className='consult-wrap'>
                <div className="consult">
                    <div className='consult-content'>
                        <img src="http://cdn.ayi800.com/waple_footer/msg_GIF.gif"/>
                        <span>咨询客服</span>
                    </div>
                    <div className='order' onClick={()=>this.props.show_model()}>
                        预约面试
                    </div>
                </div>
                <div className='order-model' style={{'transform':`translateY(${store.offset}%)`}}>
                    <div className='close' onClick={()=>this.props.close_model()}>
                        <img src="http://cdn.ayi800.com/image/png/wx_waple_order_close%E5%85%B3%E9%97%AD@2x.png"/>
                    </div>
                    <div className='order-type'>预约类型：月嫂服务</div>
                    <div className='_input-wrap'>
                        <div className='input-content'>
                            <div className='input-icon'>
                                <img src="http://cdn.ayi800.com/image/png/wx_waple_order_icon1%E6%97%B6%E9%97%B4@2x.png"/>
                            </div>
                            <div className='input-frame'>
                                <DatePicker
                                     mode="date"
                                     title="Select Date"
                                     extra='请选择预约时间'
                                     value={this.state.date}
                                     onChange={date => {
                                         this.setState({ date })
                                         time = date
                                     }}
                                >
                                    <List.Item></List.Item>
                                </DatePicker>
                            </div>
                        </div>
                        <div className='input-content'>
                            <div className='input-icon'>
                                <img src="http://cdn.ayi800.com/image/png/wx_waple_order_icon2%E4%B8%AA%E4%BA%BA@2x.png"/>
                            </div>
                            <div className='input-frame'>
                                <input type="text" value={store.name} name='name' placeholder='输入姓名' onChange={text=>this.props.changename(text)}/>
                            </div>
                        </div>
                        <div className='input-content'>
                            <div className='input-icon'>
                                <img src="http://cdn.ayi800.com/image/png/wx_waple_order_icon3%E6%89%8B%E6%9C%BA@2x.png"/>
                            </div>
                            <div className='input-frame'>
                                <input type="text"  maxLength={11} value={store.phone_order} name='phone' placeholder='输入手机号' onChange={text=>this.props.changephone(text)}/>
                            </div>
                        </div>
                        <div className='submit' onClick={()=>this.props.submit_order()}>
                            提交
                        </div>
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
        changename(text){
            dispatch({
                type : 'CHANGE_USER_NAME',
                name : text.target.value
            })
        },
        changephone(text){
            dispatch({
                type:'CHANGE_PHONE',
                phone_order : text.target.value
            })
        },
        show_model(){
            dispatch({
                type:'SHOW_MEDEL',
                offset:0
            })
        },
        close_model(){
            dispatch({
                type:'HIDE_MODEL',
                offset : 100
            })
        },
        submit_order(){
            var date = formatDate(time)
            var phone_order = this.consult.phone_order.replace(/(^\s*)|(\s*$)/g, "");
            var name = this.consult.name.replace(/(^\s*)|(\s*$)/g, "");
            var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            if (!name){
                Toast.info('名字不能为空', 1);
                return
            }
            if (phone_order === ''){
                Toast.info('手机号不能为空', 1);
                return
            }else{
                if (!phoneReg.test(phone_order)){
                    Toast.info('手机号格式错误', 1);
                    return
                }else{
                    Toast.loading('预约中...', 2, () => {
                        setTimeout(()=>Toast.info('预约成功', 1))
                        dispatch({
                            type:'CLEAN_VAL'
                        })
                    });
                }
            }

        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Consult);
