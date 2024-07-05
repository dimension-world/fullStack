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

### ctx（上下文访问器）别名 官网了解
 > 对请求和响应进行了简写，例如：ctx.response.body可以写成ctx.body

### 处理post请求参数
> 在中间件中获取POST请求通过请求体发送的参数数据
获取POST请求发送的请求体参数，大致思路如下：
1. 监听node.js原生请求对象的 **==data==** 事件，从请求体中获取数据，并将所有数据拼合起来，（因为如果请求体中携带的数据量较大，就会分几次来触发data事件，逐步获取）
2. 监听node.js原生请求对象的end事件，获知请求体数据被完全获取
```js
const koa = require('koa')

const app = new koa()

app.use(async ctx => {
  let paramStr = ''
  // ctx.request ctx.response 是koa的请求和响应对象
  // ctx.req  ctx.res  是node原生的
  // 1.监听node.js原生Request对象的data事件，获取请求体数据
  ctx.req.on('data',(data) => {
    // 从请求体中获取数据，并拼接成一整个字符串
    paramStr += data
  })
  // 2.监听node.js原生Request对象的end事件，结束请求体数据获取
  ctx.req.on('end',() => {
    // paramStr 是查询字符串式的数据，可以用new URLSearchParams解析
    //语法：var URLSearchParams = new URLSearchParams(init);
    // 到node官网详细了解对应的方法
    // params.get(key)
    // params.has(key)
    // params.keys() 拿到所有的键，返回一个ES6 Iterator  可供 for of 遍历
    const params = new URLSearchParams(paramsStr)
    console.log('请求体参数（字符串形式）'，paramStr)
    console.log('请求体参数（对象形式）'，params)
  })
})

app.listen(3000,()=>{
  console.log('服务器启动了')
})
```
`URLSearchParams` 语法说明:

```jsx
const params = new URLSearchParams('k=%E5%85%B3%E9%94%AE%E5%AD%97&p=1');
console.log(params.get('k'));   // 返回字符串“关键字”，支持自动 UTF-8 解码
console.log(params.get('p'));   // 返回字符串“1”
console.log(params.get('xxx')); // 如果没有 xxx 这个键，则返回 null
console.log(params.has('xxx')); // 当然也可以通过 has() 方法查询是否存在指定的键
console.log(params.keys());     // 返回一个 ES6 Iterator，内含 ['k', 'p']
console.log(params.values());   // 返一个 ES6 Iterator，内含 ['关键字', '1']
```

MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/URLSearchParams

知乎:  https://zhuanlan.zhihu.com/p/29581070

### 响应一个页面
方式一：直接响应一个 HTML 字符串给客户端

```js
app.use(async ctx => {
  // 为响应体设置 HTML 字符串内容
  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Document</title>
    </head>

    <body>
    	<h1>你好，世界</h1>
    </body>

    </html>
	`
})
```

方式二：读取 html 文件后，将读取到的 HTML 字符串响应给客户端

```html
<!-- 编写 index.html 文件 -->

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <h1>你好，世界</h1>
  </body>

</html>
```

```js
// 导入文件读取模块
const fs = require('fs')

// 读取 html 文件的工具函数
function getHtmlFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname,filePath), (err, data) => {
      if (err) {
        reject(err)
      } else {
	    // 读取的文件数据是 Buffer 形式，要用 toString() 转成字符串
        resolve(data.toString())
      }
    })
  })
}

app.use(async ctx => {
  // 读取 index.html 文件后，设置到响应体
  ctx.body = await getHtmlFile('./index.html')
})
```

### 处理图片
处理静态资源的思路，和之前响应 html 文件给客户端是类似的，也是先读取文件，再设置给响应体。

以下是响应一张图片的实例：

1. 先在项目目录中建立一个 static 目录，并放置一张图片文件（本例中是 01.jpg）
2. 编写下面的代码，实现读取图片并响应给客户端的操作

```js
// 导入文件读取模块
const fs = require('fs')

// 获取静态资源文件的
function getImageFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        // 这里保持 Buffer 格式数据，因为图片是二进制数据，不要转成字符串
        resolve(data)
      }
    })
  })
}

app.use(async ctx => {
  // 【重要】正确设置静态资源的 Content-Type 响应头，否则在浏览器中只会下载文件，不能查看到图片
  ctx.set('Content-Type', 'image/jpeg')

  // 在响应体中设置读取到的图片文件数据
  ctx.body = await getImageFile('./static/01.jpg')
})
```


