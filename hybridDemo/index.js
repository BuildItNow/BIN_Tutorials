define(
	[
		"bin/native/nativePageView",
        "bin/util/osUtil", 
    ], 
	function(View, osUtil)
	{

		var Class = 
		{
			
		};
    	
		return View.extend(Class, {native:{ios:"MainViewController"}});
	});