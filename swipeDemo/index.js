define(
	["common/demoView", "bin/common/swipeView"],
	function(Base, SwipeView)
	{
		var Class = 
		{
			events:
			{
				"click #showSlide2" : "onShowSlide2",
				"click #showSlide0" : "onShowSlide0",	
				"click #prev" : "prev",
				"click #next" : "next",
				"click #del" : "del",
				"click #delNoRefresh" : "delNoRefresh",
				"click #add" : "add",
				"click #addNoRefresh" : "addNoRefresh",
				"click #delAll" : "delAll",
				"click #delAllNoRefresh" : "delAllNoRefresh",
			}
		};

		Class.onInAnimationBeg = function()
		{
			//this._indicatorID = bin.hudManager.startIndicator({model:true});
		}

		Class.onInAnimationEnd = function()
		{
			//bin.hudManager.stopIndicator(this._indicatorID);

			
		}

		Class.posGenHTML = function()
		{
			this.$html("#swipeView", '<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/0.jpeg)"></div>\
    		</div>\
    		<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/1.jpeg)"></div>\
    		</div>\
    		<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/2.jpeg)"></div>	\
    		</div>\
    		<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/3.jpg)"></div>\
    		</div>');

			this._swipeView = new SwipeView({elem:this.$("#swipeView"), onChange:
				function(view, index)
				{
					console.info("page "+index);
					bin.hudManager.showStatus("page "+index);
				}});
		}

		Class.onShowSlide0 = function()
		{
			this._swipeView.setCurrent(0);
		}

		Class.onShowSlide2 = function()
		{
			this._swipeView.setCurrent(2);
		}

		Class.prev = function()
		{
			this._swipeView.slidePrev();
		}

		Class.del = function()
		{
			this._swipeView.removeSlide(this._swipeView.getCurrent(), true);
		}

		Class.delAll = function()
		{
			this._swipeView.removeAllSlides(true);
		}

		Class.delAllNoRefresh = function()
		{
			this._swipeView.removeAllSlides(false);
		}


		Class.add = function()
		{
			this._swipeView.appendSlide('<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/3.jpg)"></div>\
    		</div>', true);
		}

		Class.delNoRefresh = function()
		{
			this._swipeView.removeSlide(this._swipeView.getCurrent(), false);
		}

		Class.addNoRefresh = function()
		{
			this._swipeView.appendSlide('<div class="SwipeDemoView-swipe-slide">\
    			<div class="SwipeDemoView-swipe-background" style="background-image:url(./swipeDemo/img/3.jpg)"></div>\
    		</div>', false);
		}

		Class.next = function()
		{
			this._swipeView.slideNext();
		}

		Class.onRemove = function()
		{
			this._swipeView.remove();
		}

		return Base.extend(Class);
	} 
);