import React, { Component } from 'react';
import './header.less'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile';
import PropTypes from 'prop-types'
class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){

    }
    //返回
    goback=()=>{
        this.context.router.history.goBack()
    }
    render() {
        var store = this.props.index
        return (
            <div className="head-wrap" style={{"backgroundColor":`${this.props.bgc}`}}>
                <div className="header-content">
                    {
                        this.props.city?(
                            <div className='city-name' onClick={this.props.show_city}>
                                <span className='city-text' style={{'color':`${this.props.nav_text_color}`}}>{store.city_name}</span>
                                <span className='arrow-bottom' style={{'color':`${this.props.nav_text_color}`}}></span>
                            </div>
                        ):''
                    }
                    {
                        this.props.goBack?(
                            <div className='arrow-wrap'>
                                <span className='arrow-left' onClick={()=>{this.goback()}}></span>
                            </div>
                        ):''
                    }
                    {
                        this.props.logo?
                             (
                                 <div className='logo'>
                                     <img src="http://cdn.ayi800.com/wap_v2_banner/new_logo.png"/>
                                 </div>
                        ):(
                                <div className='nav-title'>
                                    {this.props.nav_title}
                                </div>
                            )
                    }

                </div>
                <div className={`city-list ${!store.show_city_list?'show_of_hide_city_list':'show_city_list'}`} >
                    <ul className='list'>
                        {
                            this.props.index.city_list.map((item,index)=>{
                                return <li key={index} className={store.city_active_bgc===index?'active-bgc':''} onClick={()=>this.props.change_city(item,index)}>{item.city_name}</li>
                            })
                        }
                    </ul>
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
        //城市下拉显示隐藏
        show_city () {
            dispatch({
                type: 'CHANGE_NAME'
            })
        },
        //更改城市
        change_city(item,index){
            dispatch({
                type: 'CHANGE_CITY',
                city_name : item.city_name,
                active_bgc : index
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);