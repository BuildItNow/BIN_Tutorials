define(
	[],
	function()
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			this.request(new Promise(function(res, rej)
			{
				bin.mapManager.require(function(error)
				{  	
					if(error)
					{
						rej(error);
						return ;
					}

					res();
				});
			})).then(function()
	        {
	        	var map = new BMap.Map("mapContainer");
	            map.centerAndZoom(new BMap.Point(106.53,29.59),16);
	        }).catch(function(error)
	        {
	        	bin.hudManager.showStatus("加载地图失败");
	        });
		}

		return bin.ui.NaviPageView.extend(Class);
	});