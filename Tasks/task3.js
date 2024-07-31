//1.to compare two objects without order
var obj1={name:"person 1",age:5};
var obj2={age:5,name:"person 1"};
function keys(obj1,obj2){
    let keys1=Object.keys(obj1);//store obj1 keys in keys1 variable
    let keys2=Object.keys(obj2);// store obj2 keys in keys2 variable
    if(keys1.length!==keys2.length){
        return false;          // false if length is not equal
    }
    for(let key of keys1){ // iterates through every keys in keys1 variable
        if(obj1[key]!==obj2[key]){// checks if obj1 key values is not equal to obj2 key values
            return false;
        }
    }
    return true;//return true if both object are equal.
}
console.log(keys(obj1,obj2));



//2.To display every countries flag in the console.
fetch('https://restcountries.com/v3.1/all') //to fetch the URL
  .then(response => response.json()) //.json will convert the JSON to javascript object 
  .then(data => {                   //this fuction handles the parsed data
    data.forEach(country => {// Iterates through each country object
    
      if (country.flags) { // check if the flag key is present
        console.log(country.name.common,country.flag);// to display the flags png in the console.
      } 
    });
  })
  .catch(error => {  // To handle the error during the process
    console.error('Error fetching countries:', error);
  });


//3.To display every countries name,region,subregion and population.
fetch('https://restcountries.com/v3.1/all') //to fetch the URL
  .then(response => response.json()) //.json will convert the JSON to javascript object 
  .then(data => {                   //this fuction handles the parsed data
    data.forEach(country => {// Iterates through each country object
    
      if (country.name && country.region && country.subregion && country.population) { 
        console.log(`Name :${country.name.common} Region :${country.region} Subregion :${country.subregion} Population :${country.population}`);
      }
    });
  })
  .catch(error => {  // To handle the error during the process
    console.error('Error fetching countries:', error);
  });


