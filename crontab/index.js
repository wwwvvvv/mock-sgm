var schedule = require('node-schedule');

const  projectSchedule = (cronTime , cb)=>{
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob(cronTime, cb); 
  }
  
module.exports = projectSchedule;