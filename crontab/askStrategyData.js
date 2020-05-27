var schedule = require('./index');
var config = require('../config');
var { CommonFields } = require('../routes/libs/common');
var Ajax = require('./Ajax');


const cronTime = "*/10 * * * * *"; // 每2s执行一次
// const requestUrl = 'https://www.baidu.com';
const requestUrl = config.serverRoot + '/sgm/api/askData';
const requestData = () => {
    var otherFields = new CommonFields({equID: '12233', optType: '24'});
    let mockData = {
        opt: '1',
        ...otherFields
    };
    let data = JSON.stringify({...mockData});
    console.log('Start ask strategy data..., requestUrl is ' + requestUrl + ', params is ' + data);
    new Ajax(requestUrl).get(data, function(error, response, body){
        console.log('error', error);
        console.log("strategy_body", body);
    });
};

schedule(cronTime, requestData);