class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

};

class Car extends Vehicle{
    constructor(a,b,c){
        super(a,b,c);
        super.numWheels = 4;
    }
};

class Motorcycle extends Vehicle{
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(size){
        this.vehicles = new Set();
        this.size = size;
    }

    add(car){
        if (this.vehicles.size <= this.size){
            return "Sorry, we're full.";
        };
        if (car instanceof Vehicle){
            this.vehicles.add(car);
        }else{return "Only vehicles are allowed in here!"}
    };
    
};