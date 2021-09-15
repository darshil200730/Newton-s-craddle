class Ball {
    constructor(x,y,r){
        var features = {
            isStatic : false, restitution:0
          
          }
          this.ball = Bodies.circle (x,y,r/2,features)
          World.add(myWorld,this.ball)
          this.r = r
         
    }
    display()
    {       
        push ()
        translate (this.ball.position.x , this.ball.position.y)
        rotate (this.ball.angle)
        ellipseMode(CENTER)
 ellipse(0,0,50,50)
 pop ()
    }
}