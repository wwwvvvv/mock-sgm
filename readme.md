#node版本
v10.15.3

#本地开发启动
node bin/www  或者 npm run start

#通过pm2启动并监听文件改动
npm run pm2Start

// pm2 start bin/www --watch (监听文件改动，文件修改 自动重启)

#停止pm2启动的项目
pm2 stop all  --- 停止所有应用
pm2 stop <name> --- <name> 应用名称

#单独启动定时发送硬件消息
node sendHardwareStatus.js

#单独启动定是发动软件信息
node sendSoftwareStatus.js


#线上启动
npm run build
