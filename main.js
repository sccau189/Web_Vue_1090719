console.log("我是JS");


//  定義渲染區域
// 變數 vue1 = new Vue(); - 要新增一個Vue 物件
// el 指定元素 "選取器"
var vue1 = new Vue({
    el:"#vue1",
    data: {
        text:"我是xxxx!!!",
        a:999,
        b:3
    }
});

var vue2 = new Vue({
    el:"#vue2",
    data: {
        aligment: "center",
        google: "https://www.google.com.tw/?hl=zh-TW"
    }
})

var vue3 = new Vue({
    el:"#vue3",
    data:{
        // 布林值
        text: true,
    }
})