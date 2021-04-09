class Box{
    constructor(x,y){
    
    var option = {
        restitution : 0.8,
        density : 0.3,
        friction : 1


    }

    
    this.body = Bodies.rectangle(x,y,70,70,option);
    this.width = 70;
    this.height = 70;

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