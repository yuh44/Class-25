class Log extends BaseClass{
    constructor(x, y, height, angle) {
        super(x,y,20,height,angle)
        Matter.Body.setAngle(this.body, angle);//PI : 180 degrees
        this.image = loadImage('sprites/wood2.png')
    }

};
