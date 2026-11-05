const tasks=require('./tasks');
const getAllTasks=(req,res)=>{
    return res.json(tasks);
}
const getTaskById=(req,res)=>{
    const id=Number(req.params.id);
    const task=tasks.find(task=>task.id===id);
    if(!task){
        return res.status(404).json({error: 'Task not found'})  }
        return res.json(task);
}
const createTask=(req,res)=>{
    const {title}=req.body;
    const newTask={
        id: tasks.length+1,
        title:title
    }
    tasks.push(newTask);
    return res.status(201).json(newTask);
}
const updateTask=(req,res)=>{
    const id=Number(req.params.id);
    const task=tasks.find(task=>task.id===id);
    if(!task){
        return res.status(404).json({error: 'Task not found'})  }
        task.title=req.body.title;
        return res.json(task);
}
const deleteTask=(req,res)=>{
    const id=Number(req.params.id);
    const taskIndex=tasks.findIndex(task=>task.id===id);
    if(taskIndex===-1){
        return res.status(404).json({error: 'Task not found'});
    }
    tasks.splice(taskIndex, 1);
    return res.json({message: 'Task deleted successfully'});
}
module.exports={
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}