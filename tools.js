function fertilizerCalc() {
  let area = document.getElementById("area").value;

  if(area === "" || area <= 0){
    document.getElementById("fertilizerResult").innerText =
      "Please enter valid land area";
    return;
  }

  let fertilizer = area * 50; // example: 50kg per acre

  document.getElementById("fertilizerResult").innerText =
    "Recommended Fertilizer: " + fertilizer + " kg";
}

function cropCalendar() {
  let crop = document.getElementById("calendarCrop").value;

  let message = "";

  if(crop === "Wheat"){
    message = "Sowing: Oct-Nov | Harvest: Mar-Apr";
  }
  else if(crop === "Rice"){
    message = "Sowing: Jun-Jul | Harvest: Oct-Nov";
  }
  else if(crop === "Maize"){
    message = "Sowing: Jul-Aug | Harvest: Oct-Nov";
  }
  else{
    message = "Please select a crop";
  }

  document.getElementById("calendarResult").innerText = message;
}

function costCalc() {
  let area = document.getElementById("costArea").value;

  if(area === "" || area <= 0){
    document.getElementById("costResult").innerText =
      "Enter valid area";
    return;
  }

  let cost = area * 12000; // example average cost per acre

  document.getElementById("costResult").innerText =
    "Estimated Cost: ₹" + cost;
}

function yieldCalc() {
  let area = document.getElementById("yieldArea").value;

  if(area === "" || area <= 0){
    document.getElementById("yieldResult").innerText =
      "Enter valid area";
    return;
  }

  let yield = area * 1800; // kg per acre average

  document.getElementById("yieldResult").innerText =
    "Estimated Yield: " + yield + " kg";
}
