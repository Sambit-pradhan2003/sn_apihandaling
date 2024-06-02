import express from "express";
import cors from 'cors';


const app=express();
app.use(cors({
  origin: 'https://your-netlify-domain.netlify.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.get('/api/product',(req,res)=>{
    const product=[
        {
          "id": "1",
          "name": "Electric Kettle",
          "price": 29.99,
          "image": "https://example.com/images/electric-kettle.jpg"
        },
        {
          "id": "2",
          "name": "Electric Toaster",
          "price": 19.99,
          "image": "https://example.com/images/electric-toaster.jpg"
        },
        {
          "id": "3",
          "name": "Electric Blender",
          "price": 49.99,
          "image": "https://example.com/images/electric-blender.jpg"
        },
        {
          "id": "4",
          "name": "Electric Iron",
          "price": 25.99,
          "image": "https://example.com/images/electric-iron.jpg"
        },
        {
          "id": "5",
          "name": "Electric Coffee Maker",
          "price": 39.99,
          "image": "https://example.com/images/electric-coffee-maker.jpg"
        }
      ]

      if (req.query.search ) {
        const filterproduct=product.filter(product=>product.name.includes(req.query.search))  
        res.send(filterproduct) ;
        return; 
        }
      console.log("HELLO start");
      setTimeout(()=>{
        console.log( "hello2")
        res.send(product)
      },5000)
      
})






const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server runningg at port${port}`)
});


