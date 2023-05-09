function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightinmeter = height / 100;
  let BMI = (weight / heightinmeter) * heightinmeter;

  if (BMI < 18.5) {
    alert("Underweight");
  } else if (BMI > 18.5 && BMI < 24.9) {
    alert("Healthy Weight");
  } else if (BMI > 25.0 && BMI < 29.9) {
    alert("Overweight");
  }
  if (BMI > 30.0) {
    alert("Above Obesity");
  }



  // if age 19-24 
  // if yes -> if BMI 19-24
      // if yes print healthy 
      // else not healthy 
  // else if age 25-34

  if(age>=19 && age <=24){
    if(BMI>=19&&BMI<=24){
      console.log("Healthy")
    }else{
      console.log("Unhealthy")
    }



  }
// if age 25-34
// if yes - > if BMI 20-25
// if yes print healthy
// else not healthy 
// else if age 25-34
  if(age>=25&&age<=34){
    if(BMI>=20&&BMI<=25){
      console.log("Healthy")
      console.log("Unhealthy")

     // if age 35-44
     // if yes - > if BMI 21-26
     // if yes print healthy 
     // else not healthy 
     // else if age 35-44

     if(age>=35&&age<=44{
      if(BMI>=21&&BMI<=26){
        console.log("Healthy")
        console.log("Unhealthy")


        
     // if age 45-54
     // if yes - > if BMI 22-27
     // if yes print healthy 
     // else not healthy 
     // else if age 45-54

     
     if(age>=45&&age<=54{
      if(BMI>=22&&BMI<=27){
        console.log("Healthy")
        console.log("Unhealthy")

         // if age 55-64
     // if yes - > if BMI 23-28
     // if yes print healthy 
     // else not healthy 
     // else if age 55-64

     if(age>=55&&age<=64{
      if(BMI>=23&&BMI<=28){
        console.log("Healthy")
        console.log("Unhealthy")

        // if age>65
     // if yes - > if BMI 24-29
     // if yes print healthy 
     // else not healthy 
     // else if age >65

     if(age>65){
     if(BMI>=24&&BMI<=29)
     console.log("Healthy")
     console.log("Unhealthy")

      
      





     
     






     

      


}
