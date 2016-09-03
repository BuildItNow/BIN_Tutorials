define(
	[],
	function()
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			bin.mapManager.require(function(error)
			{  	
				if(error)
				{
					return ;
				}

				var map = new BMap.Map("norMapContainer");
	            map.centerAndZoom(new BMap.Point(106.53,29.59),16);
	        });
		}

		return bin.ui.NaviPageView.extend(Class);
	});