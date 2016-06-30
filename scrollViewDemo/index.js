define(
	["common/demoView", "bin/common/scrollView"],
	function(Base, ScrollView)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			Base.prototype.posGenHTML.call(this);

			new ScrollView({elem:this.$content()});
		}

		return Base.extend(Class);
	}
);