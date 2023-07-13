let a = 20
let b = 10
if(a<b)[
    console.log("monday")
]
else if(a>b)[
    console.log("today")
]
let stop = "blue"
let wait = "white"
let go = "green"
if(stop=="red" && wait!="amber" && go!="green")[
    console.log("STOP")
]

else if(wait=="amber" && go!="green" && stop!="red")[
    console.log("WAIT")
]
else if(go=="green" && stop!="red" && wait!="amber")[
    console.log("GO")
]


/*TASK 2: CHECK AGE - DETERMINE INCOME
0 - 17 ==> allowance
18 - 22 ==>stipend
23 - 65 ==> salary
Above 65  ==> pension
*/

document.getElementById("submit").onclick=function(){
    let age = document.getElementById("age").value
    let income = document.getElementById("income").value
    if (age>0 && age<=17){
        document.getElementById("salary").innerText="Allowance is: " + income
    }
    else if (age>=18 && age<=22){
        document.getElementById("salary").innerText="Stipend is: " + income
    }
    else if (age>=23 && age<=65){
        document.getElementById("salary").innerText="Salary is: " + income
    }
    else if (age>65){
        document.getElementById("salary").innerText="Pension is: " + income
    }
}



// TASK 3:
/*
promocode = KARIBU then discount = 25%
only applicable if purchase is above 20,000
for purchases above 50,000 additionl discount = 2%
for purchases above 100,000 additional discount = 5%

promocode = Nairobi then discount = 15%
applicable if purchase is above 10,000
*/

document.getElementById("enter").onclick=function(){
        let promocode=document.getElementById("promocode").value
        let purchase=document.getElementById("purchase").value
        if (promocode == "karibu" && purchase >= 20000){
             let discount= 0.25
             if (promocode == "karibu" && purchase>= 50000){
                discount += 0.02
           }
           else if (promocode == "karibu" && purchase>=100000){
            discount += 0.05
           }
           let amount=purchase-(purchase*discount)
           document.getElementById("amount").innerText=amount
        }

        else if (promocode == "nairobi" && purchase >= 10000){
          let  discount= 0.15
          if (promocode == "nairobi" && purchase>= 50000){
            discount += 0.02
       }
       else if (promocode == "nairobi" && purchase>=100000){
        discount += 0.05
       }
       let amount=purchase-(purchase*discount)
       document.getElementById("amount").innerText=amount
        }
                  
}

document.getElementById("purchase").style .backgroundColor = "purple";
document.getElementById("promocode").style .backgroundColor = "purple";
document.getElementById("promocode").style .fontColor = "white";
document.getElementById("promocode").style .fontColor = "white";
