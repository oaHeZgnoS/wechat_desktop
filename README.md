### 项目说明
基于electron桌面应用

### 项目系统要求
win7及以上系统/mac系统/linux系统

### 目录说明
src/index.js文件

### 开发环境
Node.js v12.20.1
Electron v12.0.8
Electron-forge v5.2.4

### 项目运行
1、查看并设置镜像
    npm config get registry  
    npm config set registry https://registry.npm.taobao.org
2、安装及项目初始化
    npm i --save-dev electron
    npm i --save-dev electron-forge
    npm i electron-is-dev
    electron-forge init
3、项目启动
    electron-forge start
4、源代码保护
    npm install -g asar
5、打包为可执行文件
    electron-forge package
6、打包为安装引导文件
    electron-forge make



