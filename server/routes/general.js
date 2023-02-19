const { json } = require("body-parser")
const express = require("express")
const generalRoutes = express.Router()
const User = require('../models/User')
const Transactions=require('../models/Transactions')
const Overview=require('../models/OverallStats')

generalRoutes.get('/user/:_id', async (req, res, next) => {
    const id = req.params._id
// console.log('id:', id)
    try {

        const user = await User.findById( id )
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({ error: error.message,
        message:"check your id" })
    }
})


generalRoutes.get('/dashboard',async(req,res,next)=>{

const currMonth="November"
const day='2021-11-15'
const currentYear=2021

const transactions=await Transactions.find().limit(50).sort({createdAt:-1})

const overallStats=await Overview.find({year:2021})

const {
    yearlySalesTotal,
    monthlyData,
    yearlyTotalSoldUnits,
    totalCustomers,
    salesByCategory

}=overallStats[0]


const thismonthStat= overallStats[0].monthlyData.find(({month})=>{
    return month===currMonth

})

const todayStat= overallStats[0].dailyData.find(({date})=>{
    return date===day

})


res.status(200).json({
    yearlySalesTotal,
    monthlyData,
    yearlyTotalSoldUnits,
    totalCustomers,
    salesByCategory,
    thismonthStat,
    todayStat,
    transactions


})



})




module.exports = generalRoutes