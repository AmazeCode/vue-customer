//获取所有用户信息
http://loclahost:3000/users

//获取id为1的用户信息
http://localhost:3000/users/1

//获取所有公司信息
http://localhost:3000/companies

//获取单个公司的信息(id为1的信息)
http://localhost:3000/companies/1

//获取所有用户中公司id为1的用户信息
http://localhost:3000/companies/1/users

//根据公司名称获取公司信息
http://localhost:3000/companies?name=Microsoft

//根据多个名字获取公司信息
http://localhost:3000/companies?name=Microsoft&name=Apple

//获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

//升序排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_order=asc

//获取年龄为30以及30以上的用户
http://localhost:3000/users?age_gte=30

//获取年龄为30到40之间的用户
http://localhost:3000/users?age_gte=30&age_lte=40

//搜索用户信息
http://localhost:3000/users?q=h

//启动远程jsonplacehoder
"json:server:remote":"json-server http://jsonplaceholder.typicode.com/db"