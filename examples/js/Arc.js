var Arc = {
	
	draw:function( cx, cy, startAngle, endAngle, radius, xOrientation ){
		
		//default value for parameter
		if(xOrientation === undefined) xOrientation = 0;
		//check for 360
		if(endAngle == 360) endAngle = 359.99999;

		var	self = this,
			
			delta = endAngle - startAngle,
			
			a1 = self.deg2rad( startAngle + xOrientation ),
            a2 = self.deg2rad( endAngle + xOrientation ),
            
	        x1 = cx + radius * Math.cos(a1),
            y1 = cy + radius * Math.sin(a1),
            x2 = cx + radius * Math.cos(a2),
            y2 = cy + radius * Math.sin(a2),
            
            color = "hsb(200,40,30)",
            path;

        var largeArc = (delta > 180) ? 1 : 0;
   		var sweep = (delta > 0) ? 1 : 0;

        path = [["M", x1, y1], ["A", radius, radius, 0, largeArc, sweep, x2, y2]];
        
        return path;
	},

    deg2rad:function(value){
    	
    	return value * Math.PI/180;

    }
}