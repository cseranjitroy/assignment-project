
function showAge(){
    let age = document.getElementById("age").value
    let resultText = document.getElementById("result-text");
    let resultCard = document.getElementById("result-card");

    if(!isNaN(age)){
        age = Number(age);
    }
    if (age >=18){
        resultText.textContent = "You are adult";
    }else{
        resultText.textContent = "You are child";
    }
    resultCard.style.display = "block";  
}



//  Prompt the user to enter their age
// var age = prompt("Please enter your age:");

// // Check if the entered age is a valid number
// if (!isNaN(age)) {
//   // Convert age to a number
//   age = Number(age);

//   // Check if the age makes the person an adult or a child
//   if (age >= 18) {
//     alert("You are an adult!");
//   } else {
//     alert("You are a child!");
//   }
// } else {
//   // Handle the case where the entered value is not a number
//   alert("Please enter a valid age (a number).");
// }

       

    

