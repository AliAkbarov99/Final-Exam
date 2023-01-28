const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 8080

app.use(cors())
app.use(express())
app.use(express.json())

mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected MongoDb")).catch(error=>{
    if(error) return res.send(error)
})

const BrandSchema = new mongoose.Schema({
    brand: String,
    price: Number
})

const BrandModel = new mongoose.model("Brand",BrandSchema)


//POST
app.post("/api/brands",(req,res)=>{
    const newBrand = new BrandModel({
        ...req.body
    })

    newBrand.save()
    res.send({message:"Brand added!",newBrand})
})

//GET
app.get("/api/brands",(req,res)=>{
    BrandModel.find(null,"brand price").exec((error,data)=>{
        if(error) return res.send(error)
        res.send(data)
    })
})

//DELETE
app.delete("/api/brands/:id",(req,res)=>{
    BrandModel.findByIdAndDelete(req.params.id).exec((error,brand)=>{
        if(error) return res.send(error)
        res.send({message:"Brand deleted!",brand})
    })
})


app.listen(PORT,()=>{
    console.log("Connected on:",PORT);
})

