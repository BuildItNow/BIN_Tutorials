define(
	["common/demoView", "bin/util/osUtil", "bin/common/scrollView"],
	function(Base, osUtil, ScrollView)
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