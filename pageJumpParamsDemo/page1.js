define(
	["bin/core/naviPageView"],
	function(Base)
	{
		var Class = {};

		Class.events = 
		{
			"click #backTo" : "backTo",
			"click #backCount" : "backCount",
		};

		Class.backTo = function()
		{
			bin.naviController.popTo("welcome/index");
		}

		Class.backCount = function()
		{
			bin.naviController.pop(2, "Hello BIN Framework");
		}

		return Base.extend(Class);
	}
);