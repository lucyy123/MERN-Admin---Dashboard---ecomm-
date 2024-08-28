
const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()

function mongoDbConnect(){
    /* MONGODB SETUP */
    try {
        mongoose.set('strictQuery', false);
        console.log('process.env.PORT :', process.env.SERVER_PORT)
        const PORT = process.env.SERVER_PORT || 9001
        mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb is Connected `)

    } catch (error) {
        console.log('error:', error)

    }

    // User.insertMany(dataUser)
    // Product.insertMany( dataProduct)
    // ProductStat.insertMany( dataProductStat)
    // Transactions.insertMany( dataTransaction)
    // Overview.insertMany(dataOverallStat)
    // AffiliatStat.insertMany(dataAffiliateStat)


}

mongoDbConnect()

module.export = mongoDbConnect