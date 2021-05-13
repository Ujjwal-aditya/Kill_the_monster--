class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.visibility = 255
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			console.log(this.speed);
			if(this.speed>1)
			{
				push();		
				translate(pos.x, pos.y-100);
				Wourld.remove(world,this.body);
				image(this.image, 0,0,this.r, this.r);
				tint(255,this.visibility);
				this.visibility = this.visibility - 20;	
				imageMode(CENTER);			
				// removes last element from Array
				pop();
			
			}	
			else
			{
				push();
				translate(pos.x, pos.y-100);				
				image(this.image, 0,0,this.r, this.r);	
				imageMode(CENTER);			
				pop();
			}
			
	}
}
