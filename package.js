class package{

constructor(x,y,r){
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }

this.body=Bodies.circle(this.x,this.y,this.r/2,options);
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.body);

if(keyDown("DOWN_ARROW"))
{
   supply.velocityY=-2;
}

}

display(){
var pos =this.body.position;s
push();

translate(pos.pos.y)

pop();
}
}