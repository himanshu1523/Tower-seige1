class Sling{
constructor(body,point){
var options={
    bodyA: body,
    pointB: point,
    stiffness:0.1,
    length:15
}
this.sling=Matter.Constraint.create(options);
World.add(world,this.sling);
}
display(){
if(this.sling.bodyA){
var pointA=this.sling.bodyA.position

stroke("green");
strokeWeight(4);
line(pointA.x,pointA.y,this.sling.pointB.x,this.sling.pointB.y);
 }
}
}
