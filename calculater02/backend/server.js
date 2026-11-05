import express from "express";
import cors from "cors";
const app=express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello from user");
});

app.get("/add/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    if(isNaN(a) || isNaN(b)){
        res.send({
            success:false,
            message:"Invalid input",
            data:null
        })
    }else{
        console.log('add')
        res.send({
            success:true,
            message:"Addition successful",
            data:a+b
        })
    }
});

app.get("/sub/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    if(isNaN(a) || isNaN(b)){
        res.send({
            success:false,
            message:"Invalid input",
            data:null
        })
    }else{
        console.log('sub')
       
        res.send({
            
            success:true,
            message:"subtraction successful",
            data:a-b
        })
    }
});

app.get("/mul/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    if(isNaN(a) || isNaN(b)){
        res.send({
            success:false,
            message:"Invalid input",
            data:null
        })
    }else{
        console.log('mul')
        res.send({
            success:true,
            message:"Multiplication successful",
            data:a*b
        })
    }
});

app.get("/div/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    if(isNaN(a) || isNaN(b)){
        res.send({
            success:false,
            message:"Invalid input",
            data:null
        })
    }else{
        console.log('div')
        res.send({
            success:true,
            message:"Division successful",
            data:a/b
        })
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});