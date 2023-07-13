document.getElementById("submit").onclick = function(){
    let input=document.getElementById("input").value
    document.getElementById("output").innerText = input
    // output.innetText = input
}

document.getElementById("input2").onkeyup = function(){
    let input=document.getElementById("input2").value
    document.getElementById("output2").innerText = input
}

document.getElementById("input3").onkeydown = function(){
    let input=document.getElementById("input3").value
    document.getElementById("output3").innerText = input
}

document.getElementById("output4").onmouseenter = function(){
    document.getElementById("output4").innerText = "tuesday"
}

document.getElementById("select").onchange = function (){
    let option=document.getElementById("select").value
    document.getElementById("output5").innerText = option
}

onload = function (){
    alert("hello world")
}



