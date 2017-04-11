/*
 * @Author: wj77998
 * @Date:   2017-03-01 15:26:44
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-04-11 14:21:38
 */
'use strict';
import React, { PropTypes } from 'react'

const Test = React.createClass({
    render() {
        const { value } = this.props;
        return ( 
          <div>
              { value }
          </div>
        );
    }
});


export default Test;
