class Point{
    constructor(x,y){
        this.x=x,
        this.y=y
    };

    static distance(point1,point2){
        let a=Math.pow(point1.x-point2.x,2);
        let b=Math.pow(point1.y-point2.y,2);
        let distance=Math.sqrt(a+b);

        return distance;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
