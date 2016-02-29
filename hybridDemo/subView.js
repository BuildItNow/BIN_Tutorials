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
			this._nativeObject.exec("setTitle", ["原生页面"]);
		}
    	
		return Base.extend(Class, {native:{ios:"SubViewController"}});
	});