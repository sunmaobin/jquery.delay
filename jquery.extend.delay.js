/****************************************************
 * window.setTimeout延迟加载优雅封装
 * @Author  Night<ismb@qq.com>
 * @Date    2016/7/15 015 14:58
 ****************************************************/

/**
 * 使用方法：
 *
 * // 1. 一般用法，默认延迟0秒执行，目的是让js引擎按顺序执行。
 * $.delay(function(){
 *      fun1();
 * });
 *
 * // 2. 3秒后执行
 * $.delay(function(){
 *      fun1();
 * },3000);
 *
 * // 3. 关联this
 * $.delay(function(){
 *      this.fun1();
 * }.bind(this));
 *
 */
$.extend({
    delay : function (fun,sec) {
        setTimeout(function () {
            fun();
        },sec ? sec : 0);
    }
});