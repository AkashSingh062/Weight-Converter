document.getElementById("output").style.visibility = "hidden";
document.getElementById("input").addEventListener("input", function (e) {
    let kg = e.target.value;
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("grams-output").innerHTML = kg * 1000;
    document.getElementById("lbs-output").innerHTML = kg * 2.20462;
    document.getElementById("oz-output").innerHTML = kg * 35.274;
});