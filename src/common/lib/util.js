/**
 * @file    util 工具
 * @authors 花夏 (huaxia@huar.love)
 *
 * @version 1.0.0
 * @date    2017-04-27 17:50:20
 */

var obj = {

    /**
     * assign 合并对象
     *
     * @param  {Object} argument 需要合并的对象
     *
     */
    assign: function(argument) {
        if (!Object.assign) {
            Object.defineProperty(Object, 'assign', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function(target, firstSource) {
                    if (target === 'undefined' || target === 'null') {
                        throw new TypeError('Cannot convert first argument to object');
                    }
                    var to = Object(target);
                    for (var i = 1; i < arguments.length; i++) {
                        var nextSource = arguments[i];
                        if (nextSource === 'undefined' || nextSource === 'null') {
                            continue;
                        }
                        var keysArray = Object.keys(Object(nextSource));
                        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                            var nextKey = keysArray[nextIndex];
                            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== 'undefined' && desc.enumerable) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                    return to;
                }
            });
        }
    },

    /**
     * 根据传入正则生成正则对象
     *
     * @param  {String} text 正则式
     *
     * @return {Object}      返回正则对象
     */
    getRegExpObject: (text = '') => {
        let matchedText = text.match(/^\/(.*?)\/([gmiy]*)$/);
        let reg;
        if (!matchedText || !matchedText[1]) {
            return null;
        }
        try {
            reg = new RegExp(matchedText[1], matchedText[2] || '');
        } catch (e) {
            reg = e ? null : null;
        }
        return reg;
    },

    /**
     * deepCloneObject 深克隆一个对象
     *
     * @param  {Object} obj 需要克隆的对象
     *
     * @return {Object}     返回克隆完成的对象
     */
    deepCloneObject: function(obj) {
        let result;
        let oClass = this.isClass(obj);
        // 确定result的类型
        if(oClass === "Object"){
            result = {};
        }else if(oClass === "Array"){
            result = [];
        }else{
            return obj;
        }
        for(key in obj){
            let copy = obj[key];
            if(isClass(copy) === 'Object'){
                // 递归调用
                result[key] = arguments.callee(copy);
            }else if(isClass(copy) === 'Array'){
                result[key] = arguments.callee(copy);
            }else{
                result[key] = obj[key];
            }
        }
        return result;
    },

    /**
     * isClass 根据传入的数据返回实际类型
     *
     * @param  {Object}    obj 传入的对象
     *
     * @return {String}     返回对象的数据类型
     */
    isClass: function(obj) {
        if(o === null) {
            return 'Null';
        }
        if(o === undefined) {
            return 'Undefined';
        }
        return Object.prototype.toString.call(obj).slice(8, -1);
    }
};

export default obj;
