var express = require('express');
var router = express.Router();
var { commonRes, CommonFields } = require('./libs/common');


/* GET config listing. */
router.get('/', function(req, res, next) {
  // console.log('req.query', req.query);
  let equID = req.query.deviceCode;
  let commonFields = new CommonFields({equID, optType: '12'});
  let data = {
    localIP: '192.168.1.1',
    agentPort: '90',
    gwConfigPath: '/test',
    gwIP: '0.0.0.1',
    gwPort: '80',
    certPath1: '/cert1',
    certPath2: '/cert2',
    certPath3: '/cert3',
    certPath4: '/cert4',
    // communityCode: '01',
    regionVillage: 'regionCode',
    // buildingCode: 'A',
    regionBuilding: 'buildingCode',
    // unitCode: 'aa',
    regionUnit: 'regionCode',
    ...commonFields
  }
  commonRes(res, data);
});

router.post('/', function(req, res, next){
    console.log(req.body);
    commonRes(res);
});



module.exports = router;
