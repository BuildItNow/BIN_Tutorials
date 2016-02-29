define(["bin/core/naviPageView"],
	function(Base)
	{
		var Class = {};

		Class.onViewPush = function(pushFrom, pushData)
		{
			this._config = pushData;
		}

		Class.genHTML = function()
		{
			Base.prototype.genHTML.call(this);

			this.setTitle("示例 "+ (this._config ? this._config.name : "Demo"));
		}

		return Base.extend(Class);
	});