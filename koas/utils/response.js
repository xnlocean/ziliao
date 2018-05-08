class utils {
    static success(data){
        return {
            businessCode: '200',
            code:'200',
            data:data
        }
    }
    static error(msg, code){
        return {
            businessCode: code || '404',
            code: code || '404',
            msg: msg
        }
    }
    static fault(msg, code){
        return {
            businessCode: code || '405',
            code: code || '405',
            msg: msg
        }
    }
    /**
     * 后端异常
     */
    static down(){
        return {
            businessCode: '500',
            code: '500',
            msg: '服务器出问题啦，快去看下吧'
        }
    }
}

module.exports = utils