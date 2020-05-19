var Websocket = require('ws');

function getRandom(max, min = 0) {
    return Math.round(Math.random() * (max - min)) + min;
}

function getFakeData() {
    let fakeData = [];
    let nowTime = Date.now();
    let timeDiff = 1000 * 5; //5s
    for(var i = 0; i < 20; i++) {
        fakeData.push({
            cpuSize: maxSize,
            cpuUse: getRandom(maxSize),
            romSize: maxSize,
            romUse: getRandom(maxSize),
            ramSize: maxSize,
            ramUse: getRandom(maxSize),
            signalIntensity: getRandom(maxSize),
            time: nowTime - i * timeDiff
        });
    }
    return fakeData.reverse();
}

let maxSize = 100;

var wss = new Websocket.Server({port: 8080});
wss.on('connection', (ws) => {
        console.log('server: receive connection.');
        let i = 0;
        ws.on('message', message => {
            console.log('server: received: %s', message);
        });

        // ws.send(JSON.stringify({his: getFakeData()}));
    
        let timer = setInterval(() => {
            // i++;
            // if(i > 5) {
            //     throw new Error('my test error!');
            //     ws.send(new Error('my test error!'));
            //     clearInterval(timer);
            // } else {
            //     ws.send('world');
            // }
            ws.send(JSON.stringify({
                cpuSize: maxSize,
                cpuUse: getRandom(maxSize),
                romSize: maxSize,
                romUse: getRandom(maxSize),
                ramSize: maxSize,
                ramUse: getRandom(maxSize),
                signalIntensity: getRandom(maxSize),
                time: Date.now()
            }));
        }, 5000);
    });

module.exports = wss;    