<template>
  <div class="customers container">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>

    <!-- 添加搜索框 -->
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"/>
    <br/>
    <table class="table table-striped">
        <thead>
            <tr>
                <td>姓名</td>
                <td>电话</td>
                <td>邮箱</td>
                <td>操作</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in filterBy(customers,filterInput)">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
//引入Alert组件
import Alert from './Alert'

export default {
  name: 'customers',
  data () {
    return {
        customers:[],
        alert:"",
        filterInput:""
    }
  },
  methods:{
      fetchCustomer(){
          this.$http.get("http://localhost:3000/users").then(function(response){
              this.customers = response.body;
          })
      },
      //匹配过滤
      filterBy(customer,value){
          //filter ES6的语法，过滤customers中匹配的元素并且把匹配的数组返回给customers中
          return this.customers.filter(function(customer){
            //匹配name
            return customer.name.match(value);
          })
      }
  },
  //创建的时候调用
  created(){
      //获取添加后的提示信息,$route是路由跳转对象(当前路由信息对象)，$router是VueRouter的对象（全局路由实例），每一个$router都有一个$route
      if(this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }
      this.fetchCustomer();
  },
  //更新的时候调用
  updated(){
      this.fetchCustomer();
  },
  //使用组件
  components:{
      "Alert":Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
