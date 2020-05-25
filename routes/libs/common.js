class CommonFields{
    constructor({msgName, equID, optType, msg }) {
        this.msgName = msgName || 'msgName';
        this.equID = equID || '12233';
        this.optType = optType || '22';
        this.msg = msg || 'msg';
    }
}

module.exports = {
    commonRes: (res, data = null, code = 0, errMsg = '') => {
        res.json({code, errMsg, data});
    },
    CommonFields
};