var schedule = require('./index');
var request = require('request');
var config = require('./../config');

function getRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min)) + min;
}
let maxSize = 100;
const requestMethod = 'POST';
const cronTime = "*/5 * * * * *"; // 每5s执行一次
// const requestUrl = 'https://www.baidu.com';
const requestUrl = config.serverRoot + '/sgm/api/software';
// const requestUrl = 'http://172.16.34.132:9080/sgm/api/software';
// const requestUrl = 'http://172.16.34.132:9080/sgm/deviceType';
const sendStatus = () => {
    let mockData = {
        // 软件信息
        softwareList: [{ 
            serviceName: '11',
            softwareStatus: '0',
            cpuUse: getRandom(maxSize),
            romUse: getRandom(maxSize),
            ramUse: getRandom(maxSize)
        }],
        msgName: 'test',
        equID: '12233',
        optType: '21',
        msg: '22'
    };
    let data = JSON.stringify({...mockData});
    request({
        url: requestUrl,
        method: requestMethod,
        headers:{
            'Content-Type':'application/json'
        },
        body: data //post
        // params: {} // get请求用params
    }, function(error, response, body){
        console.log("software_body", body);
    });
};

schedule(cronTime, sendStatus);