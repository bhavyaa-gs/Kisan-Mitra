function getAdvisory(){

  let crop = document.getElementById("crop").value.toLowerCase();
  let soil = document.getElementById("soil").value;
  let season = document.getElementById("season").value;

  let result = document.getElementById("result");

  if(soil=="" || season==""){
    result.innerHTML = "⚠ Please select soil and season.";
    return;
  }

  let output="";

  // -------- WHEAT RULE --------
  if(crop=="wheat"){
    let soilOk = soil=="Loamy Soil";
    let seasonOk = season=="Rabi";

    output = `
    <img src="image/wheat.jpg" class="crop-img">
    🌾 Crop: Wheat<br>
    🧱 Soil: ${soilOk ? "✅ Suitable" : "❌ Best in Loamy soil"}<br>
    🌦 Season: ${seasonOk ? "✅ Suitable" : "❌ Best in Rabi season"}<br>
    💧 Water: Medium<br>
    🧪 Fertilizer: Nitrogen rich fertilizer
    `;
  }

  // -------- RICE RULE --------
  else if(crop=="rice"){
    let soilOk = soil=="Clay Soil" || soil=="Loamy Soil";
    let seasonOk = season=="Kharif";

    output = `
    <img src="image/rice.jpg" class="crop-img">
    🌾 Crop: Rice<br>
    🧱 Soil: ${soilOk ? "✅ Suitable" : "❌ Best in Clay/Loamy soil"}<br>
    🌦 Season: ${seasonOk ? "✅ Suitable" : "❌ Best in Kharif season"}<br>
    💧 Water: High<br>
    🧪 Fertilizer: Urea + DAP
    `;
  }

  // -------- RECOMMENDATION MODE --------
  else{
    if(season=="Kharif"){
      output = `
      🌱 Recommended Crops for your condition:<br><br>
      <img src="image/rice.jpg" class="crop-img">
      Rice<br><br>
      <img src="image/maize.jpg" class="crop-img">
      Maize
      `;
    }
    else if(season=="Rabi"){
      output = `
      🌱 Recommended Crops for your condition:<br><br>
      <img src="image/wheat.jpg" class="crop-img">
      Wheat<br><br>
      <img src="image/barley.jpg" class="crop-img">
      Barley
      `;
    }
    else{
      output="🌱 Crop data not available for selected season.";
    }
  }

  result.innerHTML = output;
}
