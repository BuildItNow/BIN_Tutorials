define(
	["common/demoView", "cacheDemo/client", "bin/core/util"],
	function(Base, Client, util)
	{
		var Class = {};

		Class.events = 
		{
			"click #cacheNormal" : "cacheNormal",
			"click #cacheDuration" : "cacheDuration",
			"click #cacheSession" : "cacheSession",
			"click #cacheUserSession" : "cacheUserSession",
		};

		Class.cacheNormal = function()
		{
			var self = this;
			Client.cacheNormal(function(data, netParams)
			{
				self.$text("#normalResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			})
		}

		Class.cacheDuration = function()
		{
			var self = this;
			Client.cacheDuration(function(data, netParams)
			{
				self.$text("#durationResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			})
		}

		Class.cacheSession = function()
		{
			var self = this;
			Client.cacheSession(function(data, netParams)
			{
				self.$text("#sessionResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			})
		}

		Class.cacheUserSession = function()
		{
			var self = this;
			Client.cacheUserSession(function(data, netParams)
			{
				self.$text("#userSessionResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			})
		}

		return Base.extend(Class);
	}
);