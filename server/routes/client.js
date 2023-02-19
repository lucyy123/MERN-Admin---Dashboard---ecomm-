const express = require("express")
const clintRoutes = express.Router()
const Product = require("../models/Product")
const ProductStat = require('../models/ProductStat')
const User = require('../models/User')
const Transactions = require('../models/Transactions')
const getCounrtyIso3 = require('country-iso-2-to-3')

// const res=getCounrtyIso3("CN")
// console.log('res:', res)


clintRoutes.get('/products', async (req, res, next) => {
    try {
        const products = await Product.find()
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({ productId: product._id })
                return { ...product._doc, stat }
            })
        );

        res.status(200).json(productsWithStats)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

clintRoutes.get('/customers', async (req, res) => {
    try {
        const customers = await User.find({ role: "user" }).select('-password')
        res.status(200).json(customers)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

clintRoutes.get('/transactions', async (req, res, next) => {

    try {

        const { page = 1, pageSize = 20,
            search = "", sort = null } = req.query
        const generatSort = () => {
            const sortParsed = JSON.parse(sort)
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = 'asc' ? 1 : -1)
            }
            return sortFormatted

        }
        const sortFormatted = Boolean(sort) ? generatSort() : {};






        const transactions = await Transactions.find({

            $or: [
                { cost: { $regex: new RegExp(search, 'i') } },
                { userId: { $regex: new RegExp(search, 'i') } }

            ]
        })
            .limit(pageSize)
            .sort(sortFormatted)
            .skip(page * pageSize)


        const total = await Transactions.countDocuments({
            name: { $regex: search, $options: 'i' }
        })



        res.status(200).json({
            transactions,
            total
        })

    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }


})



clintRoutes.get('/geography', async (req, res) => {
    try {
        // const users=await User.find()

        const Contries = await User.aggregate([
            {
                $project: {


                    "country": 1,

                },

            }
        ])

        const fullCountryName = Contries.map(({ country }) => {
            const res = getCounrtyIso3([country])
            return res
        })
        // console.log('fullCountryName:', fullCountryName)

        let countyCounts = {}

        for (let i = 0; i < fullCountryName.length; i++) {
            let char = fullCountryName[i]
            if (!countyCounts[char]) {
                countyCounts[char] = 1
            } else {
                countyCounts[char]++
            }
        }


        // console.log('countyCounts:', countyCounts)
        let formattedCountry = []
        for (let key in countyCounts) {
            if(key==="undefined"){
                continue
            }
            let temp = { id: key, value: countyCounts[key] }
            formattedCountry.push(temp)

        }

        // console.log('formattedCountry:', formattedCountry)




        res.status(200).json(formattedCountry)


    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
})



module.exports = clintRoutes