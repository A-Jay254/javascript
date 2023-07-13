let a=10
a++
console.log(a)

for(var i=0; i<=10; i++){
    console.log(i)
}

// display the day of the week
// do this for four weeks
// display the day

for(var w=1; w<=4; w++){
    console.log(" ")
    console.log("Week " + w)
    for(var d=1; d<=7; d++){
        if(d==1){
            console.log("Monday")
        }
        else if(d==2){
            console.log("Tuesday")
        }
        else if(d==3){
            console.log("Wednesday")
        }
        else if(d==4){
                    console.log("Thursday")
                }
        else if(d==5){
            console.log("Friday")
        }
        else if(d==6){
            console.log("saturday")
        }
        else {
            console.log("Sunday")
        }
    }
}

/*
CREATE THE MULTIPLICATION TABLE FROM 1 TO 19
OUTPUT IN THE BELOW FORMAT

MULTIPLICATION TABLE FOR 1
1 X 1 = 1
1 X 2 = 2 ................

*/

for(m=1; m<=19; m++){
    console.log(" ")
    console.log("MULTIPLICATION TABLE FOR " + m)
    for(n=1; n<=19; n++){
        console.log(m + " x " + n + " =  " + m * n)
        document.getElementById("para").innerText = (m + " x " + n + " =  " + (m * n))
    }
}