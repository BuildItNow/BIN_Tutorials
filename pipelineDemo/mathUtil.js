define([], function()
{
	var Class = {};

	Class.vector = function(x, y, z, w)
	{
		return {x:x, y:y, z:z, w:(w === undefined ? 0 : w), 
				len:function()
				{
					return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
				},
				nor:function()
				{
					var len = this.len();
					if(len < 0.00000001 && len > -0.00000001)
					{
						return this;
					}

					return Class.nDotVec(1/len, this);
				},
		};
	}

	Class.matrix = function(
							m00, m01, m02, m03, 
							m10, m11, m12, m13, 
							m20, m21, m22, m23, 
							m30, m31, m32, m33
							)
	{
		return {
			m00:m00, m01:m01, m02:m02, m03:m03,
			m10:m10, m11:m11, m12:m12, m13:m13, 
			m20:m20, m21:m21, m22:m22, m23:m23, 
			m30:m30, m31:m31, m32:m32, m33:m33,

			row:function(i)
			{
				var k = "m"+i;
				return Class.vector(this[k+0], this[k+1], this[k+2], this[k+3]);
			},
			setRow:function(i, v)
			{
				var k = "m"+i;
				this[k+0]=v.x;
				this[k+1]=v.y;
				this[k+2]=v.z;
				this[k+3]=v.w;
			},
			col:function(i)
			{
				return Class.vector(this["m0"+i], this["m1"+i], this["m2"+i], this["m3"+i]);
			},
			setCol:function(i, v)
			{
				this["m0"+i]=v.x;
				this["m1"+i]=v.y;
				this["m2"+i]=v.z;
				this["m3"+i]=v.w;
			},
			transpose:function()
			{
				return Class.matrix(
							this.m00, this.m10, this.m20, this.m30,
							this.m01, this.m11, this.m21, this.m31,
							this.m02, this.m12, this.m22, this.m32,
							this.m03, this.m13, this.m23, this.m33
						);
			}
		}
	}

	Class.matrixFromRows = function(r0, r1, r2, r3)
	{
		return this.matrix(
			r0.x, r0.y, r0.z, r0.w,
			r1.x, r1.y, r1.z, r1.w,
			r2.x, r2.y, r2.z, r2.w,
			r3.x, r3.y, r3.z, r3.w
			);
	}

	Class.matrixFromClos = function(c0, c1, c2, c3)
	{
		return this.matrix(
			c0.x, c1.x, c2.x, c3.x,
			c0.y, c1.y, c2.y, c3.y,
			c0.z, c1.z, c2.z, c3.z,
			c0.w, c1.w, c2.w, c3.w
			);
	}

	Class.nDotVec = function(n, v)
	{
		return this.vector(n*v.x, n*v.y, n*v.z, v.w);
	}

	Class.vecInterpVec = function(s, v0, v1)
	{
		// v0+(v1-v0)*s

		return this.vecAddVec(v0, this.nDotVec(s, this.vecMinVec(v1, v0)));
	}

	Class.vecAddVec = function(v0, v1)
	{
		return this.vector(v0.x+v1.x, v0.y+v1.y, v0.z+v1.z, v0.w);
	}

	Class.vecMinVec = function(v0, v1)
	{
		return this.vector(v0.x-v1.x, v0.y-v1.y, v0.z-v1.z, v0.w);
	}

	Class.vecDotVec = function(v0, v1)
	{
		return v0.x*v1.x+v0.y*v1.y+v0.z*v1.z+v0.w*v1.w;
	}

	Class.vecCroVec = function(v0, v1)
	{
		return this.vector(v0.y*v1.z-v0.z*v1.y, v0.z*v1.x-v0.x*v1.z, v0.x*v1.y-v0.y*v1.x, v0.w);
	}

	Class.nDotMat = function(n, m)
	{
		return this.matrix(
			n*m.m00, n*m.m01, n*m.m02, n*m.m03,
			n*m.m10, n*m.m11, n*m.m12, n*m.m13,
			n*m.m20, n*m.m21, n*m.m22, n*m.m23,
			n*m.m30, n*m.m31, n*m.m32, n*m.m33
			);
	}

	Class.vecDotMat = function(v, m)
	{
		return this.vector(
					this.vecDotVec(v, m.col(0)), 
					this.vecDotVec(v, m.col(1)), 
					this.vecDotVec(v, m.col(2)), 
					this.vecDotVec(v, m.col(3))
					);
	}

	Class.matDotMat = function(m0, m1)
	{
		return this.matrixFromRows(
					this.vector(this.vecDotVec(m0.row(0), m1.col(0)), this.vecDotVec(m0.row(0), m1.col(1)), this.vecDotVec(m0.row(0), m1.col(2)), this.vecDotVec(m0.row(0), m1.col(3))),
					this.vector(this.vecDotVec(m0.row(1), m1.col(0)), this.vecDotVec(m0.row(1), m1.col(1)), this.vecDotVec(m0.row(1), m1.col(2)), this.vecDotVec(m0.row(1), m1.col(3))),
					this.vector(this.vecDotVec(m0.row(2), m1.col(0)), this.vecDotVec(m0.row(2), m1.col(1)), this.vecDotVec(m0.row(2), m1.col(2)), this.vecDotVec(m0.row(2), m1.col(3))),
					this.vector(this.vecDotVec(m0.row(3), m1.col(0)), this.vecDotVec(m0.row(3), m1.col(1)), this.vecDotVec(m0.row(3), m1.col(2)), this.vecDotVec(m0.row(3), m1.col(3)))
					);
	}

	Class.matRotate_x = function(d)
	{
		var r = this.degToRad(d);
		var s = Math.sin(r);
		var c = Math.cos(r);

		return this.matrix(
			1, 0, 0, 0,
			0, c, s, 0, 
			0, -s, c, 0,
			0, 0, 0, 1
			);
	}

	Class.matRotate_y = function(d)
	{
		var r = this.degToRad(d);
		var s = Math.sin(r);
		var c = Math.cos(r);

		return this.matrix(
			c, 0, -s, 0,
			0, 1, 0, 0, 
			s, 0, c, 0,
			0, 0, 0, 1
			);
	}

	Class.matRotate_z = function(d)
	{
		var r = this.degToRad(d);
		var s = Math.sin(r);
		var c = Math.cos(r);

		return this.matrix(
			c, s, 0, 0,
			-s, c, 0, 0, 
			0, 0, 1, 0,
			0, 0, 0, 1
			);
	}

	Class.matRotate_vd = function(v, d)
	{
		if(this.is0(v.y) && this.is0(v.z))
		{
			return this.matRotate_x(d);
		}
		else if(this.is0(v.x) && this.is0(v.z))
		{
			return this.matRotate_y(d);
		}
		else if(this.is0(v.x) && this.is0(v.y))
		{
			return this.matRotate_z(d);
		}

		// Make a new coordnation
		var vX = v;
		var vZ = this.vecCroVec(vX, this.Y);
		var vY = this.vecCroVec(vZ, vX);

		vX = vX.nor();
		vZ = vZ.nor();
		vY = vY.nor();

		var A = this.matRotate_x(d);
		var T = this.matrixFromRows(vX, vY, vZ, this.vector(0, 0, 0, 1));
		var T_ = T.transpose();

		return this.matDotMat(this.matDotMat(T_, A), T);
	}

	Class.matScale = function(sx, sy, sz)
	{
		return this.matrix(
			sx, 0, 0, 0,
			0, sy, 0, 0,
			0, 0, sz, 0,
			0, 0, 0, 1
		);
	}

	Class.matTranslation = function(vec)
	{
		return this.matrix(
			1, 0, 0, 0,
			0, 1, 0, 0, 
			0, 0, 1, 0, 
			vec.x, vec.y, vec.z, 1
		);
	}

	Class.matView = function(eyeAt, lookAt, vUp)
	{
		var vZ = this.vecMinVec(lookAt, eyeAt);
		var vX = this.vecCroVec(vUp, vZ);
		var vY = this.vecCroVec(vZ, vX);

		vZ = vZ.nor();
		vZ.w = 0;
		vX = vX.nor();
		vX.w = 0;
		vY = vY.nor();
		vY.w = 0;

		var m = this.matrixFromClos(vX, vY, vZ, this.vector(0, 0, 0, 1));
		m.setRow(3, this.nDotVec(-1, eyeAt));
		m.m33 = 1;

		return m;
	}

	Class.matProjection = function(hDegree, vDegree, nearZ, farZ)
	{
		var ha = this.degToRad(hDegree);
		var va = this.degToRad(vDegree);
		return this.matrix(
			1/Math.tan(ha*0.5), 0, 0, 0,
			0, 1/Math.tan(va*0.5), 0, 0,
			0, 0, farZ/(farZ-nearZ), 1,
			0, 0, -farZ*nearZ/(farZ-nearZ), 0
		);
	}

	Class.matViewport = function(w, h)
	{
		return this.matrix(
			0.5*w, 0, 0, 0,
			0, -0.5*h, 0, 0,
			0, 0, 1, 0,
			0.5*w, 0.5*h, 0, 1
		);
	};

	Class.E = Class.matrix(
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	);

	Class.PI = Math.PI;

	Class.X = Class.vector(1, 0, 0);
	Class.Y = Class.vector(0, 1, 0);
	Class.Z = Class.vector(0, 0, 1);


	Class.degToRad = function(deg)
	{
		return deg*this.PI/180;
	}

	Class.radToDeg = function(rad)
	{
		return rad*180/this.PI;
	}

	Class.is0 = function(v)
	{
		return v > -0.00000001 && v < 0.00000001;
	}

	return Class;
});