public class Car {
    public String brand;
    public Integer year;

    public Car(String b, Integer y){
        brand = b;
        year = y;
    }

    public void displayInfo(){
        System.debug('Car: ' + brand + ', Year: ' + year);
    }
}