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

				if(!self._stop)
				{
					raf(cb);
				}
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
		
			this._elemCanvas = this.$("#canvas");
			this._canvas = this._elemCanvas[0];

            this._canvas.width  = width;
            this._canvas.height = height;

            this._rect0 = 
            {
            	vts:this.generateRect(2),
            	color:"#FF0000",
            	effecter:
            	{
            		effect:function(delta)
            		{
            			var T = _.clone(self._matT);
            			var pos = T.row(3);
            			pos   = mathUtil.vecAddVec(this.position, pos);
            			pos.w = 1;
            			T.setRow(3, pos);

            			return mathUtil.matDotMat(mathUtil.matDotMat(self._matS, self._matR), T);
            		},
            		position:mathUtil.vector(0, 0, 5, 1),
            	}
            };

			this._box0 = {
				vts:this.generateBox(1), 
				color:"#00FF00", 
				effecter:
				{
					effect:function(delta)
					{
						this.time += delta;
						var len = this.frames.length;
						var dur = this.frames[len-1].time;
						if(this.time > dur)
						{
							this.time -= parseInt(this.time/dur)*dur;
						}

						var c = 0;
						var p = 0;
						for(var i=0;i<len;++i)
						{
							if(this.frames[i].time >= this.time)
							{
								c = i;
								break;
							}
						}

						if(c == 0)
						{
							p = c;
						}
						else
						{
							p = (c-1+len)%len;
						}

						var s = (this.time-this.frames[p].time)/(this.frames[c].time-this.frames[p].time);
						var pos = mathUtil.vecInterpVec(s, this.frames[p].position, this.frames[c].position);

						var T = mathUtil.matTranslation(pos);

						return T;
					},
					frames:
					[
						{
							time:0,
							position:mathUtil.vector(-5, 0, 7, 1),
						},
						{
							time:1, 
							position:mathUtil.vector(0, 5, 12, 1),
						},
						{
							time:2.5, 
							position:mathUtil.vector(5, 0, 7, 1),
						},
						{
							time:4.5, 
							position:mathUtil.vector(0, -2, 3, 1),
						},
						{
							time:7,
							position:mathUtil.vector(-5, 0, 7, 1),
						},
					],
					time:0,
					rotate:0,
					rotateSpeed:180,
				}
			};

			this._box1 = {
				vts:this.generateBox(1), 
				color:"#00FF00", 
				effecter:
				{
					effect:function(delta)
					{
						this.rotate += delta*this.rotateSpeed;
						var R = mathUtil.matRotate_vd(this.axis, this.rotate);
						var T = mathUtil.matTranslation(this.position);

						return mathUtil.matDotMat(R, T);
					},
					rotate:0,
					rotateSpeed:180,
					axis:mathUtil.vector(1, 1, 1),
					position:mathUtil.vector(0, 0, 5, 1),
				}
			};

			this._box2 = {
				vts:this.generateBox(1), 
				color:"#00FF00", 
				effecter:
				{
					effect:function(delta)
					{
						this.rotate += delta*this.rotateSpeed;
						var R = mathUtil.matRotate_vd(this.axis, this.rotate);
						var T = mathUtil.matTranslation(this.position);

						return mathUtil.matDotMat(R, T);
					},
					rotate:0,
					rotateSpeed:180,
					axis:mathUtil.vector(-1, -1, -1),
					position:mathUtil.vector(0, 2, 5, 1),
				}
			};

			this._box3 = {
				vts:this.generateBox(1), 
				color:"#00FF00", 
				effecter:
				{
					effect:function(delta)
					{
						this.rotate += delta*this.rotateSpeed;
						var R = mathUtil.matRotate_vd(this.axis, this.rotate);
						var T = mathUtil.matTranslation(this.position);

						return mathUtil.matDotMat(R, T);
					},
					rotate:0,
					rotateSpeed:180,
					axis:mathUtil.vector(-1, 1, 0),
					position:mathUtil.vector(0, -2, 5, 1),
				}
			};

            this._trans  = mathUtil.vector(0, 0, 0, 1);
            this._scale  = 1;
            this._rotate = 0;

            this._matS = mathUtil.matScale(this._scale, this._scale, 1);
            this._matT = mathUtil.matTranslation(this._trans);
            this._matR = _.clone(mathUtil.E);

            this._debugTexts = [];
		}

		Class.drawDebugText = function(text, x, y)
		{
			this._debugTexts.push({text:text, x:x, y:y});
		}

		Class.dumpDebugText = function(ctx)
		{
			ctx.save();
			ctx.font="20px Arial";
			ctx.fillStyle = "#FFFFFF";
			for(var i=0,i_sz=this._debugTexts.length; i<i_sz; ++i)
			{
				ctx.fillText(this._debugTexts[i].text, this._debugTexts[i].x, this._debugTexts[i].y);
			}
			ctx.restore();

			this._debugTexts = [];

		}

		Class.onFrame = function(delta)
		{
			var ctx = this._canvas.getContext("2d");
			
			ctx.clearRect (0, 0, 640, 480);

			ctx.beginPath();
		    var W = this._box0.effecter.effect(delta);
		    this.drawBox(ctx, this._box0.vts, this._box0.color, W, true);

			ctx.beginPath();
		    W = this._box1.effecter.effect(delta);
		    this.drawBox(ctx, this._box1.vts, this._box1.color, W);
			
			ctx.beginPath();
		    W = this._box2.effecter.effect(delta);
		    this.drawBox(ctx, this._box2.vts, this._box2.color, W);

		    ctx.beginPath();
		    W = this._box3.effecter.effect(delta);
		    this.drawBox(ctx, this._box3.vts, this._box3.color, W);

		    ctx.beginPath();
			W = this._rect0.effecter.effect(delta);
			this.drawRect(ctx, this._rect0.vts, this._rect0.color, W, true);

		    if(this._coordImage)
		    {
		    	ctx.drawImage(this._coordImage, 0, 480-100, 90, 100);
		    }

		    this.dumpDebugText(ctx);
		}

		Class.drawBox = function(ctx, box, color, T, debug)
		{
			ctx.save();
			ctx.strokeStyle = color;
		
			var pts = [];
			var pt = null;
			for(var i=0, i_sz=8; i<i_sz; ++i)
			{
				pt = mathUtil.vecDotMat(box[i], T);
				pt = mathUtil.vecDotMat(pt, this._matView);
				pt = mathUtil.vecDotMat(pt, this._matProj);

				// In view-frustrum
				// -w <= xc <= w
				// -w <= yc <= w
 				// 	0 <= zc <= w

				pt.x /= pt.w;
				pt.y /= pt.w;
				pt.z /= pt.w;
				pt.w = 1;

				pt = mathUtil.vecDotMat(pt, this._matVort);

				pts.push(pt);
			}

			// Front face
			ctx.moveTo(pts[0].x, pts[0].y);
			ctx.lineTo(pts[1].x, pts[1].y);
			ctx.lineTo(pts[2].x, pts[2].y);
			ctx.lineTo(pts[3].x, pts[3].y);
			ctx.lineTo(pts[0].x, pts[0].y);
			ctx.stroke();

			// Back face
			ctx.moveTo(pts[4].x, pts[4].y);
			ctx.lineTo(pts[5].x, pts[5].y);
			ctx.lineTo(pts[6].x, pts[6].y);
			ctx.lineTo(pts[7].x, pts[7].y);
			ctx.lineTo(pts[4].x, pts[4].y);
			ctx.stroke();

			// Edges
			ctx.moveTo(pts[0].x, pts[0].y);
			ctx.lineTo(pts[4].x, pts[4].y);
			ctx.stroke();

			ctx.moveTo(pts[1].x, pts[1].y);
			ctx.lineTo(pts[5].x, pts[5].y);
			ctx.stroke();

			ctx.moveTo(pts[2].x, pts[2].y);
			ctx.lineTo(pts[6].x, pts[6].y);
			ctx.stroke();

			ctx.moveTo(pts[3].x, pts[3].y);
			ctx.lineTo(pts[7].x, pts[7].y);
			ctx.stroke();

			ctx.restore();

			if(debug)
			{
				var pos = T.row(3);
				this.drawDebugText("("+pos.x.toFixed(2)+","+pos.y.toFixed(2)+","+pos.z.toFixed(2)+")", pts[0].x, pts[0].y-10);
			}
		}

		Class.generateBox = function(w)
		{
			var hw = w*0.5;

			//
			//   /4---5   	
			//  0---1/|
			//	| 7 | 6
			//  3---2/
			//

			return [
				mathUtil.vector(-hw, hw, -hw, 1),
				mathUtil.vector(hw, hw, -hw, 1),
				mathUtil.vector(hw, -hw, -hw, 1),
				mathUtil.vector(-hw, -hw, -hw, 1),
				
				mathUtil.vector(-hw, hw, hw, 1),
				mathUtil.vector(hw, hw, hw, 1),
				mathUtil.vector(hw, -hw, hw, 1),
				mathUtil.vector(-hw, -hw, hw, 1),
			];
		}

		Class.drawRect = function(ctx, rect, color, T, debug)
		{
			ctx.save();
			ctx.strokeStyle = color;
		
			var pts = [];
			var pt = null;
			for(var i=0, i_sz=4; i<i_sz; ++i)
			{
				pt = mathUtil.vecDotMat(rect[i], T);
				pt = mathUtil.vecDotMat(pt, this._matView);
				pt = mathUtil.vecDotMat(pt, this._matProj);

				// In view-frustrum
				// -w <= xc <= w
				// -w <= yc <= w
 				// 	0 <= zc <= w

				pt.x /= pt.w;
				pt.y /= pt.w;
				pt.z /= pt.w;
				pt.w = 1;

				pt = mathUtil.vecDotMat(pt, this._matVort);

				pts.push(pt);
			}

			ctx.moveTo(pts[0].x, pts[0].y);
			ctx.lineTo(pts[1].x, pts[1].y);
			ctx.lineTo(pts[2].x, pts[2].y);
			ctx.lineTo(pts[3].x, pts[3].y);
			ctx.lineTo(pts[0].x, pts[0].y);
			ctx.stroke();

			ctx.restore();

			if(debug)
			{
				var pos = T.row(3);
				this.drawDebugText("("+pos.x.toFixed(2)+","+pos.y.toFixed(2)+","+pos.z.toFixed(2)+")", pts[0].x, pts[0].y-10);
			}
		}

		Class.generateRect = function(w)
		{
			var hw = w*0.5;

			//   	
			//  0---1
			//	|   | 
			//  3---2
			//

			return [
				mathUtil.vector(-hw, hw, 0, 1),
				mathUtil.vector(hw, hw, 0, 1),
				mathUtil.vector(hw, -hw, 0, 1),
				mathUtil.vector(-hw, -hw, 0, 1),
			];
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
			var a = plus ? 15 : -15;
			this._rotate += a;
			this.vm.rotate = this._rotate.toFixed(2);
			this._matR = mathUtil.matRotate_y(this._rotate);
        }

        Class.onRemove = function()
        {
        	this._stop = true;
        }
		
		return Base.extend(Class);
	});