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
        // 當 true時 顯示 v-if判斷式的內容，當 false 時 顯示v-else 判斷式的內容
        activity:true,
    }
})

var vue4 = new Vue({
    el:"#vue4",
    data:{
        products:[
            {name:"有機優格", price: 60, text:"採無添加物"},
            {name:"水果優格", price: 70, text:"採當天現採"},
            {name:"巧克力優格", price: 55, text:"採70%加物"},
            {name:"五穀優格", price: 65, text:"採清爽無負擔"},
            {name:"客製化優格", price: '60+up' , text:"隨心添加"},
        ]
    }
})

var vue5 = new Vue({
    el:"#vue5",
    data :{
        link:"",
        text:"",
        count:0,
        pic:""
    },
    methods: {
        // show為自定義 隨意命名
        show: function() {
            this.link ="https://tigersugar.com/"
        },
        showon: function() {
            this.text = "點到了"
        },
        add: function(){
            this.count++;
        },
        sub: function(){
            this.count--;
        },
    }
});

var vue6 = new Vue({
    el: "#vue6",
    data: {
        name:""
    }
})