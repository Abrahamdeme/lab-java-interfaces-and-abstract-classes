
// BigDecimal Operations

package com.abrahamironhack;
import java.math.BigDecimal;
import java.math.RoundingMode;

class BigDecimalClass {


    public static BigDecimal reverseSignAndRound(BigDecimal number) {
        BigDecimal reversed = number.negate();
        BigDecimal rounded = reversed.setScale(1, RoundingMode.HALF_UP);
        return rounded;
    }

    public static void main(String[] args) {
        BigDecimal number1 = new BigDecimal("1.2345");
        BigDecimal number2 = new BigDecimal("-45.67");

        BigDecimal result1 = reverseSignAndRound(number1);
        BigDecimal result2 = reverseSignAndRound(number2);

        System.out.println("Reversed and rounded (1.2345): " + result1); 
        System.out.println("Reversed and rounded (-45.67): " + result2);  
    }
}
// end

// Car Inventory System

public abstract class Car {
    protected String vinNumber;
    protected String make;
    protected String model;
    protected int mileage;

    
    public Car(String vinNumber, String make, String model, int mileage) {
        this.vinNumber = vinNumber;
        this.make = make;
        this.model = model;
        this.mileage = mileage;
    }

   
    public String getInfo() {
        return "VIN: " + vinNumber + ", Make: " + make + ", Model: " + model + ", Mileage: " + mileage;
    }
}

public class UtilityVehicle extends Car {
    private boolean fourWheelDrive;
    
    public UtilityVehicle(String vinNumber, String make, String model, int mileage, boolean fourWheelDrive) {
        super(vinNumber, make, model, mileage);
        this.fourWheelDrive = fourWheelDrive;
    }

   
    @Override
    public String getInfo() {
        return "Utility Vehicle - " + super.getInfo() + ", Four-Wheel Drive: " + (fourWheelDrive ? "Yes" : "No");
    }
}

public class Truck extends Car {
    private double towingCapacity;

 
    public Truck(String vinNumber, String make, String model, int mileage, double towingCapacity) {
        super(vinNumber, make, model, mileage);
        this.towingCapacity = towingCapacity;
    }
    
    @Override
    public String getInfo() {
        return "Truck - " + super.getInfo() + ", Towing Capacity: " + towingCapacity + " tons";
    }
}

public class Main {
    public static void main(String[] args) {
        
        Sedan sedan = new Sedan("1HGCM82633A123456", "Honda", "Civic", 50000);
        System.out.println(sedan.getInfo());
        
        UtilityVehicle suv = new UtilityVehicle("2T1BURHE5JC123456", "Toyota", "RAV4", 35000, true);
        System.out.println(suv.getInfo());
        
        Truck truck = new Truck("1FDXF46S12EB12345", "Ford", "F-150", 60000, 5.0);
        System.out.println(truck.getInfo());
    }
}
// end

// Video Streaming Service
abstract class Video {
    protected String title;
    protected int duration;

    public Video(String title, int duration) {
        this.title = title;
        this.duration = duration;
    }

    public String getInfo() {
        return "Title: " + title + ", Duration: " + duration + " minutes";
    }
}


class TvSeries extends Video {
    private int episodes;

    public TvSeries(String title, int duration, int episodes) {
        super(title, duration);
        this.episodes = episodes;
    }


    @Override
    public String getInfo() {
        return super.getInfo() + ", Episodes: " + episodes;
    }
}


class Movie extends Video {
    private double rating;

    public Movie(String title, int duration, double rating) {
        super(title, duration);
        this.rating = rating;
    }

    // Override getInfo method to include rating
    @Override
    public String getInfo() {
        return super.getInfo() + ", Rating: " + rating;
    }
}


public class Main {
    public static void main(String[] args) {
        TvSeries series = new TvSeries("The Office", 22, 201);
        Movie movie = new Movie("Inception", 148, 8.8);

        System.out.println(series.getInfo());
        System.out.println(movie.getInfo());


}

}
// end