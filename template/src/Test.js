/*
 * @Author: wj77998
 * @Date:   2017-03-01 15:26:44
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-04-11 14:32:19
 */
'use strict';
import React, { Component } from 'react'
export default class Test extends Component {
    render() {
        const { value } = this.props;
        return ( 
          <div>
              { value }
          </div>
        );
    }
}
