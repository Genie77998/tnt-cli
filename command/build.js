/*
* @Author: wj77998
* @Date:   2017-02-28 15:13:59
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-03-10 18:04:26
*/

'use strict';
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const exec = require('child_process').exec
const cwd = process.cwd()
const gitignoreTxt = "/node_modules\n/lib\n/*.log/accest/*.css\n/*.npmignore\n/assets/*.css"
const build = function(projectName,issass){
	let _temp = path.join(__dirname,'..','template')
	let _now = path.join(cwd,projectName)
	return new Promise((r, w) => {
		fse.copy(_temp,_now,err => {
			if(err){
				w(err)
			}else{
				fse.readJson(path.join(_now,'package.json'), (err, packageObj) => {
					if(err){
						fs.removeSync(_now)
						w(err)
					}else{
						if(issass){
							packageObj.scripts.build = "babel src -d lib && node ./bin/sassc";
							fse.remove(path.join(_now,'assets/index.less'))
							
						}else{
							fse.remove(path.join(_now,'assets/index.scss'));
							fse.remove(path.join(_now,'bin/sassc'))
						}
						packageObj.name = projectName;
						packageObj.files = [ "lib", "assets" ];
						fse.writeJson(path.join(_now,'package.json'), packageObj, err => {
						  	if(err){
						  		fs.removeSync(_now)
						  		w(err)
						  	}else{
						  		fse.outputFile(path.join(_now,'.gitignore'), gitignoreTxt, err => {
						  			if(err){
						  				fs.removeSync(_now)
						  				w(err)
						  			}else{
						  				r()
						  			}
						  		})
						  	}
						})
					}
				})
			}
		})		
    });
}


module.exports = build;
