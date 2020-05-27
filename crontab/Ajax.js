var request = require('request');


class Ajax {
    constructor(url) {
        this.url = url;
        this.headers = {};
    }

    request({method, headers = {}, data = {}, cb}) {
        let otherOpt = {};
        if (method === 'post') {
            otherOpt = {
                body: data
            };
        } else if (method === 'get') {
            otherOpt = {
                params: data
            };
        }
        let reqHeaders = {...this.headers, ...headers};
        request({
            url: this.url,
            method,
            headers:{
                'Content-Type':'application/json',
                ...reqHeaders
            },
            ...otherOpt
        }, cb);
    }

    post(data, cb) {
        this.request({method: 'post', data,  cb});   
    }

    get(data, cb) {
        this.request({method: 'post', data,  cb});   
    }

}

module.exports = Ajax;