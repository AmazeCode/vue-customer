## vue-learn-demo
### 说明
- vue-customer为简单的客户管理系统，改项目主要是用于学习vue知识，写的一个简单的用户管理系统,配套的数据接口为json-server-users，使用的是jsonplaceholder,具体搭建可参考官网(github搜索jsonplaceholder)

## 项目本地启动说明:
## 首先搭建json-server服务,json-server服务依赖node环境，如果没有node请先安装node环境(这个过程是自己搭建json-server服务，如果不想重新自己搭建，clone下拉项目，进入到json-server-user目录直接执行第5步即可)

### 1、搭建json-server服务服务，新建并进入文件夹
#### mkdir json-server-user && cd json-server-user
### 2、初始化项目(新创建的文件目录下执行)
#### npm init(需要回车) 或  npm init --yes
### 3、安装json-server服务(新创建的文件目录下执行)
#### npm install json-server --save   或    npm install --save-dev json-server
### 4、在json-server-user目录下新建db.json
### 5、把db.json文件托管成一个 web 服务  json-server --watch --port 53000 db.json 

## vue-customer前端项目启动
### install dependencies
npm install

### serve with hot reload at localhost:8080
npm run dev

### build for production with minification
npm run build

### build for production and view the bundle analyzer report
npm run build --report

- vuex-paylist 是基于vuex使用的简单demo

#### 国内用户配置npm国内镜像

1.持久设置国内npm镜像
npm config set registry https://registry.npm.taobao.org

2.配置后可通过下面方式验证是否成功
npm config get registry
或
npm info express

3.使用cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

使用
cnpm install express
