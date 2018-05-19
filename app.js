var express  = require('express')
var app = express();
var bodyParser = require('body-parser')

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.post('/login',(req,res)=>{
  console.log(req.body)
  res.send(req.body)
})
app.listen(3005,function(){
  console.log('helllo world')

})
