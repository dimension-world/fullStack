# RegExp

> 首先了解什么是正则，是一种**字符串匹配的规则**。
> 使用场景：
> 表单的验证规则
> 路由的过滤，敏感词汇的替换，提取字符串特定的部分

## 基本使用规则

1. 定义规则
   - const reg = /表达式/
   - / / 是正则表达式**字面量**
   - 正则表达式是一个对象
   ```js
   const reg = /艹/
   ```
2. 使用规则

- **test()** 方法 用来查看 正则表达式与指定的字符串是否匹配
- 如果匹配返回 true，反之返回 false。
  例如：

```javascript
// 要匹配的字符串
const str = '我艹，你个大傻逼，我艹你吗'
// 定义规则
const reg = /艹/
// 检验方法
reg.test(str) // 返回true
```

## 边界符

- 普通字符
- 元字符(特殊字符)
  例如：/[A-Z]/

**元字符的大概分类**

1. 边界符

   - 定义位置规则，必须用什么开头，用什么结尾
   - 正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

     | 边界符 |              说明              |
     | :----: | :----------------------------: |
     |   ^    |  表示匹配行首的文本(一谁开始)  |
     |   $    | 表示匹配的行尾的文本(以谁结束) |

     ^和$，两个一起使用表示 ==精确匹配==

   ```javascript
   // 边界符
   // 1. 匹配开头的位置 ^
   const reg = /^web/
   console.log(reg.test('web')) // true
   console.log(reg.test('前端web')) // false
   console.log(reg.test('前端webJava')) // false
   console.log(reg.test('we')) // false

   // 2. 匹配结束的位置 $
   const regs = /web$/
   regs.test('web前端') // false
   regs.test('前端web') // true
   regs.test('前端web和java') // false
   regs.test('we') // false

   // 3. 精确匹配 ^$（在开发中居多） 必须以某种规则开始再以这种规则结束不能多也不能少
   const reg1 = /^web$/
   regs.test('web前端') // false
   regs.test('前端web') // false
   regs.test('前端web和java') // false
   regs.test('we') // false
   reg1.test('web') // true
   reg1.test('webweb') // false
   ```

2. 量词

   - 定义重复的次数
   - 用来设定某个模式的**重复次数**

   |  量词  |        说明        |
   | :----: | :----------------: |
   |   \*   | 重复零次或者更多次 |
   |   +    |  重复一次或更多次  |
   |   ?    |   重复零次或一次   |
   |  \{n}  |     重复 n 次      |
   | \{n,}  | 重复 n 次或更多次  |
   | \{n,m} |   重复 n 到 m 次   |

   ```js
   // 量词

   // * 重复次数 >= 0 次
   const reg1 = /^w*$/
   reg1.test('') //true
   reg1.test('w') //true
   reg1.test('ww') //true

   // + 重复次数 >= 1 次
   const reg2 = /^w+$/
   reg1.test('') //false
   reg1.test('w') //true
   reg1.test('ww') //true

   // ？ 重复次数 0 ｜｜ 1 次
   const reg3 = /^w？$/
   reg1.test('') //true
   reg1.test('w') //true
   reg1.test('ww') //false

   // * 重复次数 {n} >n次
   const reg3 = /^w{5}$/
   reg1.test('') //false
   reg1.test('w') //false
   reg1.test('wwwww') //true

   // * 重复次数 {n,} >=n 次
   const reg3 = /^w{5,}$/
   reg1.test('wwwwww') //true
   reg1.test('') //false
   reg1.test('w') //false
   reg1.test('wwwww') //true

   // * 重复次数 {n,m} >=n && <=m 次
   const reg3 = /^w{3,5}$/
   reg1.test('wwwwww') // false
   reg1.test('') //false
   reg1.test('w') //false
   reg1.test('wwwww') //true

   /^p{3,}$/
   /^P{6,18}$/
   /^p*$/ || /^p{0,}$/
   /^p+$/ || /^p{1,}$/
   ```

3. 范围

   - 表示字符的范围
   - 定义的规则限定在某个范围，比如只能在英文字母，或者数字等的，用 **[]** 表示范围
     [abc] 匹配包含的单个字符，也就只有 a ｜ b ｜ c 这三个单字符返回 true，可以理解为多选 1
     [a-z] 连字符。来指定字符范围。[a-z]表示 a 到 z 26 个英文字母
     [^a-z] 取反符。表示匹配除了小写字母以外的字符

   ```js
   //元字符的范围
   // 1.  [abc] 匹配包含的单个字符，多选1
   const reg1 = /^[abc]$/
   reg1.test('a') // true
   reg1.test('b') // true
   reg1.test('c') // true
   reg1.test('d') // false
   reg1.test('ab') // false

   // 2.  [a-z] 连字符
   const reg2 = /^[a-z]$/
   reg2.test('a') // true
   reg2.test('b') // true
   reg2.test('c') // true
   reg2.test('d') // true
   reg2.test('ab') // false
   reg2.test('0') // false
   //想包含小写字母，大写字母，数字
   const reg3 = /^[a-zA-Z0-9]$/
   //用户名可以输入英文字母，数字，下划线，要求6-16位
   const reg4 = /^[a-zA-Z0-9_]{6,16}$/

   // 3. [^a-z]   取反符
   const reg3 = /^[^a-z]$/
   ```

   元字符的范围：

   > 表示字符的分组和范围
   >
   > - 使用连字符 - 表示一个范围
   >   `console.log(/^[a-z]$/.test('c')) // true`
   > - 比如：
   >   [a-z] 表示 a 到 z 26 个英文字母都可以
   >   [a-zA-Z] 表示大小写都可以
   >   [0-9] 表示 0-9 的数字都可以
   >   /^[1-9][0-9]{4,}$/, 从10000开始
   > 用户名正则：/^[a-zA-Z0-9-_]{6,16}$/

4. 字符类

   - 区分各种字符，例如区分字母和数字
   - 某些常见模式的简写方式，区分字母和数字

   | 字符类 |                            说明                            |
   | :----: | :--------------------------------------------------------: |
   |   \d   |            匹配 0-9 之间的任一数字，相当于[0-9]            |
   |   \D   |           匹配所有 0-9 以外的字符，相当于[^0-9]            |
   |   \w   |      匹配任意的字母、数字和下划线，相当于[a-zA-Z0-9_]      |
   |   \W   | 除了所有字母、数字和下划线以外的字符，相当于[^a-zA-Z0-9_]  |
   |   \s   | 匹配空格（包括行符、制表符、空格符等），相当于[\t\r\n\v\f] |
   |   \S   |           匹配非空格的字符，相当于[^\t\r\n\v\f]            |

   如日期格式： `/^\d{4}-\d{1,2}-\d{1,2}$/` 2024-07-04

   - 替换和修饰符

     - replace 替换方法，可以完成字符的替换
     - 语法：

       ```js
       字符串.replace(/正则表达式/，'替换的文本')

       // 替换和修饰符
       const str = '小母牛开飞机，牛逼上天了'
       const res = str.replace(/牛逼/，'**') // 这样写只能替换匹配到的第一个符合规则的字符。

       ```

     - 修饰符 约束正则执行的某些细节行为，如是区分大小写，是否支持多行匹配等
     - 语法：

       ```js
       /表达式/修饰符
       > i是单词 ignore的缩写，正则匹配时字母不区分大小写
       > g是单词 global的缩写，匹配所有满足正则表达式的结果
       /a/i.test('a') //true
       /a/i.test('A') //true

       //修饰符 g
       const str = '小母牛开飞机，牛逼上天了，牛逼可撕拉'
       const res = str.replace(/牛逼/g，'**')
       ```

       例子： 隐藏正则手机号中间四位数

     ```js
     const tel = '17856237855'
     // 1. 利用正则替换手机号
     const reg = /^(\d{3})\d{4}(\d{4})$/
     // 2.利用replace替换
     // $1 可以得到正则中第一个小括号里面的内容
     // $2 可以得到正则中第二个小括号里面的内容
     const str = tel.replace(reg, '$1****$2')
     ```
