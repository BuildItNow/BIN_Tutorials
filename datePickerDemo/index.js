define(
	[
		"common/demoView",
        "bin/util/osUtil", 
    ], 
	function(Base, osUtil)
	{

		var Class = 
		{
			
		};

		Class.events = 
		{
			"click #datePick" : "datePick",
			"click #timePick" : "timePick",
			"click #dateTimePick" : "dateTimePick",
		};

		Class.datePick = function()
		{
			bin.hudManager.datePicker(function(date)
			{
				var year  = date.getFullYear();
				var month = date.getMonth()+1;
				var day   = date.getDate();

				bin.hudManager.alertInfo(year+"-"+month+"-"+day);
			});
		}

		Class.timePick = function()
		{
			bin.hudManager.datePicker({pickTime:true, pickDate:false, onPick:function(date)
			{
				var hour  = date.getHours();
				var minute = date.getMinutes();
				var second   = date.getSeconds();

				bin.hudManager.alertInfo(hour+":"+minute+":"+second);
			}});
		}

		Class.dateTimePick = function()
		{
			bin.hudManager.datePicker({pickTime:true, onPick:function(date)
			{
				var year  = date.getFullYear();
				var month = date.getMonth()+1;
				var day   = date.getDate();

				var hour  = date.getHours();
				var minute = date.getMinutes();
				var second   = date.getSeconds();

				bin.hudManager.alertInfo(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
			}});
		}
    	
		return Base.extend(Class);
	});