class Pig{
    constructor(x,y){
    
    var option = {
        restitution : 0.8, 
        density : 0.3,
        friction : 0.2

    }

    
    this.body = Bodies.rectangle(x,y,50,50,option);
    this.width = 50;
    this.height = 50;

    World.add(myWorld,this.body);
    }
    
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        angleMode(RADIANS);
        //line number 22 only works for some systems and some systems don't even need the line
        //angleMode(DEGREES);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("lime");
        rect(0,0,this.width,this.height);
        pop();
    }
        
}