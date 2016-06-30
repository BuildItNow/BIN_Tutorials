define(
	["common/demoView", "bin/core/util"],
	function(Base, util)
	{
		var Class = {};

		Class.events = 
		{
			"click #jump" : "jump",
		};

		Class.jump = function()
		{
			bin.naviController.push("pageJumpParamsDemo/page0?a=100&c=Hello BIN", {a:10, b:"Hello", c:{}});
		}

		Class.onViewBack = function(backFrom, backData)
		{
			bin.hudManager.alertInfo("数据 "+util.dump(backData), "从"+backFrom+"返回");
		}

		return Base.extend(Class);
	}
);