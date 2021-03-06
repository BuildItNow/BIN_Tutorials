define(
	["common/demoView", "bin/core/view"],
	function(Base, View)
	{
		var Class = {};

		Class.events = 
		{
			"click #switch" : "onSwitch",
		};

		Class.onSwitch = function(event)
		{
			bin.hudManager.showStatus("开关"+(event.currentTarget.checked ? "打开" : "关闭"));
		}

		return Base.extend(Class);
	}
);
