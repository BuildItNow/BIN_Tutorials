define(
	[],
	function()
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			this.request(function(s, e)
			{
				bin.mapManager.require(function(error)
				{  	
					if(error)
					{
						return ;
					}

					s();
				});
			}, function()
	        {
	        	var map = new BMap.Map("optMapContainer");
	            map.centerAndZoom(new BMap.Point(106.53,29.59),16);
	        });
		}

		return bin.ui.NaviPageView.extend(Class);
	});