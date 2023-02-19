const mongoose=require('mongoose')

const ProductStatStatSchema=new mongoose.Schema({

productId:String,
yearlySalesTotal:Number,
yearlyTotalSoldUnits:Number,
year:Number,
monthlyData:[
    {
        month:String,
        totalSales:Number,
        totalUnits:Number
    }
],
dailyData:[
    {
    date:String,
    totalSales:Number,
    totalUnits:Number
},
]



},{timestamps:true})

const ProductStat=mongoose.model("ProductStat",ProductStatStatSchema)

module.exports=ProductStat