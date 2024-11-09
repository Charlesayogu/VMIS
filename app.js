document.getElementById("vehicle-search-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the value of the input
  const plateNumber = document.getElementById("plate-number").value;

  // Dummy data for demonstration
  const vehicleData = {
    "ABC-1234": {  
      ownerName: "John Doe",
      carModel: "Toyota Camry",
      license: "DL-5678"
    },
    "XYZ-5678": {
      ownerName: "Jane Smith",
      carModel: "Honda Accord",
      license: "DL-9876"
    }
  };

  // Check if the plate number exists in our dummy data
  if (vehicleData[plateNumber]) {
    // Display vehicle details
    document.getElementById("vehicle-details").classList.remove("hidden");
    document.getElementById("display-plate-number").textContent = plateNumber;
    document.getElementById("display-owner-name").textContent = vehicleData[plateNumber].ownerName;
    document.getElementById("display-car-model").textContent = vehicleData[plateNumber].carModel;
    document.getElementById("display-license").textContent = vehicleData[plateNumber].license;
  } else {
    alert("No details found for this plate number.");
  }
});

// CAR REGISTRATION
function submitForm() {
  let driver = document.getElementById("driver-name");
  if (driver.value === "") {
    driver.focus()
  }
  else {
    alert(driver.value + " uploaded successfully");
    driver.value = ''
  }
}
