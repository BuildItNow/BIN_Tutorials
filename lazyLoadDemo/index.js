define(
	["common/demoView"],
	function(Base)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			Base.prototype.posGenHTML.call(this);

			new bin.ui.View({elem:this.$content()});
		}

		return Base.extend(Class);
	}
);