define(
["bin/core/spaApplication", "application/dataCenter", "css!application/css/demo.css"],
function(Base, DataCenter)
{
	var Application = {};

	Application.init = function()
	{
		Base.prototype.init.call(this);
	}

	Application.run = function()
	{
		bin.naviController.startWith("welcome/index", null, {onPushed:function()
		{
			$("#windowLoading").remove();
		}});

		if(this.width() > 500)
		{
			setTimeout(function()
			{
				bin.hudManager.showStatus("为了更好的体验BIN框架，建议使用移动调试方式浏览");
			}, 1000);
		}
	}

	return Base.extend(Application);
});
