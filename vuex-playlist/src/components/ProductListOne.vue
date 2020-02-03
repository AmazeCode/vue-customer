<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
export default {
    //接收父组件传递过来的值
    //props:["products"],
//   data () {
//     return {
      
//     }
//   }

    //引入状态管理的数据
    computed:{
        // products(){
        //     //$store中store是vue中的属性，state是store.js中写的state
        //     return this.$store.state.products;
        // },
        //saleProducts(){
            //遍历获取到的数组，ES6遍历采用箭头函数
            // var saleProducts = this.$store.state.products.map(
            //     product =>{
            //         return {
            //             name: "**" + product.name + "**",
            //             //价格除以2
            //             price: product.price / 2
            //         };
            // });
            // return saleProducts;

            //从状态管理里面获取需要数据
            //return this.$store.getters.saleProducts;
        //}
        //辅助函数，如果有多个getters方法可以在数组中继续添加
        ...mapGetters([
            "saleProducts"
        ])
    },
    methods:{
        //reducePrice:function(amount){
            //遍历数组
            // this.$store.state.product.forEach(product => {
            //     //价格减少一
            //     product.price -= 1;
            // });

            //激活store.js中moutations内的reducePrice事件
            //this.$store.commit('reducePrice');

            //让程序走actions,使用dispatch属性分发请求，reducePrice是actions里面的方法
            //若要传递多个参数,将参数封装成对象的形式传递，例如：this.$store.dispatch("reducePrice",{task,index});
            //this.$store.dispatch("reducePrice",amount);
        //}
        //辅助函数，如果有多个actions方法可以在数组中继续添加
        ...mapActions([
            "reducePrice"
        ])

        /**
         * 解释：
         * methods: {
            ...mapActions([
                'foo',
                'bar'
            ])
            }
            相当于
            methods: {
                foo(...args) {
                    return this.$store.dispatch.apply(this.$store, ['foo'].concat(args))
                }
                bar(...args) {
                    return this.$store.dispatch.apply(this.$store, ['bar'].concat(args))
                }
            }
         */
    }
    //安装插件使得浏览器支持ES6语法：cnpm install babel-preset-stage-2 --save-dev
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
