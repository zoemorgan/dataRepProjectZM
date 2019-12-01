const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://Admin:Admin@cluster0-j23ip.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const modulesSchema = new Schema({
  name:String,
  lecturer:String,
  duration:String,
  worthCredits: String
});

const todoSchema = new Schema({
  name:String,
  moduleName:String,
  dueDate:String,
  worthPercentage: String
});

const ModulesModel = mongoose.model('modules', modulesSchema);
const TodoModel = mongoose.model('todo', todoSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//get all modules
app.get('/api/modules', (req,res,next) => {

    console.log("get request")
    ModulesModel.find((err,data)=>{
      res.json({modules:data});
    })
});

//get all todo items
app.get('/api/todo', (req,res,next) => {

  console.log("get request")
  TodoModel.find((err,data)=>{
    res.json({todo:data});
  })
});

//get modules by id
app.get('/api/modules/:id',(req,res)=>{
  console.log(req.params.id);

  ModulesModel.findById(req.params.id, (err, data)=>{
    res.json(data);
    console.log("something something");
  })
});

//get todo item by id
app.get('/api/todo/:id',(req,res)=>{
  console.log(req.params.id);

  TodoModel.findById(req.params.id, (err, data)=>{
    res.json(data);
    console.log("something something");
  })
});

/*search tasks by module
app.get('/api/todo/search/:moduleName/:criteria', (req,res)=>{
  console.log(req.params.moduleName);
  console.log(req.params.criteria);
    if(req.params.criteria == 'moduleName')
    {
      TodoModel.find({ 'moduleName': req.params.moduleName},
    (error,data) =>{
      res.json(data);
    })
    }
})*/

//delete module by id
app.delete('/api/modules/:id', (req,res) =>{
    console.log(req.params.id);
  
    ModulesModel.deleteOne({_id:req.params.id},(error,data)=>{
      if(error)
        res.json(error);
        
      res.json(data);
    })
});

//delete todo item by id
app.delete('/api/todo/:id', (req,res) =>{
  console.log(req.params.id);

  TodoModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
      
    res.json(data);
  })
});

//create module
app.post('/api/modules', (req,res) =>{
    console.log('post Sucessfull');
    console.log(req.body)
    
    ModulesModel.create({
      name: req.body.name,
      lecturer: req.body.lecturer,
      duration: req.body.duration,
      worthCredits: req.body.worthCredits
    });
    res.json('data uploaded')
    
});

//create todo item
app.post('/api/todo', (req,res) =>{
  console.log('post Sucessfull');
  console.log(req.body)
  
  TodoModel.create({
    name: req.body.name,
    moduleName: req.body.moduleName,
    dueDate: req.body.dueDate,
    worthPercentage: req.body.worthPercentage
  });
  res.json('data uploaded')
  
});

//update module by id
app.put('/api/modules/:id', (req, res)=>{
    console.log(req.body);
    console.log("Edit "+req.params.id);
  
    ModulesModel.findByIdAndUpdate(req.params.id,
      req.body, {new:true}, (error, data)=>{
        res.send(data);
      })
});

//update todo by id
app.put('/api/todo/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  TodoModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
});

app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
});
  