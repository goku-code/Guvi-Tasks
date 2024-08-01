fetch('resume.json')
  .then(response => response.json())
  .then(data =>{
   for(const key in data){
    let value=data[key];
    console.log(key,value);
   }
   console.log("Using for of method:");
   for (const [key, value] of Object.entries(data)) {
    console.log(key, value);
    if (Array.isArray(value)) {
      for (const item of value) {
        console.log(item);
      }
    }
  }
  console.log("Using forEach method:");
   Object.keys(data).forEach(element => {
    console.log(element,data[element]);
   });
   
   console.log("Using Traditional for loop method:");
  let keys=Object.keys(data);
  for(let i=0;i<keys.length;i++){
    console.log(keys[i],data[keys[i]]);
  }
  }
  )
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

