public class Circle extends Shape{
    public Decimal radius;

    public Circle(Decimal r){
        radius = r;
    }

    public override Decimal area(){
        return Math.PI * radius * radius;
    }

}