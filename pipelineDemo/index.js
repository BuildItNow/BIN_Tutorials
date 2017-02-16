define(
	["common/demoView", "pipelineDemo/mathUtil"],
	function(Base, mathUtil)
	{

		var raf = window.requestAnimationFrame;
		Class = {};

		Class.vmData = 
		{
			scale:1,
			trans:0,
			rotate:0,
		}

		Class.posGenHTML = function()
		{
			Base.prototype.posGenHTML.call(this);

			var self = this;

			var img = new Image();
			img.src = "pipelineDemo/img/coord.png";

			img.onload = function()
        	{
        		self._coordImage = img;
        	}

			var now = _.now();
			var pre = now;
			var cb   = function()
			{	
				now = _.now();
				self.onFrame((now-pre)*0.001);
				pre = now;

				raf(cb);
			}
			raf(cb);

			this._matWorld 	= null;

			var eyeAt  = mathUtil.vector(0, 0, 0, 0);
			var lookAt = mathUtil.vector(0, 0, 1, 0);
			var up     = mathUtil.vector(0, 1, 0, 0);
			this._matView 	= mathUtil.matView(eyeAt, lookAt, up);

			var hDegree = 90;
			var vDegree = 90;
			var nZ = 1;
			var fZ = 100;
			this._matProj   = mathUtil.matProjection(hDegree, vDegree, nZ, fZ); 

			var width  = 640;
			var height = 480;
			this._matVort   = mathUtil.matViewport(width, height);
		
			this._line = [];
			this._line.push(mathUtil.vector(-1, -1, 5, 1));
			this._line.push(mathUtil.vector(1, -1, 5, 1));
			this._line.push(mathUtil.vector(1, 1, 5, 1));
			this._line.push(mathUtil.vector(-1, 1, 5, 1));
			this._line.push(mathUtil.vector(-1, -1, 5, 1));

			this._elemCanvas = this.$("#canvas");
			this._canvas = this._elemCanvas[0];

            this._canvas.width  = width;
            this._canvas.height = height;

            this._trans  = mathUtil.vector(0, 0, 0, 1);
            this._scale  = 1;
            this._rotate = 0;

            this._matS = mathUtil.matScale(this._scale, this._scale, 1);
            this._matT = mathUtil.matTranslation(this._trans);
            this._matR = _.clone(mathUtil.E);
		}

		Class.onFrame = function(delta)
		{
			var ctx = this._canvas.getContext("2d");
			
			ctx.save();
			ctx.fillStyle = "rgba(250, 250, 250, 1)";
        	ctx.fillRect (0, 0, 640, 480);
        	ctx.restore();

			ctx.strokeStyle = "#FF0000";

			ctx.beginPath();

			var pt = null;
			for(var i=0,i_sz=this._line.length; i<i_sz; ++i)
			{
				pt = mathUtil.vecDotMat(this._line[i], this._matS);
				pt = mathUtil.vecDotMat(pt, this._matR);
				pt = mathUtil.vecDotMat(pt, this._matT);
				pt = mathUtil.vecDotMat(pt, this._matView);
				pt = mathUtil.vecDotMat(pt, this._matProj);

				// -w <= xc <= w
				// -w <= yc <= w
 				// 	0 <= zc <= w

				pt.x /= pt.w;
				pt.y /= pt.w;
				pt.z /= pt.w;
				pt.w = 1;

				pt = mathUtil.vecDotMat(pt, this._matVort);

				if(i==0)
				{
					ctx.moveTo(pt.x, pt.y);
				}
				else
				{
					ctx.lineTo(pt.x, pt.y);
				}
			}

		    ctx.stroke();

		    if(this._coordImage)
		    {
		    	ctx.drawImage(this._coordImage, 0, 480-100, 90, 100);
		    }
		}

		Class.vmMethod_translation = function(plus)
		{
			var a = plus ? 0.5 : -0.5;
			this._trans  = mathUtil.vecAddVec(this._trans, mathUtil.vector(a, a, a, 1));
			this.vm.trans = this._trans.x.toFixed(2);;
            this._matT = mathUtil.matTranslation(this._trans);
		}

		Class.vmMethod_scalef = function(plus)
		{
			var a = plus ? 0.2 : -0.2;
			this._scale += a;
			this.vm.scale = this._scale.toFixed(2);;
            this._matS = mathUtil.matScale(this._scale, this._scale, 1);
		}

		Class.vmMethod_rotatef = function(plus)
		{
			var a = plus ? 0.1 : -0.1;
			this._rotate += a;
			this.vm.rotate = this._rotate.toFixed(2);
			this._matR.m00 = Math.cos(this._rotate);
			this._matR.m02 = -Math.sin(this._rotate);
			this._matR.m20 = Math.sin(this._rotate);
			this._matR.m22 = Math.cos(this._rotate);
        }
		
		return Base.extend(Class);
	});