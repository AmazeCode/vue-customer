import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

//外部如果要引入vuex需要添加export
export const store = new Vuex.Store({
    //定义严格模式，默认是不严格(也就是如果要改变state里面的值，必须要使用mutations中的方法)
    strict:true,
    //状态：作用存储数据
    state:{
        products:[
            {name:"马云",price:200},
            {name:"马化腾",price:140},
            {name:"马冬梅",price:20},
            {name:"马蓉",price:10},
          ]
    },
    //作用：获取数据
    getters:{
        saleProducts:(state) =>{
            //遍历获取到的数组，ES6遍历采用箭头函数
            var saleProducts = state.products.map(
                product =>{
                    return {
                        name: "**" + product.name + "**",
                        //价格除以2
                        price: product.price / 2
                    };
            });
            return saleProducts;
        }   
    },
    //作用：触发时间改变数据的时候使用(mutations中的payload主要用于接收，actions中dispatch传递过来的参数)
    mutations:{
        //箭头函数state就是传递的参数，也就是state属性
        reducePrice: (state,payload) => {
            //异步测试
            //setTimeout(function(){
                //遍历数组
                state.products.forEach(product => {
                    //价格减少一
                    product.price -= payload;
                });
            //},3000);  
        }
    },
    //actions主要解决的是去提交的mutations以及异步的问题
    actions:{
        //解决异步,context类似于this.$store(使用actions,在devtools工具中数据和方法同时出现，可以很好的调试异步),payload接收传递参数
        reducePrice:(context,payload) => {
            //两秒钟之后触发方法
            setTimeout(function(){
                //触发mutations里面的方法
                context.commit('reducePrice',payload);
            },2000);
        }
    }
})