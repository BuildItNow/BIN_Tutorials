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
			"click #pushNative" : "pushNative",
			"click #pushNativeWithData" : "pushNativeWithData",
			"click #pushH5SubView" : "pushH5SubView",
			"click #popWithData" : "popWithData",
			"click #pop2" : "pop2",
			"click #pop3" : "pop3",
			"click #popWelcomeIndex" : "popWelcomeIndex",
			"click #popNative" : "popNative",
			"click #pushComNative" : "pushComNative",
		};

		Class.pushNative = function()
		{
			bin.naviController.push("hybridDemo/subView");
		}

		Class.pushNativeWithData = function()
		{
			bin.naviController.push("hybridDemo/subView", ["Hello BIN-HYBRID", {text:"This is native page"}]);
		}

		Class.pushH5SubView = function()
		{
			bin.naviController.push("hybridDemo/h5SubView");
		}

		Class.popWithData = function()
		{
			bin.naviController.pop(1, ["This is pop data"]);
		}

		Class.pop2 = function()
		{
			bin.naviController.pop(2);
		}

		Class.pop3 = function()
		{
			bin.naviController.pop(3);
		}

		Class.pop3 = function()
		{
			bin.naviController.pop(3);
		}

		Class.popNative = function()
		{
			bin.naviController.popTo("hybridDemo/subView");
		}

		Class.popWelcomeIndex = function()
		{
			bin.naviController.popTo("welcome/index");
		}

		Class.pushComNative = function()
		{
			bin.naviController.push("hybridDemo/comDemoView");
		}
    	
		return Base.extend(Class);
	});