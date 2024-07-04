# Koa
>什么是koa
>Koa和Express一样，都是基于node.js的web应用开发框架。

koa：下一代的node.js Web框架；
- 由Express框架的原班人马设计和开发
- 比Express更加有表现力、更健壮（异步处理支持async/await，所以可以用try/catch来更好的处理异常）
- 框架核心默认不带有任何中间件，更加精简、更加快速（Express默认带了很多中间件）
- 更加强大的中间件模型-洋葱圈模型

应用场景：
- 开发 REST API
- 开发WebSocket API
- 开发服务端渲染的页面
  
## koa基础
1. 创建新的工程目录，比如hello目录
2. 安装依赖包
   `npm i koa`
3. 创建代码文件，比如：app.js文件
   ```js
   // 1.引入koa
   const Koa = require('koa')
   //2.创建koa实例子
   // koa提供一个 Context 对象，表示一次对话的上下文（包括HTTP请求和HTTP回复）
   //通过加工这个对象就可以控制返回给用户的内容
   const app = new Koa()
   //3.创建一个中间件，所有的请求都会执行到这个中间件进行处理
   app.use(async ctx => {
    // 为了方便起见许多上下文的访问器和方法直接委托给他们的 ctx.request  或者 ctx.response
    // 例如：ctx.body => ctx.response.body
    //设置响应体
    ctx.response.body = 'hello.world'
   })
   //4.启动koa 实例所关联的http服务器，并监听在3000端口上向外提供服务
   app.listen(3000,() => {
    // http 服务器启动成功后执行本回掉函数
    console.log('访问 http://localhost:3000')
   })
   ```
4. 执行node命令
   `node ./app.js`  

## Web 应用的开发
### 处理get请求参数
> 在中间件中获取GET请求发送的查询字符串参数

中间件函数的第一个参数 `ctx` 中包含了请求和响应相关的操作，我们可以通过它的 `query` 属性来获取请求的查询字符串参数：

```js
app.use(async ctx => {
  // 方式一：获取对象形式的查询字符串参数
  console.log("查询字符串参数(对象形式)", ctx.request.query)   				
  
  // 方式二：获取原始字符串形式的查询字符串参数
  console.log("查询字符串参数(字符串形式)", ctx.request.querystring)   
  // ...
})
```
```js
//1.引入koa
const koa = require('koa')
//2.创建koa实例
const app = new koa()
//3.准备中间件
app.use(async ctx => {
  ctx.response.body = '你好'
   const res = ctx.request.query
  // console.log(ctx.request);
  console.log(ctx.request.query);
  console.log(res.id,res.payment);
  console.log(ctx.request.url);
})
//4.启动服务器
app.listen(3000, () => {
  console.log('服务器启动了')
})

```

## ctx（上下文访问器）别名 官网了解