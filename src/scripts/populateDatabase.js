const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const connectToMongo = require('./conn.js');
const form = require('../models/form.js');
const account = require('../models/account.js');




const sampleFormData = require('./sampleData/sampleFormData.js');
const sampleAccountData = require('./sampleData/sampleAccountData.js');


async function hashPassword(password){
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
      } catch (error) {
        console.error('Error hashing password:', error);
      }
}

async function dropDatabase() {
    try {
        await mongoose.connection.dropDatabase();
        console.log('Database: Old DB Dropped successfully');
    } catch (error) {
        console.error('Database: Error dropping database', error);
    }
}


async function populateDatabase() {
    try {
        await dropDatabase();

        // Populate form data
        for (const formData of sampleFormData) {
            // Convert date fields to "MM/DD/YYYY" format before saving
            if (formData.pickupDate instanceof Date) {
                formData.pickupDate = formatDate(formData.pickupDate);
            }
            if (formData.departureDate instanceof Date) {
                formData.departureDate = formatDate(formData.departureDate);
            }

            // Create a new instance of the form model and save it to the database
            const FormData = new form(formData);
            await FormData.save();
        }

        // Populate account data
        for (const accountData of sampleAccountData) {
            // Hash the password before saving
            accountData.password = await hashPassword(accountData.password);
        
            // Create a new instance of Account and save it to the database
            const Account = new account(accountData);
            await Account.save();
        }
        

        console.log('Database: Population function completed');
    } catch (error) {
        console.error('Database: Error populating database', error);
    }
}

// Helper function to format the date as "MM/DD/YYYY"
function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

module.exports = populateDatabase;