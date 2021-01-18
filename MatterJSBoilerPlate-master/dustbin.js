class dustbin
{
	constructor(x,y)
	{
		this.x=x;
        this.y=y;
        this.image=loadImage("dustbingreen.png")
		this.dustbinWidth=400;
		this.dustbinHeight=400;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.dustbinHeight,{isStatic:true})
		World.add(world, this.bottomBody)

	}
	display()
	{
			var posBottom=this.bottomBody.position;

			

			
			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			image(this.image,0,0,this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}