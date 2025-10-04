import express, {  Request, Response } from 'express';
const app=express();
import {prismaClient} from "../../packages/store/generated/prisma"
app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
	 res.json({
		message:"hii there "
	})
})


app.post('/website',async (req,res)=>{
	prismaClient.website.create({
		data:{
			url:req.body.url,
			timeAdded:new Date()
		}
	})

	
})


app.get('/status/:webiste',(req,res)=>{

})
app.listen(4000)
