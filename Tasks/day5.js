class Person{//Created Person Class 
    constructor(FirstName,Lastname,idnumber){//constructor created 
         this.FirstName=FirstName;//this keyword points to current object
         this.Lastname=Lastname;
         this.idnumber=idnumber;
    }
    name(){//name method created
        return `My name is ${this.FirstName} ${this.Lastname}`;
    }
    number(){//number method is created
        return `My ID number is ${this.idnumber}`;
    }
}
const obj=new Person("Virat","kholi",18);
console.log(obj.name());
console.log(obj.number());

// class to calculate the Uber price.
class UberPriceEstimator {
    constructor(baseRatePerKm, timeRatePerMinute, minimumFare) {
      this.baseRatePerKm = baseRatePerKm;
      this.timeRatePerMinute = timeRatePerMinute;
      this.minimumFare = minimumFare;
    }
  
    calculateFare(distanceInKm, estimatedTimeInMinutes) {
      const distanceCost = distanceInKm * this.baseRatePerKm;
      const timeCost = estimatedTimeInMinutes * this.timeRatePerMinute;
      const totalFare = distanceCost + timeCost;
      return Math.max(totalFare, this.minimumFare); 
    }
  }
  const estimator = new UberPriceEstimator(0.5, 0.2, 5);
  const fare = estimator.calculateFare(10, 15);
  console.log("Estimated fare:", fare.toFixed(2));
  