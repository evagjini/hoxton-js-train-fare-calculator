

let age = Number(promt("What's your age?"))
let distance = Number(promt("How far are you traveling?"))



 

let pricePerTravelKm = 0.21
let basicPrice = pricePerTravelKm*distance

// calculating discount price 

let taxUnder18 = 0.8
let taxOver65 =  0.6

let discountPrice;

  if (age <=18){ 

    discountPrice = basicPrice - (taxUnder18*basicPrice)
    console.log("You will pay :"  + "£ " + discountPrice)
}
   
else if (age>=65){

      discountPrice = basicPrice -(taxOver65*basicPrice)
      console.log("You will pay :"  + "£ " + discountPrice)

    }

     else {
      discountPrice = pricePerTravelKm
      console.log("You will pay :"  + "£ " + discountPrice)
    } 


console.log(discountPrice)


// console.log(`
//    overall Price : ${pricePerTravelKm.toFixed(2)}£ 
   

//     Discount Price:
    
//     - Juniors Passager : ${taxUnder18.toFixed(2)}£ 
//     -  Senior Passager : ${taxOver65.toFixed(2)}£ 
//     -  Passagers Between 19-64: ${pricePerTravelKm.toFixed(2)}£ 

// `)