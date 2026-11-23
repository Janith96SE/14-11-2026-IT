let x= Math.floor(Math.random ()* 10)+1 ;
console.log(x);

function btnSubmitGuessNumOnAction(){


    if(txtGuess.value==x){
        
        Swal.fire({
        title: "Guessing Corected...!!!",
        width: 600,
        padding: "3em",
        color: "#070523",
        background: "#fff url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3M2azB2NTVoZnY1OWtwZGtsZGw1dzJyNHo0Y3F1MGNlMG8ycmptcCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/HaY3ifBcnUuESLh7bX/giphy.gif')",
        backdrop: `
        rgba(236, 236, 244, 0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
  `
});

    }else{
       Swal.fire({
        title: "try Again!",
        color: "#070523",
        icon: "error",
        draggable: true,
        background: "#fff url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXJhYTB2bnZub2g1bzg4bHducWYzbHl2azU3bnIzaDd4b3Bqd3N2aCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/vbqr9NgKRuKq7meXsi/giphy.gif')"
        
        });
    }
resetSubmitedOnAction()
}


function resetSubmitedOnAction(){

    txtGuess.value="";

}


// let customer=["Nimal","Amal","Kamal"]
// console.log(customer);
// console.log(typeof customer);

// customer= "Kavindu";

// console.log(customer);
// console.log(typeof customer);
