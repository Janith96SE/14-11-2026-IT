// let x= Math.floor(Math.random ()* 10)+1 ;
// console.log(x);

// function btnSubmitGuessNumOnAction(){


//     if(txtGuess.value==x){
        
//         Swal.fire({
//         title: "Guessing Corected...!!!",
//         width: 600,
//         padding: "3em",
//         color: "#070523",
//         background: "#fff url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3M2azB2NTVoZnY1OWtwZGtsZGw1dzJyNHo0Y3F1MGNlMG8ycmptcCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/HaY3ifBcnUuESLh7bX/giphy.gif')",
//         backdrop: `
//         rgba(236, 236, 244, 0.4)
//         url("/images/nyan-cat.gif")
//         left top
//         no-repeat
//   `
// });

//     }else{
//        Swal.fire({
//         title: "try Again!",
//         color: "#070523",
//         icon: "error",
//         draggable: true,
//         background: "#fff url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXJhYTB2bnZub2g1bzg4bHducWYzbHl2azU3bnIzaDd4b3Bqd3N2aCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/vbqr9NgKRuKq7meXsi/giphy.gif')"
        
//         });
//     }
// resetSubmitedOnAction()
// }


// function resetSubmitedOnAction(){

//     txtGuess.value="";

// }


let customer=["Nimal","Amal","Kamal"];
console.log(customer);
console.log(typeof customer);

customer= "Kavindu"; // you can see in local host, it will get the current type  Kavindu & it will declare in String

// customer.push("Kavindu");


console.log(customer);
console.log(typeof customer);

// 

const Student = ["Sirimal","Kaveen","Lal"];
console.log(Student);

Student="Nimesh"; // you can see in local host you couldn't see anything
// Student.push("Nimesh");

console.log(Student);

//When you use let,it will flexible to get what you make type or value but when you use 
//const you couldn't able to change the type or value during the defind the objects therfore 
//use the const when you create array, reason is When you after creating the array unfortunately it will 
// defined with some other type (eg:String ,int) you couldn't change that but let immidetely get what you 
//created in last

