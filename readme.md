#node版本
v10.15.3

#启动
node bin/www 

#使用pm2启动
pm2 start bin/www --watch (监听文件改动，文件修改 自动重启)

#停止pm2启动的项目
pm2 stop all  --- 停止所有应用
pm2 stop <name> --- <name> 应用名称