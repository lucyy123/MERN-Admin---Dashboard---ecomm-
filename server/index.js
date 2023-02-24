const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const helmet=require('helmet')
const morgan=require('morgan')
const dotenv=require("dotenv")
const bodyParser=require('body-parser')
const clientRoutes =require('./routes/client')
const salesRoutes =require('./routes/sales')
const managmentRoutes =require('./routes/managment')
const generalRoutes =require('./routes/general')
const User=require("./models/User")
const allData =require("./data/index")
const  ProductStat =require('./models/ProductStat')
const  Product =require("./models/Product")
const Transactions=require('./models/Transactions')
const Overview=require('./models/OverallStats')
const AffiliatStat=require('./models/AffiliateStat')

const {dataUser,dataProduct,dataProductStat,dataTransaction,dataOverallStat, dataAffiliateStat }=allData


/*   CONFIGURATIONS */
dotenv.config()
const app=express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))


/* ROUTES */

app.use('/client',clientRoutes)
app.use('/sales',salesRoutes)
app.use('/managment',managmentRoutes)
app.use('/general',generalRoutes)


/* MONGODB SETUP */
const PORT=process.env.PORT || 9001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
    // User.insertMany(dataUser)
    // Product.insertMany( dataProduct)
//     ProductStat.insertMany( dataProductStat)
//     Transactions.insertMany( dataTransaction)
//     Overview.insertMany(dataOverallStat)
// AffiliatStat.insertMany(dataAffiliateStat)
    console.log(`server is connect to database`)
      

}).catch((err)=>{
    console.log(err)
})
