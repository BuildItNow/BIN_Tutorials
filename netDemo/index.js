define(
	["common/demoView", "netDemo/client", "bin/core/util"],
	function(Base, Client, util)
	{
		var Class = {};

		Class.vmData = 
		{
			res:""
		}
		Class.vmMethod_sendRequest = function()
		{
			var self = this;

			// ajax callback style
			// Client.testAPI_callback(function(data)
			// {
			// 	self.vm.res = util.dump(data);
			// }, function(error)
			// {
			// 	self.vm.res = "网络请求失败"+error.statusText;
			// });

			// promise style
			Client.testAPI_promise().then(function(data)
			{
				self.vm.res = util.dump(data);
			}).catch(function(error)
			{
				self.vm.res = "网络请求失败"+error.statusText;
			});
		}

		return Base.extend(Class);
	}
);