class Movie{//Created Movie Class
  constructor(title,studio,rating="PG"){//constructor created
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}}
//Instances of Movie Class
const casinoRoyale=new Movie("Casino Royale", "Eon Productions", "PG-13");
const toyStory = new Movie("Toy Story", "Pixar", "PG");
const findingNemo = new Movie("Finding Nemo", "Pixar", "PG");
const theDarkKnight = new Movie("The Dark Knight", "Warner Bros", "PG-13");


const movies = [casinoRoyale, toyStory, findingNemo, theDarkKnight];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);//to print an array of Movies where rating is PG

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
  