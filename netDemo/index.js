define(
	["common/demoView", "netDemo/client", "bin/core/util"],
	function(Base, Client, util)
	{
		var Class = {};

		Class.events = 
		{
			"click #sendRequest" : "sendRequest"
		};

		Class.sendRequest = function()
		{
			var self = this;
			Client.testAPI(function(data)
			{
				self.$text("#requestResult", util.dump(data));
			})
		}

		return Base.extend(Class);
	}
);