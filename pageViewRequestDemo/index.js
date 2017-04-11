define(
	["common/demoView"],
	function(Base)
	{
		var Class = 
		{
		};

		Class.vmMethod_normalMethod = function()
		{
			bin.naviController.push("pageViewRequestDemo/normalView");
		}

		Class.vmMethod_optimizeMethod = function()
		{
			bin.naviController.push("pageViewRequestDemo/optimizeView");
		}

		return Base.extend(Class);
	} 
);