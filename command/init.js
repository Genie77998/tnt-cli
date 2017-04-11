/*
 * @Author: wj77998
 * @Date:   2017-02-28 14:56:49
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-03-10 18:09:32
 */

'use strict';
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const build = require('../command/build')
const _creat = function(){
	co(function*() {
        let projectName = yield prompt('组件名称: ')  
        let issass = yield prompt.confirm('css预处理器使用sass(Yes)/less(No)? ')
        if(/^[a-zA-Z][a-zA-Z0-9-]*$/.test(projectName)){
        	build(projectName,issass).then(re => {
        		console.log(chalk.green('\n √ 项目已经初始化!'))
        		console.log(`\n cd ${projectName} && cnpm install \n`)
            	process.exit()
        	}).catch(err => {
                console.error(err)
        		process.exit()
        	});
        }else{
        	console.error(chalk.yellow('\n × 请输入以字母开头的项目名称'));
        	_creat();
        }
    })
}

module.exports = () => {
    _creat();
}
