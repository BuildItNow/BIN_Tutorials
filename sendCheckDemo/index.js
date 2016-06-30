define(
	["common/demoView", "sendCheckDemo/client", "bin/core/util"],
	function(Base, Client, util)
	{
		var Class = {};

		Class.events = 
		{
			"click #abort" : "abort",
			"click #reject" : "reject",
		};

		Class.abort = function()
		{
			var self = this;
			Client.abortRequest(function(data, netParams)
			{
				self.$text("#abortResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			}, function(error, netParams)
			{
				if(netParams.userdatas.abort)
				{
					bin.hudManager.showStatus("请求被取消");
				}
			})
		}

		Class.reject = function()
		{
			var self = this;
			Client.rejectRequest(function(data, netParams)
			{
				self.$text("#rejectResult", "结果：来源 "+netParams.userdatas.from+" 数据 "+util.dump(data));
			});
		}

		return Base.extend(Class);
	}
);