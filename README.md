# vue-scratch-crd

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
<Scratch @on-ok="onOk" :configParams="configParams"></Scratch>
</template>
<script>
export default {
    data() {
        return {
            configParams: { // 非必传
                 width: 300, // 插件样式宽度 
                 height: 200, // 插件样式高度
                 id: 'canvas', // html标签id
                 targetWidth: 50, // 鸡的宽
                 targetHeight: 50, // 鸡的高
                 targetCount: 2, // 鸡总数
                 tapRadius: 20, // 刮出的面积 = tapRadius ** 2 400
            }
        }
    },
    methods: {
        onOk(){
          // 你的逻辑
        }
    }
}
</script>
```
