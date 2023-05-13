function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightInMeters = height / 100;
  let BMI = weight / heightInMeters ** 2;

  alert(BMI);

  let BMIstate;
  if (BMI < 18.5) {
    BMIstate = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    BMIstate = "Healthy Weight";
  } else if (BMI >= 25 && BMI <= 29.9) {
    BMIstate = "Overweight";
  } else {
    BMIstate = "Obesity";
  }
  alert(BMIstate);

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  } else {
    if (BMI >= 24 && BMI <= 29) {
      BMIstate = "Healthy";
    } else {
      BMIstate = "Not Healthy";
    }
  }

  alert(BMIstate);
}
