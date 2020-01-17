/*
 * @Author: chenyang.yao
 * @Date: 2020-01-17 16:24:41
 * @LastEditTime : 2020-01-17 16:27:12
 * @LastEditors  : chenyang.yao
 */
import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 0)
    return config
})

axios.interceptors.response.use(function (config) {
    Toast.hide()
    return config
})