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