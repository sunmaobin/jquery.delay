# jQuery 插件封装

## 一、jquery.delay - 优雅的对window.setTimeout封装

***源码：***
```
$.extend({
    delay : function (fun,sec) {
        setTimeout(function () {
            fun();
        },sec ? sec : 0);
    }
});
```

***使用方法：***

```js
// 1. 一般用法，默认延迟0秒执行，目的是让js引擎按顺序执行。
$.delay(function(){
fun1();
});

// 2. 3秒后执行
$.delay(function(){
fun1();
},3000);

// 3. 关联this
$.delay(function(){
this.fun1();
}.bind(this));
```