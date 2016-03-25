define(
	["common/demoView", "bin/common/refreshView", "bin/util/osUtil", "text!refreshViewDemo/view0.html", "text!refreshViewDemo/view1.html"],
	function(Base, RefreshView, osUtil, view0Html, view1Html)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			var self = this;
			this._refreshView = new RefreshView({elem:this.$("#refreshView"), onRefresh:function(refreshView){self._onRefresh(refreshView)}});
			this._refreshResult = 0;
		}

		Class._onRefresh = function(refreshView)
		{
			var self = this;
			osUtil.delayCall(function()
			{
				if(self._refreshResult == 0)
				{
					refreshView.$scrollerContent.html(view0Html);

					refreshView.refreshDone();
				}
				else if(self._refreshResult == 1)
				{
					refreshView.$scrollerContent.html(view1Html);
					refreshView.$scrollerContent.find("#goBack").on("click", function(){self.goBack()});

					refreshView.refreshDone();
				}
				else
				{
					refreshView.refreshDone(true);
				}

				++ self._refreshResult;

				self._refreshResult %= 3;
				
				
			}, 1000);
		}

		Class.asyncPosGenHTML = function()
		{
			this._refreshView.refresh(true);
		}

		Class.onRemove = function()
		{
			this._refreshView.remove();
		}

		return Base.extend(Class);
	}
);