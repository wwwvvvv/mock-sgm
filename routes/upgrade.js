var express = require('express');
var router = express.Router();
var { commonRes, CommonFields } = require('./libs/common');


/* GET config listing. */
router.get('/', function(req, res, next) {
  // console.log('req.query', req.query);
  let equID = req.query.deviceCode;
  let commonFields = new CommonFields({equID, optType: '12'}); //optType 需要再确认
  let data = {
    ...commonFields
  }
  commonRes(res, data);
});

router.post('/', function(req, res, next){
    console.log(req.body);
    commonRes(res);
});



module.exports = router;
