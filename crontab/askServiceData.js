var schedule = require('./index');
var config = require('../config');
var { CommonFields } = require('../routes/libs/common');
var Ajax = require('./Ajax');


const cronTime = "*/5 * * * * *"; // 每5s执行一次
// const requestUrl = 'https://www.baidu.com';
const requestUrl = config.serverRoot + '/sgm/api/askData';
const requestData = () => {
    var otherFields = new CommonFields({equID: '12233', optType: '24'});
    let mockData = {
        opt: '0',
        softwareName: 'aa', // ???
        ...otherFields
    };
    let data = JSON.stringify({...mockData});
    console.log('Start ask service data..., requestUrl is ' + requestUrl);
    new Ajax(requestUrl).get(data,  function(error, response, body){
        console.log('error', error);
        console.log("service_body", body);
    });
};

schedule(cronTime, requestData);