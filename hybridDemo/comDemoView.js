define(
	[
		"bin/native/nativePageView",
        "bin/util/osUtil", 
    ], 
	function(Base, osUtil)
	{

		var Class = 
		{
			
		};

		Class.onLoad = function()
		{
			this._nativeObject.exec("setTitle", ["原生交互页面"]);

			this._getProperty = "This is js view property";
		}

		Class.jsChangeTitle = function()
		{
			this._nativeObject.exec("setTitle", ["testFunc改动Title"]);
		}

		Class.jsCallNative = function()
		{
			this._nativeObject.exec("testFunc", ["I'm from js"], function(err, data)
			{
				console.log(data);
			});
		}
    	
		return Base.extend(Class, {native:{ios:"ComDemoViewController"}});
	});