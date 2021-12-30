var express = require('express');
var router = express.Router();

/* GET home page. */
//user all user data
router.get('/data', (req, res, next)=> {
  res.send({ title: 'Express' });
});
// create user 
router.post('/create', (req, res, next)=> {
  res.send({ title: 'create' });
});
// user update
router.post('/update', (req, res, next)=> {
  res.send( { title: 'update' });
});

//user delete
router.post('/delete', (req, res, next)=> {
  res.send( { title: 'delete' });
});
module.exports = router;
