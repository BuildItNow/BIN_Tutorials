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
### [view开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/viewDemo)
View是BIN框架中最基本的UI元素，本示例展示了通过两种方式创建一个基本的View
### [一般页面开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/normalPageDemo)
展示PageView开发，PageView从View继承，代表一个页面，可通过bin.naviController进行页面导航，并具有过场动画
### [具有导航栏页面开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/naviPageDemo)
展示NaviPageView开发，NaviPageView从PageView继承，代表一个具有导航栏页面
### [rem页面适配](https://github.com/BuildItNow/BIN_Tutorials/tree/master/remDemo)
BIN通过rem进行页面适配，默认情况为：在width为320、1rem=20px,可通过remConfig进行设置
### [页面跳转效果](https://github.com/BuildItNow/BIN_Tutorials/tree/master/pageJumpDemo)
BIN提供了一些通用的过场动画，比如淡入淡出、右进右出、右进左出等，亦提供了定制机制
### [页面跳转参数传递和多级返回](https://github.com/BuildItNow/BIN_Tutorials/tree/master/pageJumpParamsDemo)
本示例展示了如何在页面跳转时进行参数传递和接收，并操作页面栈进行多级页面回退
### [过场动画回调](https://github.com/BuildItNow/BIN_Tutorials/tree/master/IOAnimCallbackDemo)
PageView提供了过场动画回调接口，可重写接口监测过场动画
### [过场动画优化](https://github.com/BuildItNow/BIN_Tutorials/tree/master/pageViewRequestDemo)
如果在过场动画过程当中进行节点操作或者其他耗时操作，将会造成过场动画卡顿；针对这种场景，PageView提供了request接口以优化过场动画，本示例展示了如何使用request接口
### [图片延迟加载](https://github.com/BuildItNow/BIN_Tutorials/tree/master/lazyLoadDemo)
BIN在框架层面提供了延迟加载功能，本示例展示了通过延迟加载功能处理图片加载
### [延迟加载任意View](https://github.com/BuildItNow/BIN_Tutorials/tree/master/lazyLoadViewDemo)
View针对延迟加载提供了onViewLazyLoad接口，通过重写该接口可延迟加载任意View

## 示例说明－组件开发
### [开关Switch](https://github.com/BuildItNow/BIN_Tutorials/tree/master/switchDemo)
### [弹框提示AlertView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/alertDemo)
### [状态提示StatusView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/statusDemo)
### [指示器IndicatorView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/indicatorDemo)
### [选择器SelectView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/selectDemo)
### [时间日期选择器DatePickerView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/datePickerDemo)
### [Tab栏组件TabBarView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/tabBarDemo)
### [侧滑页组件SwipeView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/swipeDemo)
### [Tab页组件TabView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/tabDemo)
### [滚动组件ScrollView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/scrollViewDemo)
### [下拉刷新组件RefreshView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/refreshViewDemo)
### [列表组件ListView](https://github.com/BuildItNow/BIN_Tutorials/tree/master/refreshListViewDemo)

## 示例说明－网络开发和数据中心
### [数据中心](https://github.com/BuildItNow/BIN_Tutorials/tree/master/dataCenterDemo)
BIN在框架层面提供了具有一定业务抽象的数据持久化模块(数据中心)，通过数据中心可以针对应用或用户进行持久化存储
### [网络API开发](https://github.com/BuildItNow/BIN_Tutorials/tree/master/netDemo)
在使用BIN框架开发时，抽象出了网络API层，而不是简单的应用ajax请求；通过网络API层，可以很方便的进行本地数据mock、请求loading动画等操作；本示例展示了如何通过bin.netManager.doAPI接口开发网络API；此外，bin.netManager分别提供了CallbackPolicy,DebugPolicy,CachePolicy,SendCheckPolicy供定制，其中CallbackPolicy可对请求的beforeSend、success、error、complete提供了统一处理的机会
### [网络本地数据框架](https://github.com/BuildItNow/BIN_Tutorials/tree/master/netLocalDemo)
本地数据mock框架，对业务代码完全隔离，通过简单的开关来进行服务器和本地数据切换；前端开发可完全独立于服务器进行业务开发；本示例展示了如何配置网络API的本地mock数据；可通过DebugPolicy定制
### [网络缓存](https://github.com/BuildItNow/BIN_Tutorials/tree/master/cacheDemo)
BIN对于网络API提供了一定的缓存策略，通过bin.netManager.doAPI的options配置即可实现cache策略；可通过CachePolicy进行定制
### [网络请求发送策略](https://github.com/BuildItNow/BIN_Tutorials/tree/master/sendCheckDemo)
针对相同请求重复发送场景，可通过SendCheckPolicy进行定制

## 示例说明－其他
### [百度地图](https://github.com/BuildItNow/BIN_Tutorials/tree/master/baiduMapDemo)
BIN对百度地图添加了requirejs插件，该示例展示如何通过bin.mapManager引用百度地图
### [图片延迟加载List应用](https://github.com/BuildItNow/BIN_Tutorials/tree/master/lazyLoadListDemo)
在ListView中应用延迟加载功能
### [Complex Tab](https://github.com/BuildItNow/BIN_Tutorials/tree/master/tabComplexDemo)
在TabView中应用RefreshView、ListView，多组件组合复杂场景

