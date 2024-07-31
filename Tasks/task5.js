fetch('resume.json')
  .then(response => response.json())
  .then(data =>{
   //for in loop.The data is in object .It will work
   for(const key in data){
    let value=data[key];
    console.log(key,value);
   }
   //for of loop.It wont work as the data is an object and not an array
   for(const key of data){
    let value=data[key];
    console.log(key,value);
   }
   //for each wont get executed as the data is in object and not an array
   Object.keys(data).forEach(element => {
    console.log(element,data[element]);
   });
   
  //traditional for loop wont get exected as the data is in object and not an array
  for(const i=0;i<data.basics.length;i++){
    console.log(data.basics[i]);
  }
  }
  )
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

