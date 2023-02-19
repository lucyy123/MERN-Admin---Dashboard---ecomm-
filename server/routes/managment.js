const express = require("express")
const { default: mongoose } = require("mongoose")
const managmentRouter = express.Router()
const User = require('../models/User')


managmentRouter.get('/admin', async (req, res, next) => {
    try {
        const admins = await User.find({ role: "admin" })

        res.status(200).json(admins)

    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }

})



managmentRouter.get('/performance/:id',async(req,res,next)=>{
    try {
        const id=req.params._id
        
        const userwithStat=await User.aggregate([


            {
                $match:{
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
{
    $lookup:{
        from:'affiliatestats',
        localField:'_id',
        foreignField:'userId',
        as:'affiliateStats'
    }
},
{
    $unwind:"$affiliateStats"
}



        ])

        res.status(200).json(userwithStat)
        


    } catch (error) {
     res.status(404).json(error.message)   
    }
})


module.exports = managmentRouter