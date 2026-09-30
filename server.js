// const express = require('express');
// const app = express()
// const fs = require("fs/promises")
// const path = require("path")
// const port = 3000

// const filepath = path.join(__dirname,"db.json")

// async function readData(){
//     let data = await fs.readFile(filepath,"utf-8")
//     return JSON.parse(data)
// }

// async function delayReadData(){
//     await new Promise((resolve,reject)=>{
//         setTimeout(resolve,1500)
//     })
//     return await readData();
// }


// app.get('/products', async (req, res) => {
//     try{
//         let products = await delayReadData()
//         res.json(products)
//     }
//     catch(err){
//         console.log(err)
//     }
// });


// app.get('/products/:id', async (req, res) => {
//     try{
//         let id = Number(req.params.id) 
//         let products = await delayReadData()
//         let data = products.find((item)=>item.id===id)
//         res.json(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// });




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })










// let cache = {


// }



const express=require('express')
const productRoutes=require('./routes/productRoutes')
const app=express()
const port=3000


app.use(express.json())


app.use('/',productRoutes)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})