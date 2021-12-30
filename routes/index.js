var express = require('express');
var router = express.Router();
let dataArray = [{
  Id: 1,
  Name: 'Audumbar', 
  Age:30,
  Email: 'forus.mh@gmail.com'
}];

/* GET home page. */
//user all user data
router.get('/', (req, res, next)=> {
  res.send({error:false,data:dataArray});
});

router.post('/find/:id', (req, res, next)=> {
  dataArray.map(user =>{
    if(user.Id==req.params.id){
      res.send({error:false,data:user})

    }
  })

  res.send({error:true,msg:"record not found of id "+req.params.id });
});

// create user 
router.post('/create',(req, res, next)=> {
 let newuser={
   Id:dataArray.length+1,
   Name:req.body.Name,
   Age:req.body.Age,
   Email:req.body.Email
 }
 dataArray.push(newuser);
  res.send({error:false,data:newuser });
});
// user update
router.post('/update/:id', (req, res, next) =>{

  dataArray.map(user =>{
    if(user.Id==req.params.id){
      user.Name=req.body.Name;
      user.Age=req.body.Age;
      user.Email=req.body.Email;
      res.send({error:false,data:user,message:"Name Updated"})
    }
  })
  res.send({error:true,msg:"record not found of id "+req.params.id });
});

//user delete  task to be complete
router.post('/delete/:id', (req, res, next) =>{

  res.send( { title: 'Express' });
});



module.exports = router;
