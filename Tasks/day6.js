fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.continent === "Asia" || country.region === "Asia");

    console.log("Asian Countries");
    asianCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}`);
    });


    console.log("Population less than 2 lakh");
    const population=data.filter(country=>country.population<200000);
    population.forEach(country=>{
        console.log(`${country.name.common}:${country.population}`);
    })


    console.log("name,flag,capital using forEach");
    data.forEach(country=>{
      console.log(country.name,country.capital,country.flag);
    });

 console.log("Total population");
 const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
 console.log("\nTotal Population:", totalPopulation);


 console.log("\nCountries using US Dollars (USD):");

const countriesUsingUSD = data.filter(country => {
  return country.currencies && country.currencies.USD;
});

countriesUsingUSD.forEach(country => {
  console.log(`${country.name.common} - ${country.currencies.USD.name}`);
});


})
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  
