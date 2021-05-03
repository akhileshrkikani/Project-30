class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      this.visibility=255
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed<3){
        var pos= this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop()
        }
      else{
        World.remove(world,this.body)
        push()
      
      this.visibility=this.visibility-10
      tint(255,this.visibility)
      
      pop()
      
      }
    }
  }
