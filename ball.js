class Ball{
    constructor(x,y,r,options,color){
    
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r+r;
        // this.image = loadImage("paper.png");
        this.col = color;
    }
    fly(){
      
    }
    update(){
        if(keyWentDown(RIGHT_ARROW)){
            Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},{x:0,y:10});
        }
    }
    

    display()
    {   
        let  r = 1;
      //  if(keyDown("r")){
        //    World.remove(world,this.body);
          //  r = 0;
       /// }
       
        let pos  =this.body.position;
        let angle = this.body.angle;
        //if(r === 1){
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill(this.col);
            strokeWeight(5);
            stroke("ghostWhite");
            ellipse(0,0,this.r);
            //scale(10);
        pop();
//        }
    }
}