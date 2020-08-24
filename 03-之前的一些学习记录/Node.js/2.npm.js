// 以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:
// $ npm install express



// 安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
// var express = require('express');


// 我们可以使用以下命令来卸载 Node.js 模块。
// $ npm uninstall express


// 卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
// $ npm ls



// 我们可以使用以下命令更新模块：
// $ npm update express


// 使用以下来搜索模块：
// $ npm search express


// 创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
// $ npm init


// 接下来我们就用以下命令来发布模块：
// $ npm publish






// 版本号
// 使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

// 语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

// 如果只是修复bug，需要更新Z位。
// 如果是新增了功能，但是向下兼容，需要更新Y位。
// 如果有大变动，向下不兼容，需要更新X位。