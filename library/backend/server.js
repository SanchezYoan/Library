require('dotenv').config({ path: "../.env" });
const mongoose = require('mongoose');

console.log(process.env.MONGO_URL);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connexion réussie !');
    } catch (error) {
        console.log(error.message);
    }
}

main();
