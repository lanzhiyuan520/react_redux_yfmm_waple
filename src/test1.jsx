import React, { Component } from 'react';

class Test1 extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="Test1">
                test1
            </div>
        );
    }
}

export default Test1;
