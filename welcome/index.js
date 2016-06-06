define(
	["bin/core/naviPageView", "welcome/tutorialConfig"],
	function(Base, config)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
            var html = "<ul>";
			var template  = _.template(this.$html("#tutorialLinkTemplate"));
			var container = this.$fragment("#tutorialContainer");
			for(var i=0,i_sz=config.length; i<i_sz; ++i)
			{
                html +=	template({id:i,name:config[i].name,todo:config[i].todo});
			}
            html += "</ul>";
            container.append(html);
			var self = this;
			container.find(".WelcomeView-tutorial-link").on("click", function(e)
			{
				self.onClickTutorial(config[e.currentTarget.id]);
			});

			container.setup();
		}

		Class.onClickTutorial = function(config)
		{
			if(config.todo)
			{
				bin.hudManager.showStatus("开发中...");
			}
			else
			{
				bin.naviController.push(config.path, config);
			}
		}

		Class.onRight = function()
		{
			if(cordova)
			{
				cordova.binPlugins.common.openSystemBrowser("http://github.com/BuildItNow/BIN");
			}
			else
			{
				window.open("http://github.com/BuildItNow/BIN");
			}
		}

		Class.onLeft = function()
		{
			bin.lsLoader.remAllCaches();
			bin.hudManager.showStatus("清除页面本地缓存成功");
		}

		return Base.extend(Class);
	}
);
