define(
	["common/demoView", "bin/common/tabView", "bin/common/refreshView", "bin/common/listView", "text!tabComplexDemo/view0.html", "text!tabComplexDemo/view1.html"],
	function(Base, TabView, RefreshView, ListView, view0html, view1html)
	{
		var Class = {};

		var ItemProvider = ListView.TemplateItemProvider.extend(
		{
			createItemView:function(listView, i, data)
			{
				var v = ListView.TemplateItemProvider.prototype.createItemView.call(this, listView, i, data);

				v.$("#itemContent").on("click", function()
				{
					bin.naviController.push("tabComplexDemo/itemDetail", {id:i, data:data});
				});

				return v;
			}
		});

		Class.posGenHTML = function()
		{
			var self = this;
			this._tabView = new TabView(
			{
				elem : this.$("#tabView"),
				items : ["common", "refresh", "list"],
				current : "common",
				activeStyle:"TabComplexDemoView-tab-item-active",
				deactiveStyle:"TabComplexDemoView-tab-item-deactive",
				onChange:function(view, item)
				{
					self._onChange(view, item);
				}
			});
		}

		Class._onChange = function(view, item)
		{
			var self = this;
			if(item === "refresh" && !this._refreshView)
			{
				this._refreshResult = 0;
				this._refreshView = new RefreshView({elem:view.$("#refreshView"), autoRefresh:"animation", onRefresh:function(refreshView)
					{
						self._onRefreshViewRefresh(refreshView);
					}});
			}
			else if(item === "list" && !this._listView)
			{
				this._listView = new ListView({elem:view.$("#listView"), itemProvider:new ItemProvider({template:this.$html("#itemTemplate")}), dataProvider:new ListView.DataProvider({type:"demo"})});
			}
		}

		Class._onRefreshViewRefresh = function(refreshView)
		{
			var self = this;
			setTimeout(function()
			{
				if(self._refreshResult == 1)
				{
					refreshView.$scrollerContent.html(view0html);

					refreshView.refreshDone();
				}
				else if(self._refreshResult == 0)
				{
					refreshView.$scrollerContent.html(view1html);
					refreshView.$scrollerContent.find("#goBack").on("click", 
						function()
						{	
							bin.hudManager.alert(
							{
								message:{text:"确定返回吗?"},
								buttons:
								[
									{text:"确定", onClick:function(v, t){v.close(); self.goBack()}},
									{text:"取消", onClick:function(v, t){v.close();}}
								]
							})
						});

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


		return Base.extend(Class);
	} 
);