/****************************************************
 * jQuery 插件封装(PC端)
 * @Author  Night<ismb@qq.com>
 * @Date    2017/5/17 11:54
 ****************************************************/

/**
 * jQuery 公共方法
 */
$.extend({
    /**
     * window.setTimeout延迟加载优雅封装
     *
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
    delay : function (fun,sec) {
        setTimeout(function () {
            fun();
        },sec || 0);
    }
});

/**
 * jQuery 元素方法
 */
$.fn.extend({
    /**
     * 鼠标Hover元素固定时间后触发事件
     *
     * @param time        触发事件，单位：毫秒
     * @param overActive  事件触发时回调
     * @param overFinish  事件完成时回调
     */
    longHover : function (time,overActive,overFinish) {
        if(!time || !overActive){
            return;
        };

        var _timer = null;
        $(this).bind('mouseover',function () {
            _timer = setTimeout(function () {
                overActive && overActive.call(this);
            }.bind(this),time);
        }).bind('mouseleave',function () {
            clearTimeout(_timer);
            overFinish && overFinish.call(this);
        });
    }
});