# RegExp

## 正则
>首先了解什么是正则，是一种**字符串匹配的规则**。
>使用场景：
>表单的验证规则
>路由的过滤，敏感词汇的替换，提取字符串特定的部分

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

     ^和$，两个一起使用表示==精确匹配==

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
  
  |量词| 说明 |
  |:---:|:---:|
  |*|重复零次或者更多次|
  |+|重复一次或更多次|
  |?|重复零次或更多次|
  |\{n}| 重复 n 次 |
  | \{n,}|重复 n 次或更多次|
  | \{n,m}|重复 n 到 m 次|
   ```js
   // 量词
   // * 重复次数 >= 0 次
   const reg1 = /^w*$/
   reg1.test('') //true
   reg1.test('w') //true
   reg1.test('ww') //true
   ```

1. 范围
   - 表示字符的范围
2. 字符类
   - 区分各种字符，例如区分字母和数字