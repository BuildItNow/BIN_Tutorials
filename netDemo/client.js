define([], function() 
{
	var Class = {};
	
	Class.testAPI_callback = function(success, error)
	{
		bin.netManager.doAPI({api:"/api/testAPI", success:success, error:error, type:"GET", data:{a:10, b:"Hello"}});
	}

	Class.testAPI_promise = function()
	{
		return bin.netManager.doAPIEx({api:"/api/testAPI", type:"GET", data:{a:10, b:"Hello"}});
	}
	return Class;
});