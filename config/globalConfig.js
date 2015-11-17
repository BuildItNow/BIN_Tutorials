define(
{
	name : "Hello BIN Framework",
	runtime : "DEBUG",
	pageIOAnim  : "rightIO",
	placeholder : "/bin/res/img/placeholder.jpg",
	//left   : 20,
	//top    : 20,
	//width  : 120,
	//height : 168,
	DEBUG : 
	{
		debug : true,
		useNetLocal : true,
		server : "http://localhost:8081",
		timeout : 20000,
		maxCacheDuration : 20000,
	},	
	RELEASE :
	{
		debug : false,
		useNetLocal : true,
		server : "http://localhost:8081",
		timeout : 20000,
		maxCacheDuration : 1*24*60*60*1000,
	}
});
