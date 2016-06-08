define(
	["common/demoView", "bin/util/osUtil"],
	function(Base, osUtil)
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