const express =require('express');
const taskRoutes=require('./taskRoutes')
const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);
app.get('/',(req,res)=>{
    res.send('Welcome to the Task Manager API');
})
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})