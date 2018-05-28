var express  = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongojs = require('mongojs');
var mclient = require('mongodb').MongoClient;
const CONFIG={};
CONFIG.dburl = 'mongodb://Ilankumaran-developer:ilan86828@ds121955.mlab.com:21955/tripwell'



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login',(req,res)=>{
  console.log(req.body)

res.send(req.body)
})
app.post('/register',(req,res)=>{
  var db = ''
  mclient.connect(CONFIG.dburl,(err,database)=>{
    db = database;

db.collection('users').insert(req.body,(err,doc)=>{
 		if(err){
 			console.log(err);
 res.send({success:'0'});
 		}

 else{
   console.log(doc)
 	console.log('success');

 	res.send({success:'1','_id':doc.ops[0]._id});
 }
   })
 })



})
app.get('/aaa',(req,res)=>{
  res.send('Hello World')
})
app.listen(process.env.PORT || 3005,function(){
  console.log('helllo world')

})
