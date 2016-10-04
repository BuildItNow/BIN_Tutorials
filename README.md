# 开发示例
本工程提供了使用BIN框架开发的特性示例和组件示例，在代码层面展示如何使用BIN进行APP开发，也可在实际开发中使用示例代码(Copy-Paste-Modify)，可通过[在线演示](http://101.200.215.114:8080/apps/tutorials/index.html)进行体验！

## 本地运行
* [下载](https://github.com/BuildItNow/BIN_Tutorials/archive/master.zip)BIN_Tutorials源码，解压到BIN_Tutorials目录
* [下载](https://github.com/BuildItNow/BIN/archive/bin2.0-vue.zip)BIN框架代码，解压到BIN目录<br/>
注意：VM模式开发示例需要下载[bin2.0-vue](https://github.com/BuildItNow/BIN/tree/bin2.0-vue)分支，其他直接使用[master](https://github.com/BuildItNow/BIN/tree/master)分支
* 将BIN中的bin目录和index-spa.html文件拷贝到BIN_Tutorials中
* 在Chrome中打开index-sap.html文件，Chrome必须以跨域方式打开

## 示例说明－特性开发
### [页面本地化](https://github.com/BuildItNow/BIN_Tutorials/tree/master/lsLoaderDemo)
BIN对requirejs进行了改造，可对原requirejs的加载机制进行定制，而页面本地化通过定制加载，将JS、HTML、CSS源码保存在本地实现代码本地化，并提供基于文件基本的版本管理
### [页面预加载](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载

## 示例说明－页面开发
### [基于VUE VM模式开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/vmDemo)
BIN在框架层面集成了VUE库，在业务开发中添加ViewModel层，数据驱动UI以减少对JQuery节点的操作；另一方在HTML中以声明方式实现事件绑定，减少Controller中过多的事件绑定代码；整体加速业务开发，减少冗余代码
### [view开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/lsLoaderDemo)
BIN对requirejs进行了改造，可对原requirejs的加载机制进行定制，而页面本地化通过定制加载，将JS、HTML、CSS源码保存在本地实现代码本地化，并提供基于文件基本的版本管理
### [一般页面开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [具有导航栏页面开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [rem页面适配](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [过场动画回调](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [过场动画优化](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [图片延迟加载](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载
### [延迟加载任意View](https://github.com/BuildItNow/BIN_Tutorials/tree/master/prLoaderDemo)
展示如果通过BIN配置实现页面预加载

## 示例说明－组件开发

## 示例说明－网络开发和数据中心

## 示例说明－其他
### [百度地图](https://github.com/BuildItNow/BIN_Tutorials/tree/master/baiduMapDemo)
BIN对百度地图添加了requirejs插件，该示例展示如何通过bin.mapManager引用百度地图
