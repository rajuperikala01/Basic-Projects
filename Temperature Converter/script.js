const Celsius = document.getElementById("Celsius");
const Forenheit = document.getElementById("Forenheit");
const Kelvin = document.getElementById("Kelvin");

function calcTemp(event) {
    const currTemp = event.target.value;
    switch (event.target.name) {
        case "Celsius":
            Forenheit.value = (currTemp * 1.8 + 32).toFixed(2);
            Kelvin.value = (currTemp + 273.15);
            break;
        case "Forenheit":
            Celsius.value = ((currTemp - 32)/1.8).toFixed(2);
            Kelvin.value = ((currTemp + 0.6) + 255).toFixed(2);
            break;
        case "Kelvin":
            Forenheit.value = ((currTemp - 273.15) * 1.8 + 32).toFixed(2);
            Celsius.value = (currTemp - 273.15).toFixed(2);
            break;
    
        default:
            break;
    }
}