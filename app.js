var express  = require('express')
var app = express();
var bodyParser = require('body-parser')
var firebase = require('firebase')

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
  firebase.initializeApp(config);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login',(req,res)=>{
  console.log(req.body)

res.send(req.body)
})
app.post('/register',(req,res)=>{
  console.log(req.body)
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
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
