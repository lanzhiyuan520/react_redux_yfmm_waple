import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Index from './compents/index/index'
import Waiter from './compents/waiter/waiter'
import My from './compents/my/my'
import Youfu from './compents/youfu/youfu'
import {connect} from "react-redux";
class App extends Component {
  constructor(props){
    super(props)
      this.state = {
          selectedTab: '首页',
          hidden: false,
          fullScreen: false,
          tab_list : [
              {   title:'首页',
                  key:'首页',
                  icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
                  selectedIcon:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
                  text:'首页'
              },
              {   title:'找月嫂',
                  key:'找月嫂',
                  icon:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
                  selectedIcon:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
                  text:'找月嫂'
              },
              {   title:'有福说',
                  key:'有福说',
                  icon:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
                  selectedIcon:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
                  text:'有福说'
              },
              {   title:'我的',
                  key:'我的',
                  icon:'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
                  selectedIcon:'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
                  text:'我的'
              }
          ]
      };
  }
    click=()=>{
      this.props.history.push('/test/1')
    }
    renderContent(pageText) {
        if (pageText === '首页'){
            return (
                <Index />
            );
        }else if (pageText === '找月嫂'){
            return (
                <Waiter />
            );
        }else if (pageText === '有福说'){
            return (
                <Youfu />
            );
        }else if (pageText === '我的'){
            return (
                <My />
            );
        }

    }
  render() {
      var store = this.props.app
    return (
        <div style={{ position: 'fixed', height: '100%' ,width: '100%', bottom: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                {
                    this.state.tab_list.map((item,index)=>{
                        return (
                            <TabBar.Item
                                title={item.title}
                                key={item.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    marginBottom: '5px',
                                    background: `url(${item.icon}) center center /  21px 21px no-repeat` }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    marginBottom: '5px',
                                    background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat` }}
                                />
                                }
                                selected={store.selectedTab === item.title}
                                onPress={() => {
                                    this.props.changeTab(item.title)
                                }}
                            >
                                {this.renderContent(item.text)}
                            </TabBar.Item>
                        )
                    })
                }
            </TabBar>
        </div>
    );
  }
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        changeTab(selectedTab){
            dispatch({
                type: 'CHANGE_TAB',
                selectedTab : selectedTab
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
