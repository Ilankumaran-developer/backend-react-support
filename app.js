var express  = require('express')
var app = express();
var bodyParser = require('body-parser')
const firebaseauth = require('firebaseauth');
var firebase = new firebaseauth('AIzaSyDKKFfMvZYj_jvVFL3hBZFRckZBZqpuuJM');

var cors = require('cors');



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKKFfMvZYj_jvVFL3hBZFRckZBZqpuuJM",
    authDomain: "trackbuddy-704b3.firebaseapp.com",
    databaseURL: "https://trackbuddy-704b3.firebaseio.com",
    projectId: "trackbuddy-704b3",
    storageBucket: "trackbuddy-704b3.appspot.com",
    messagingSenderId: "195476621352"
  };
  //firebase.initializeApp(config);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login',(req,res)=>{
  console.log(req.body)

res.send(req.body)
})
app.post('/register',(req,res)=>{
  console.log('registeruingggg')
  console.log(req.body)
  firebase.registerWithEmail(req.body.email, req.body.password).catch(function(error,result) {
  // Handle Errors here.
  console.log(error,result)
    res.send(req.body)
  // ...
});

})
app.get('/aaa',(req,res)=>{
  res.send('Hello World')
})
app.listen(process.env.PORT || 3005,function(){
  console.log('helllo world')

})
