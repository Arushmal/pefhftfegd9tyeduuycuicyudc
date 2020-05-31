class helopter{

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            }
    
    this.body=Bodies.rectangle(this.x,this.y,this.r/2,options);
    this.x=x;
    this.y=y;
    this.r=r;
    World.add(world,this.body);
    
    
    }
    
    display(){
    var pos =this.body.position;s
    push();
    
    translate(pos.pos.y)
    rectMode(CENTER);
    strokeWeight(10);
    Fill(255,0,255)
    ellipse(0,0,this.r,this.r)
    pop();
    }
}