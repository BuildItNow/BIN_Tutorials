define(
	["common/demoView"],
	function(Base)
	{
		var Class = 
		{
			events:
			{
				"click #normal":"normalMethod",
				"click #optimize"  :"optimizeMethod"
			}
		};

		Class.normalMethod = function()
		{
			bin.naviController.push("pageViewRequestDemo/normalView");
		}

		Class.optimizeMethod = function()
		{
			bin.naviController.push("pageViewRequestDemo/optimizeView");
		}

		return Base.extend(Class);
	} 
);