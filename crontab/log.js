var schedule = require('./index');
var request = require('request');
var config = require('./../config');
// console.log('config -> ', config.serverRoot);

function getRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min)) + min;
}
let maxSize = 100;
const requestMethod = 'POST';
const cronTime = "*/1 * * * *"; // 每1min执行一次
// const requestUrl = 'https://www.baidu.com'; //test
const requestUrl = config.serverRoot + '/sgm/api/log';
const sendStatus = () => {
    let mockData = {
        // 日志
        logType: 'test',
        level: 'test',
        event: 'event1111',
        action: 'action action action', //产生操作
        param: 'param1',
        result: 'okkkkk',
        eventTime: new Date().toLocaleString(),
        extra: '扩展区域~',
        // 通用
        msgName: 'test',
        equID: '12233',
        optType: '23',
        msg: '22'
    };
    // console.log('mockData -->', mockData);
    let data = JSON.stringify({...mockData});
    request({
        url: requestUrl,
        // method: 'post',
        method: requestMethod,
        headers:{
            'Content-Type':'application/json'
        },
        body: data //post
    }, function(error, response, body){
        console.log("hardware_body %s : %s", new Date().toLocaleString(), body);
    });
};

schedule(cronTime, sendStatus);