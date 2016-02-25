define(
{
	name : "Hello BIN Framework",
	runtime : "DEBUG",
	pageIOAnim  : "rightIO",
	placeholder : "/bin/res/img/placeholder.jpg",
	//left   : 20,
	//top    : 20,
	//width  : 120,
	//height : 168,
	DEBUG : 
	{
		debug : true,
		useNetLocal : true,
		server : "http://localhost:8081",
		timeout : 20000,
		maxCacheDuration : 20000,
	},	
	RELEASE :
	{
		debug : false,
		useNetLocal : true,
		server : "http://localhost:8081",
		timeout : 20000,
		maxCacheDuration : 1*24*60*60*1000,
	},
	requireConfig:
	{
		packages : 
		[],
		paths: 
		{
			// 3rdParty path
			"3rdParty" : "bin/3rdParty",
			
			// equirejs plugins
			text: 'bin/3rdParty/requirejs-text/text',
			domReady: 'bin/3rdParty/requirejs-domready/domReady',
			i18n: 'bin/3rdParty/requirejs-i18n/i18n',
			css: 'bin/3rdParty/require-css/css',
			view: 'bin/requirePlugin/requirejs-view',

			// 3rdParty libs
			jquery: 'bin/3rdParty/jquery/jquery',
			zepto: 'bin/3rdParty/zepto/zepto',
			underscore: 'bin/3rdParty/underscore/underscore',
			backbone: 'bin/3rdParty/backbone/backbone',
			fastclick: 'bin/3rdParty/fastclick/fastclick',
			iscroll: 'bin/3rdParty/iscroll/iscroll-probe',
			moment: 'bin/3rdParty/moment/moment',
			spin: 'bin/3rdParty/spinjs/spin',
			swiper: 'bin/3rdParty/swiper/swiper',
			md5: 'bin/3rdParty/md5/md5',

			// Add your paths here
		},
		waitSeconds: 5,
		shim: 
		{
		}
	},

	classConfig:
	{
		// There is no dependency relation here, it's just a class hierarchy
		core:
		{
			Application:"application/application",
			DebugManager: "bin/core/debugManager",
			NetManager:
			{
				_path:"bin/core/netManager",
				CachePolicy:"bin/core/netPolicy/netCachePolicy",
				CallbackPolicy:"bin/core/netPolicy/netCallbackPolicy",
				DebugPolicy:"bin/core/netPolicy/netDebugPolicy",
				SendCheckPolicy:"bin/core/netPolicy/netSendCheckPolicy",	
			},
			DataCenter:"application/dataCenter",
			HUDManager:"bin/core/hudManager",	
			NavigationController:"bin/core/navigationController",
			NativeManager:"bin/native/nativeManager",
		},
		ui:
		{
			View:"bin/core/view",
			PageView:"bin/core/pageView",
			NaviPageView:"bin/core/naviPageView",
		},
		util:
		{
			osUtil:"bin/util/osUtil",
			disUtil:"bin/util/disUtil",
			elemUtil:"bin/util/elemUtil",
			lsUtil:"bin/util/lsUtil",
			ssUtil:"bin/util/ssUtil",
			pathUtil:"bin/util/pathUtil",
		},
	}
});
