<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    //接收父组件传递过来的值
//     props:["products"],
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

        saleProducts(){
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
            return this.$store.getters.saleProducts;
        }
    }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color:#860CE8;
    display: block;
}
</style>
