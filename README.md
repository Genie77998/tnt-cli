# [tnt-cli](https://github.com/Genie77998/tnt-cli.git) [![npm version](https://img.shields.io/npm/v/tnt-cli.svg?style=flat)](https://www.npmjs.com/package/tnt-cli)
    一个初始化开发react组件的脚手架

# 安装
    npm install tnt-cli -g

    或者

    git clone https://github.com/Genie77998/tnt-cli.git

    cd tnt && npm install

    npm link

# 使用

    打开终端输入tnt或者 tnt -h 看到如下信息则标识安装成功

    Usage: tnt <command>


    Commands:

        init|i   初始化一个新的组件

    Options:

        -h, --help     output usage information
        -V, --version  output the version number

# 命令
    
### init | i

    可以使用此命令生成自己的项目
        
        $ tnt i

        /* 输入一个组件的名称 */
            组件名称: MyProject
            
        /* 选择使用css预处理器默认less */
            css预处理器使用sass(Yes)/less(No)?

    输入完成后出现如下提示

        √ 项目已经初始化!

        cd MyProject && npm install && npm test
