module.exports = {
    commonRes: (res, data = [], code = 0, errMsg = '') => {
        res.json({code, errMsg, data});
    }
};