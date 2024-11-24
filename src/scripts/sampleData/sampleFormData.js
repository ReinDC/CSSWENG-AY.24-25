const sampleFormData = [
    {
        formNumber: 1,
        pickupRegion: "Metro Manila",
        referenceCode: "IEKx7Ig4uJ",
        pickupCity: "Makati",
        pickupBarangay: "Poblacion",
        pickupStreet: "J.P. Rizal Avenue",
        pickupBuilding: "Makati Executive Tower",
        pickupDate: "11/07/2024",
        pickupTime: "7:30 AM",
        pickupPassengers: 14,
        destinationRegion: "Cavite",
        destinationCity: "Tagaytay",
        destinationBarangay: "San Jose",
        destinationBuilding: "Sky Ranch",
        departureDate: "11/12/2024",
        departureTime: "8:00 AM",
        departureAddInformation: "Private tour for a corporate group",
        contactCompanyName: "Green Solutions Inc.",
        contactEmail: "contact@greensolutions.com",
        contactNumber: "+639123456789",
        deleted: false
    },
    {
        formNumber: 2,
        referenceCode: "94uao7dS9s",
        pickupRegion: "Metro Manila",
        pickupCity: "Quezon City",
        pickupBarangay: "Diliman",
        pickupStreet: "Commonwealth Avenue",
        pickupBuilding: "UP Technohub",
        pickupDate: "11/10/2024",
        pickupTime: "9:00 AM",
        pickupPassengers: 20,
        destinationRegion: "Rizal",
        destinationCity: "Antipolo",
        destinationBarangay: "San Roque",
        destinationBuilding: "Hinulugang Taktak",
        departureDate: "11/15/2024",
        departureTime: "10:00 AM",
        departureAddInformation: "School field trip",
        contactCompanyName: "Education Forward",
        contactEmail: "info@edu-forward.com",
        contactNumber: "+639987654321",
        deleted: false
    },
    {
        formNumber: 3,
        referenceCode: "EFuUiLCbXC",
        pickupRegion: "Laguna",
        pickupCity: "Calamba",
        pickupBarangay: "Real",
        pickupStreet: "National Highway",
        pickupBuilding: "SM Calamba",
        pickupDate: "11/12/2024",
        pickupTime: "6:00 AM",
        pickupPassengers: 8,
        destinationRegion: "Laguna",
        destinationCity: "Los Baños",
        destinationBarangay: "Timugan",
        destinationBuilding: "Makiling Park",
        departureDate: "11/17/2024",
        departureTime: "6:30 AM",
        departureAddInformation: "Nature trip",
        contactCompanyName: "Eco Adventures",
        contactEmail: "contact@ecoadventures.com",
        contactNumber: "+639223344556",
        deleted: false
    },
    {
        formNumber: 4,
        referenceCode: "iOGcLR3hwV",
        pickupRegion: "Metro Manila",
        pickupCity: "Pasay",
        pickupBarangay: "Mall of Asia Complex",
        pickupStreet: "Seaside Blvd",
        pickupBuilding: "Mall of Asia Arena",
        pickupDate: "11/15/2024",
        pickupTime: "5:00 PM",
        pickupPassengers: 50,
        destinationRegion: "Metro Manila",
        destinationCity: "Manila",
        destinationBarangay: "Intramuros",
        destinationBuilding: "Fort Santiago",
        departureDate: "11/20/2024",
        departureTime: "6:00 PM",
        departureAddInformation: "Company outing",
        contactCompanyName: "Business Corp",
        contactEmail: "contact@businesscorp.com",
        contactNumber: "+639112233445",
        deleted: false
    },
    {
        formNumber: 5,
        referenceCode: "OnQeAXQHnc",
        pickupRegion: "Metro Manila",
        pickupCity: "Manila",
        pickupBarangay: "Malate",
        pickupStreet: "Adriatico Street",
        pickupBuilding: "Robinsons Place",
        pickupDate: "11/18/2024",
        pickupTime: "4:00 PM",
        pickupPassengers: 6,
        destinationRegion: "Benguet",
        destinationCity: "Baguio",
        destinationBarangay: "Burnham Park",
        destinationBuilding: "Burnham Lake",
        departureDate: "11/23/2024",
        departureTime: "8:00 PM",
        departureAddInformation: "Family vacation",
        contactCompanyName: "Private",
        contactEmail: "alex.cruz@gmail.com",
        contactNumber: "+639556677889",
        deleted: false
    },
    {
        formNumber: 6,
        referenceCode: "nlApDkyZP0",
        pickupRegion: "Metro Manila",
        pickupCity: "Mandaluyong",
        pickupBarangay: "Wack-Wack",
        pickupStreet: "Shaw Blvd",
        pickupBuilding: "SM Megamall",
        pickupDate: "12/01/2024",
        pickupTime: "1:00 PM",
        pickupPassengers: 12,
        destinationRegion: "Bulacan",
        destinationCity: "Malolos",
        destinationBarangay: "San Vicente",
        destinationBuilding: "Capitol View",
        departureDate: "12/06/2024",
        departureTime: "2:00 PM",
        departureAddInformation: "Corporate event",
        contactCompanyName: "Event Managers",
        contactEmail: "contact@eventmanagers.com",
        contactNumber: "+639876543210",
        deleted: false
    },
    {
        formNumber: 7,
        referenceCode: "3pJaE2Ts6m",
        pickupRegion: "Cebu",
        pickupCity: "Cebu City",
        pickupBarangay: "Lahug",
        pickupStreet: "Salinas Drive",
        pickupBuilding: "IT Park",
        pickupDate: "12/03/2024",
        pickupTime: "10:00 AM",
        pickupPassengers: 18,
        destinationRegion: "Cebu",
        destinationCity: "Mandaue",
        destinationBarangay: "Basak",
        destinationBuilding: "J Centre Mall",
        departureDate: "12/08/2024",
        departureTime: "11:00 AM",
        departureAddInformation: "Business meeting",
        contactCompanyName: "Cebu Enterprises",
        contactEmail: "info@cebuenterprises.com",
        contactNumber: "+639998877665",
        deleted: false
    },
    {
        formNumber: 8,
        referenceCode: "PJvoBQph4u",
        pickupRegion: "Davao",
        pickupCity: "Davao City",
        pickupBarangay: "Buhangin",
        pickupStreet: "JP Laurel Avenue",
        pickupBuilding: "SM Lanang Premier",
        pickupDate: "12/05/2024",
        pickupTime: "3:00 PM",
        pickupPassengers: 10,
        destinationRegion: "Davao del Sur",
        destinationCity: "Digos",
        destinationBarangay: "Rizal",
        destinationBuilding: "City Plaza",
        departureDate: "12/10/2024",
        departureTime: "4:00 PM",
        departureAddInformation: "Team building",
        contactCompanyName: "Davao Builders",
        contactEmail: "contact@davaobuilders.com",
        contactNumber: "+639667788990",
        deleted: false
    },
    {
        formNumber: 9,
        referenceCode: "8l2NYRTioV",
        pickupRegion: "Metro Manila",
        pickupCity: "Taguig",
        pickupBarangay: "Fort Bonifacio",
        pickupStreet: "5th Avenue",
        pickupBuilding: "BGC Arts Center",
        pickupDate: "12/07/2024",
        pickupTime: "8:00 AM",
        pickupPassengers: 25,
        destinationRegion: "Metro Manila",
        destinationCity: "Parañaque",
        destinationBarangay: "BF Homes",
        destinationBuilding: "SM BF Parañaque",
        departureDate: "12/12/2024",
        departureTime: "9:00 AM",
        departureAddInformation: "Charity event",
        contactCompanyName: "Helping Hands",
        contactEmail: "contact@helpinghands.com",
        contactNumber: "+639334455667",
        deleted: false
    },
    {
        formNumber: 10,
        referenceCode: "AgDvppvmqv",
        pickupRegion: "Batangas",
        pickupCity: "Lipa",
        pickupBarangay: "Sabang",
        pickupStreet: "Ayala Highway",
        pickupBuilding: "Robinsons Lipa",
        pickupDate: "12/10/2024",
        pickupTime: "6:30 AM",
        pickupPassengers: 15,
        destinationRegion: "Batangas",
        destinationCity: "San Juan",
        destinationBarangay: "Caloocan",
        destinationBuilding: "Laiya Beach",
        departureDate: "12/15/2024",
        departureTime: "7:30 AM",
        departureAddInformation: "Beach outing",
        contactCompanyName: "Beach Getaways",
        contactEmail: "info@beachgetaways.com",
        contactNumber: "+639556644332",
        deleted: false
    }
];

module.exports = sampleFormData;