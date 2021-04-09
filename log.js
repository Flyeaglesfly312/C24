class Log{
    constructor(x,y,height,angle){
    
    var option = {
        restitution : 0.8,
        density : 0.3,
        friction : 1
    }

    
    this.body = Bodies.rectangle(x,y,20,height,option);
    this.width = 20;
    this.height = height;
   
    Matter.Body.setAngle(this.body, angle);

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
        stroke("green");
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
    }
        
}