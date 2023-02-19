const mongoose=require('mongoose')


const AffiliateStatSchema=new mongoose.Schema({
userId:{
    type:mongoose.Types.ObjectId,
    ref:"ourUser"

},
affiliateSales: 
{
        type:[ 

            
            mongoose.Types.ObjectId 
        
    ],
    
    ref:'Transactions'
}



},{timestamps:true})

const AffiliatStat=mongoose.model("AffiliateStat",AffiliateStatSchema)

module.exports=AffiliatStat