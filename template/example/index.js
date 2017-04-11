/*
* @Author: wj77998
* @Date:   2017-03-02 19:09:56
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-10 17:58:30
*/
     
import React from 'react'

import { render } from 'react-dom';

import Test from '../src/index'

import "../assets/index"

render(
  <Test 
    value={3.5}
  />
, document.getElementById('app'));
