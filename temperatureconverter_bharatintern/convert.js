function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerHTML = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
}

function convertToFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("celsius").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
}