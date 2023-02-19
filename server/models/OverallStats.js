const mongoose=require('mongoose')

const OverallStats=new mongoose.Schema({
    totalCustomers:Number,
    yearlySalesTotal:Number,
    yearlyTotalSoldsUnits:Number,
    year:Number,
    monthlyData:[
        {
            month:String,
            totalSales:Number,
            totalUnits:Number
        }
    ],
    dailyData:
    [

        {
            date:String,
            totalSales:Number,
            totalUnits:Number
        },
    ],
    salesByCategory:{
        type:Map,
        of:Number,
    }
},{
    timestamps:true
})

const Overview=mongoose.model("Overview",OverallStats)
 module.exports=Overview