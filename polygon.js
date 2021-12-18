class Polygon{
    constructor(x,y,r){
        var options={
            restitution:0.1,
            friction:1,
        }
            this.x=x;
            this.y=y;
            this.radius=r;
            
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image=loadImage("polygon.png");
    }
display(){
push()
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop()
}
}
