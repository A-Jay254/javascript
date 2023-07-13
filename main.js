document.getElementById("heading").innerText = "Hello World";
document.getElementById("paragraph").innerText = "JavaScript 101";
document.getElementById("anchor").innerText = "Adventure";
document.getElementById("image").src = "hal2.jpg";
document.getElementById("heading").style .color = "green";
document.getElementById("heading").style .fontSize = "50px";
document.getElementById("heading").style .fontStyle = "italic";
document.getElementById("paragraph").style .fontSize = "20px";
document.getElementById("paragraph").style .color = "red";
document.getElementById("anchor").style .textDecoration = "none";
document.getElementById("anchor").style .fontSize = "30px";
document.getElementById("anchor").style .color = "blue";
document.getElementById("image").style .width = "400px";
document.getElementById("image").style .height = "300px";
document.getElementById("image").style .borderRadius = "30px";
document.getElementById("image").style .marginLeft = "400px";
document.getElementById("image").style .boxShadow = "0px 5px 5px 10px turquoise";

document.getElementById("click").onclick = function (){
    document.getElementById('demo').innerText = Date()
}
document.getElementById("demo").style .color = "red";


let firstName="James"
let secondName="Ngugi"
let lastName="Mwaniki"


let fullName= firstName + " " + secondName + " " + lastName

document.getElementById("firstName").innerText= firstName;
document.getElementById("secondName").innerText= secondName;
document.getElementById("lastName").innerText= lastName;
document.getElementById("fullName").innerText= fullName;


document.getElementById("firstName").style .color = "blue";
document.getElementById("secondName").style .color = "red";
document.getElementById("lastName").style .color = "purple";


// OPERATORS
let string1=10
let string2=20
console.log(string1+string2)
string1="10"
string2="20"
console.log(string1+string2)
string1=20
string2="500"
console.log(string1+string2)
string1=30
string2=40
console.log(string2-string1)
console.log(string1*string2)
console.log(string1/string2)


// equality operator (==) checks equality of value
string1=500
string2=500
console.log(string1==string2)

// equality operator (===) checks equality of value and type
string1=500
string2="500"
console.log(string1===string2)
console.log(string1)
console.log(string2)

// greater than (>) 
string1=20
string2=40
console.log(string1>string2)
console.log(string1<string2)

// less than (<)
console.log(string1<string2)
console.log(string2<string1)

// greater than or equal to (>=)
console.log(string1>=string2)
console.log(string2>=string1)

// AND (&&)
console.log(string1<string2 && string2>string1)
console.log(string2<=string1 && string2>string1)

// OR (||)
console.log(string1<string2 || string2>string1)
console.log(string2<=string1 || string2>string1)

// DATA TYPES
/* 
Boolean
number
undefined
null
bigint
symbol
object
string
*/ 
