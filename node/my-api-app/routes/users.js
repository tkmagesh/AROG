var express = require('express');
var router = express.Router();

var users = [
  { id : 1, name : "magesh"},
  { id: 2, name: "suresh" },
  { id: 3, name: "ramesh" }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(users)
});

/* POST add new user */
router.post('/', function(req, res, next){
  res.send('the given new user will be added')
})

module.exports = router;
