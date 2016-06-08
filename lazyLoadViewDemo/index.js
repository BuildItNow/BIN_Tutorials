define(
	["common/demoView", "bin/util/osUtil", "bin/common/scrollView", "lazyLoadViewDemo/group0View"],
	function(Base, osUtil, ScrollView, Group0View)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			var self = this;
			Base.prototype.posGenHTML.call(this);

			var View = ScrollView.extend(
			{
				onViewLazyLoad:function(view)
				{
					if(view.type() === "lazyLoadGroup0")
					{
						setTimeout(function()
						{
							self._group0View = new Group0View();

							view.$().css({width:"auto",height:"auto"});
							self._group0View.hide();
							view.$().append(self._group0View.$());
							self._group0View.$().fadeIn();

							self._scrollView.refreshUI();
						}, 500);
						
						return ;
					}

					Base.prototype.onViewLazyLoad.call(this, view);
				}
			});

			this._scrollView = new View({elem:this.$content()});
		}
		return Base.extend(Class);
	}
);