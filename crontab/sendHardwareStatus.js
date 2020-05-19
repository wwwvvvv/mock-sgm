var schedule = require('./index');
var request = require('request');
var config = require('./../config');
// console.log('config -> ', config.serverRoot);

function getRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min)) + min;
}
let maxSize = 100;
// let mockData = {
//     // 硬件信息
//     CPUSize: maxSize,
//     CPUUse: getRandom(maxSize),
//     ROMSize: maxSize,
//     ROMUse: getRandom(maxSize),
//     RAMSize: maxSize,
//     RAMUse: getRandom(maxSize),
//     SignalIntensity: getRandom(maxSize),
//     // 通用
//     MsgName: 'test',
//     EquID: '',
//     OptType: '',
//     Msg: ''
// };
const requestMethod = 'POST';
const cronTime = "*/5 * * * * *"; // 每2s执行一次
// const requestUrl = 'https://www.baidu.com';
const requestUrl = config.serverRoot + '/sgm/api/hardware';
// const requestUrl = 'http://172.16.34.132:9080/sgm/api/hardware';
// const requestUrl = 'http://172.16.34.132:9080/sgm/deviceType';
const sendStatus = () => {
    let mockData = {
        // 硬件信息
        cpuSize: maxSize,
        cpuUse: getRandom(maxSize),
        romSize: maxSize,
        romUse: getRandom(maxSize),
        ramSize: maxSize,
        ramUse: getRandom(maxSize),
        signalIntensity: getRandom(maxSize),
        // 通用
        msgName: 'test',
        equID: '12233',
        optType: '20',
        msg: '22',
        time: Date.now()
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
        // params: {} // get
    }, function(error, response, body){
        console.log("hardware_body", body);
    });
};

schedule(cronTime, sendStatus);