define(
	[],
	function()
	{
		var Class = {};

		Class.asyncPosGenHTML = function()
		{
			bin.mapManager.require(function(error)
			{  	
				if(error)
				{
					return ;
				}
            	var map = new BMap.Map("mapContainer");
            	map.centerAndZoom(new BMap.Point(106.53,29.59),16);
            });
		}

		return bin.ui.NaviPageView.extend(Class);
	});