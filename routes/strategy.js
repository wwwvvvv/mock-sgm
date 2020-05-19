var express = require('express');
var router = express.Router();
var { commonRes } = require('./libs/common');

/* GET strategy listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
    console.log(req.body);
    commonRes(res);
});



module.exports = router;
