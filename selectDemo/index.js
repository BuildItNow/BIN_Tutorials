define(
	["common/demoView", "bin/core/view", "bin/util/osUtil"],
	function(Base, View, osUtil)
	{
		var Class = {};

		Class.events = 
		{
			"click #select" : "onSelect",
		};

		Class.onSelect = function()
		{
			bin.hudManager.select(
				{
					options:[{text:"选项A", value:"A"}, {text:"选项B", value:"B"}, {text:"选项C", value:"C"}],
					current:"B",
					callback: function(data)
					{
						bin.hudManager.showStatus("选择了 "+data.text);
					}
				});
		}

		return Base.extend(Class);
	}
);
