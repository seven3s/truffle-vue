/**
 * @file:      封装jQuery ajax方法
 * @author:    花夏(huaxia@huar.love)
 * @version:   V0.0.1
 * @date:      2017-03-22 15:22:18
 */

import $ from 'jquery';
import config from './config';

export default {

    /**
     * 请求拦截函数
     *
     * @param  {Object} params 请求参数
     * @return {Object} 返回请求的promise对象
     */
    doRequest: function(params) {
        var ajaxBaseUrl = config.ajaxBaseUrl;
        var deferred = new $.Deferred();
        var origin = document.location.origin + ajaxBaseUrl;
        if ((/^\//).test(params.url)) {
            params.url = origin + params.url;
        } else if ((/^http:/).test(params.url)) {
            params.url = params.url;
        } else {

            // 为url拼接前缀.  /test 可改成自己统一需要加的路径
            params.url = origin + ajaxBaseUrl + params.url;
        }

        // ajax请求
        $.ajax(params).done(function(response) {
            var status = +response.status;

            // 状态为100 或者101，重定向到首页
            if (status === 100) {
                deferred.reject(response);
            } else if (status === 101) {
                deferred.reject(response);
            } else if (status === 200 || status === 0 || status === 1) {
                deferred.resolve(response);
            } else {
                deferred.reject(response);
            }
        }).fail(function(response) {
            deferred.reject(response);
        });
        return deferred.promise();
    },

    /**
     * 默认的请求函数
     *
     * @param  {string} path 请求路径
     * @param  {Object} params 请求参数
     * @return {Object} 返回请求的promise对象
     */
    request: function(path, params) {
        var requestParams = $.extend(true, {
            cache: false,
            headers: {
                'x-requested-with': 'XMLHttpRequest'
            },
            url: path,
            data: {},
            type: 'GET',
            dataType: 'json'
        }, params);

        return this.doRequest(requestParams);
    },

    /**
     * GET请求
     *
     * @param  {string} path 请求路径
     * @param  {Object} opts 请求的数据
     * @return {Object} 返回请求的promise对象
     */
    requestGET: function(path, opts) {
        var args = {};
        args._ = +new Date();
        $.extend(opts || {}, args);
        return this.request(path, {
            data: opts
        });
    },

    /**
     * POST请求
     *
     * @param  {string} path 请求路径
     * @param  {Object} opts 请求的数据
     * @return {Object} 返回请求的promise对象
     */
    requestPOST: function(path, opts) {
        return this.request(path, {
            data: JSON.stringify(opts),
            type: 'POST',
            contentType: 'application/json;charset=utf-8'
        });
    },

    /**
     * DELETE请求
     *
     * @param  {string} path 请求路径
     * @param  {Object} opts 请求的数据
     * @return {Object} 返回请求的promise对象
     */
    requestDELETE: function(path, opts) {
        return this.request(path, {
            data: JSON.stringify(opts),
            type: 'DELETE',
            contentType: 'application/json'
        });
    },

    /**
     * PUT请求
     *
     * @param  {string} path 请求路径
     * @param  {Object} opts 请求的数据
     * @return {Object} 返回请求的promise对象
     */
    requestPUT: function(path, opts) {
        return this.request(path, {
            data: JSON.stringify(opts),
            type: 'PUT',
            contentType: 'application/json'
        });
    }
};
