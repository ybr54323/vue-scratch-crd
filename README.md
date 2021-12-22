# vue-scratch-crd

### 介绍
一个基于vue的人机验证组件，模仿阿里云登录页面的“划出小鸡”人机验证模块
用法：在组件上监听`on-ok`事件，事件回调执行时代表用户将小鸡划出。

![使用方法](https://ftp.bmp.ovh/imgs/2020/09/a19f92bc76d29a90.gif)

### [live demo](https://ybr54323.github.io/vue-scratch-crd/)

### 安装
```
npm install vue-scratch-crd --save
```
### 引入
```js
import Vue from 'vue'
import Scratch from "vue-scratch-crd";
Vue.use(Scratch)
```


```vue
<template>
<Scratch @on-ok="onOk" @on-timeout="onTimeout" @on-reload="onReload" :configParams="configParams"></Scratch>
</template>
<script>
export default {
    data() {
        return {
            configParams: { // 非必传
                 width: 300, // 插件样式宽度
                 height: 200, // 插件样式高度
                 id: 'canvas', // html标签id
                 layerBgColor: null, // 刮面的样式，可传入样式string，或者canvas的渐变样式，具体参考canvas的渐变
                 bottomBgColor:null, // 同上
                 targetWidth: 50, // 鸡的宽
                 targetHeight: 50, // 鸡的高
                 targetCount: 2, // 鸡总数
                 tapRadius: 20, // 刮出的面积，是个正方形，默认20，即20✖20
                 duration: 60, // 限时多久之内划出，超时即触发on-timeout钩子，单位是秒
            }
        }
    },
    methods: {
        onOk(){ // 用户刮出小鸡的钩子
        },
        onTimeout(Scratch) { // 返回Scratch组件实例的指针
            Scratch.onReload(this.configParams) // onReload可使Scratch实例刷新，可以重新定义参数
        },
        onReload() { // 用户刷新的钩子

        }
    }
}
</script>
```

# API

|  属性   | 说明  |
|  ----  | ----  |
| width  | 刮刮卡的宽 |
| height  | 刮刮卡的高 |
| id  | canvas的id，如果要自定义，则传，建议不传 |
| layerBgColor  | 刮面的样式（默认金属色），可传入样式string，或者canvas的渐变样式，具体参考canvas的渐变 |
| bottomBgColor  | 卡片底的样式（默认天蓝色渐变），可传入样式string，或者canvas的渐变样式，具体参考canvas的渐变 |
| targetWidth  | 鸡的宽度 |
| targetHeight  | 鸡的高度 |
| tapRadius  | 刮出的面积，是个正方形 |
| duration  | 限时多久之内划出，超时即触发on-timeout钩子，单位是秒 |
| on-ok  | 用户刮完的钩子 |
| on-timeout  | 用户超时的钩子，返回字段为当前`Scratch`组件的实例指针，可以调用`onReload`方法使其刷新，可以重新配置参数 |
| on-reload  | 用户触发了刷新的钩子 |
