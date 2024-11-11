// const testBtn = document.getElementById("test");


// testBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let myObj = {}
//     const form1 = document.getElementById("page1-form");
//     const formData = new FormData(form1);

//     myObj["pickupRegion"] = formData.get("region");

//     const jString = JSON.stringify(myObj);

//     fetch("/submit-details", {
//         method: 'POST',
//         body: jString,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (response.status === 200) {
//             alert("Good");
//         } else {
//             alert("Error.");
//         }
//     })
//     .catch(error => {
//         console.error("Request failed", error);
//         alert("An unexpected error occurred.");
//     });
// })

let myObj = {};

document.addEventListener("DOMContentLoaded", () => {
    const form1 = document.getElementById("page1-form");
    const form2 = document.getElementById("page2-form");
    const form3 = document.getElementById("page3-form");



    if(form1){
        form1.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form1);
            let myObj = {}

            myObj["pickupRegion"] = formData.get("region");
            myObj["pickupCity"] = formData.get("city");
            myObj["pickupBarangay"] = formData.get("barangay");
            myObj["pickupStreet"] = formData.get("street");
            myObj["pickupBuilding"] = formData.get("building");
            myObj["pickupDate"] = formatDateString(formData.get("date"));
            myObj["pickupTime"] = convertMilitaryToStandard(formData.get("time"));
            myObj["pickupPassengers"] = formData.get("passengers");

            if(myObj["pickupPassengers"] <= 11){
                alert("Insufficient passengers. Only 12 passengers or above to book a bus.")
                return
            }

            const fullAddress = [
                formData.get("region"),
                formData.get("city"),
                formData.get("barangay"),
                formData.get("street"),
                formData.get("building")
            ].filter(Boolean).join(", ");
            
            myObj["pickup_fullAddress"] = fullAddress;

            // Store myObj in localStorage as a JSON string
            localStorage.setItem("myFormData", JSON.stringify(myObj));
            
            // Redirect to another page
            window.location.href = '/form/2';
        });
    }


    if (form2) {
        form2.addEventListener("submit", async (e) => {
            e.preventDefault();
    
            const formData = new FormData(form2);
            const storedData = localStorage.getItem("myFormData");
            let myObj = {};
    
            if (storedData) {
                myObj = JSON.parse(storedData);
            }
            // console.log("Pick-up:", new Date(myObj["pickupDate"]))
            // console.log("Departure:", new Date(formatDateString(formData.get("departure-date"))))
            // console.log("Compare: ", compareDates(new Date(myObj["pickupDate"]), new Date(formatDateString(formData.get("departure-date")))))

            if (compareDates(myObj["pickupDate"], formatDateString(formData.get("departure-date"))) !== -1) {
                alert("Departure date must be later than pickup date. Please try again.");
                return;
            }
    
            myObj["destinationRegion"] = formData.get("region");
            myObj["destinationCity"] = formData.get("city");
            myObj["destinationBarangay"] = formData.get("barangay");
            myObj["destinationBuilding"] = formData.get("building");
            myObj["departureDate"] = formatDateString(formData.get("departure-date"));
            myObj["departureTime"] = convertMilitaryToStandard(formData.get("departure-time"));

            if (formData.get("additional-info").trim() !== "") {
                myObj["departureAddInformation"] = formData.get("additional-info");
            }
    
            
    
            const fullAddress = [
                formData.get("region"),
                formData.get("city"),
                formData.get("barangay"),
                formData.get("building")
            ].filter(Boolean).join(", ");
    
            myObj["destination_fullAddress"] = fullAddress;
    
            localStorage.setItem("myFormData", JSON.stringify(myObj));
            window.location.href = '/form/3';
        });
    }
    

    if(form3){
        form3.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form3);


            const storedData = localStorage.getItem("myFormData");

            if (storedData) {
                myObj = JSON.parse(storedData);
            }

            if(formData.get("company-name").trim() != ""){
                myObj["contactCompanyName"] = formData.get("company-name");
            };
            const countryCode = formData.get("country-code");
            const contactNumber = formData.get("contact-number");

            const fullContactNumber = `+${countryCode}${contactNumber}`;
            myObj["contactEmail"] = formData.get("email");
            myObj["contactNumber"] = fullContactNumber;

            localStorage.setItem("myFormData", JSON.stringify(myObj));

            // console.log(myObj);
            window.location = "/form/summary";
            
        });
    }

    const pickUpElement = document.getElementById("pick_up_location");
    const destinationElement = document.getElementById("destination");
    const pickUpTimeElement = document.getElementById("pick_up_time");
    // const departureTimeElement = document.getElementById("departure_time");
    const returnDateElement = document.getElementById("return_date");
    const passengersElement = document.getElementById("passengers");
    const contactElement = document.getElementById("contact");
    const emailElement = document.getElementById("email");
    const additionalInfoElement = document.getElementById("additional-info-summary");


    const storedData = localStorage.getItem("myFormData");

    if (storedData) {
        myObj = JSON.parse(storedData);
    }

    if (pickUpElement) {
        console.log(myObj);
        pickUpElement.textContent = myObj["pickup_fullAddress"];
        delete myObj["pickup_fullAddress"];
    }

    if (destinationElement) {
        destinationElement.textContent = myObj["destination_fullAddress"];
        delete myObj["destination_fullAddress"]
    }
    
    if (pickUpTimeElement) {
        pickUpTimeElement.textContent = `${myObj["pickupDate"]} ${myObj["pickupTime"]}`;

    }
    
    // if (departureTimeElement) {
    // }
    
    if (returnDateElement) {
        returnDateElement.textContent = `${myObj["departureDate"]} ${myObj["departureTime"]}`;
    }
    
    if (passengersElement) {
        passengersElement.textContent = myObj["pickupPassengers"];
    }
    
    if (contactElement) {
        contactElement.textContent = myObj["contactNumber"];
    }
    
    if (emailElement) {
        emailElement.textContent = myObj["contactEmail"];
    }
    
    if (additionalInfoElement && myObj["departureAddInformation"].trim() != "") {
        document.getElementById("add-info").style.display = "";
        additionalInfoElement.textContent = myObj["departureAddInformation"];
    } 
    else if(additionalInfoElement) {
        document.getElementById("add-info").style.display = "none";
    }
});


function sendDataToDB() {
    const storedData = localStorage.getItem("myFormData");
    let myObj = null;

    if (storedData) {
        try {
            myObj = JSON.parse(storedData);
        } catch (error) {
            console.error("Failed to parse stored data:", error);
            alert("Invalid data format.");
            return;
        }
    } else {
        alert("No data found to send.");
        return;
    }

    console.log(myObj);
    const jString = JSON.stringify(myObj);

    fetch("/submit-details", {
        method: 'POST',
        body: jString,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 201) {
            window.location = "/form/4";
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(error => {
        console.error("Request failed", error);
        alert("An unexpected error occurred. Please try again.");
    });
}


function formatDateString(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
}

function convertMilitaryToStandard(timeString) {
    let [hours, minutes] = timeString.split(':');
    hours = parseInt(hours);
  
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight and convert 13-23 to 1-11 for PM times
  
    return `${hours}:${minutes} ${period}`;
}

function compareDates(date1, date2) {

    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 0;
    }
}

