define(
	[
		"common/demoView"
    ], 
	function(Base)
	{

		var Class = 
		{
			
		};

		Class.events = 
		{
			"click #pushToIndex" : "pushToIndex",
			"click #pushToNative" : "pushToNative",
		};

		Class.pushToIndex = function()
		{
			bin.naviController.push("hybridDemo/index");
		}

		Class.pushToNative = function()
		{
			bin.naviController.push("hybridDemo/subView");
		}

		Class.onViewPush = function(from, data)
		{
			if(data)
			{
				console.log(data);
			}
		}

		Class.onViewBack = function(from, data)
		{
			if(data)
			{
				console.log(data);
			}
		}
		
		return Base.extend(Class);
	});