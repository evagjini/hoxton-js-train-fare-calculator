

let age = Number(promt("What's your age?"))
 
let distance = Number(promt("How far are you traveling?"))



 

let pricePerTravelKm = 0.21
let basicPrice = pricePerTravelKm*distance

// calculating discount price 

let taxUnder18 = 0.2
let taxOver65 =  0.4



  if (age <=18){ 
      const discountPrice = basicPrice - (taxUnder18*basicPrice)
}
   
else if (age>=65){

        const discountPrice = basicPrice -(taxOver65*basicPrice)

    }

     else {
    const discountPrice = pricePerTravelKm
    } 


console.log( discountPrice)


console.log(`
    Price : ${pricePerTravelKm.toFixed(2)}£ 
   

    Discount Price:
    
    - Passager Under 18 : ${taxUnder18.toFixed(2)}£ 
    - Passager Over 65: ${taxOver65.toFixed(2)}£ 


`)