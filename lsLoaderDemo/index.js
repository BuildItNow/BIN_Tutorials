define(
	[],
	function()
	{
		var Class = {};

		Class.events = 
		{
			"click #clear" : "onClear",
		}

		Class.posGenHTML = function()
		{
			this.refreshCacheInfo();
		}

		Class.refreshCacheInfo = function()
		{
			var info = "";
			if(bin.lsLoader)
			{
				var o = bin.lsLoader.totalOriginalCacheSize();
				var c = bin.lsLoader.totalCacheSize();
				info += "缓存压缩前大小(KB): "+o*0.001;
				info += " 缓存压缩后大小(KB): "+c*0.001;
				info += " 压缩比: "+ c/o;
			}
			else
			{
				info += "未打开本地页面缓存"
			}
			this.$html("#cacheInfo", info);
		}

		Class.onClear = function()
		{
			if(bin.lsLoader)
			{
				bin.lsLoader.remAllCaches();
				this.refreshCacheInfo();
				bin.hudManager.showStatus("清除页面本地缓存成功");
			}
			else
			{
				bin.hudManager.showStatus("未打开本地页面缓存");
			}
		}

		return bin.ui.NaviPageView.extend(Class);
	});