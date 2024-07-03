# Markdown 的快捷语法

## 标题标签

```markdown
# 一级标题

## 二级标题

3-6 级标题以此类推 #号后跟一个空格
```

## 段落标签

```markdown
直接用空行分隔一行或多行文本
```

## 换行符

> `<br>`
> 例如这样：
> First line with two spaces after.\<br>
> And the next line.

## 强调

> 可以给文本设为粗体或者斜体来表示强调

例如：

> 加粗：`**加粗字体**` **这是加粗字体**（推荐用这种）
> \_\_blod next\_\_
> 斜体：`*斜体*` _这是斜体字_
> 斜体和粗体结合：`***强调***` **_斜体和粗体结合_**

## 块级引用

> \>在段落的前面加个大于号
> 嵌套引用：
>
> > 想要几级嵌套就在段落前面加几个大于号。
> > 例如:三级引用 `>>>`
> > **_可以和其他的语法搭配使用_**

## 有序列表

1. 一
2. 二
   `数字后面一个点再加一个空格就是有序标签`

## 无序列表

- 无序列表
- 二
  `减号后面加空格`

## 代码块

    代码块通常缩进四个空格或一个制表符。当它们在列表中时，将它们缩进八个空格或两个制表符。

1.  Open the file.
2.  Find the following code block on line 21:

        <html>

        </html>

3.  Update the title to match the name of your website.

## 图片引用

\!\[]()
`![这里写文字](这里写图片地址)`

## 有序和无序列表可以相互嵌套引用

## code 代码

两个反引号 \` 这里写代码 \`

## 转译反引号

如果您想要表示为代码的单词或短语包含一个或多个反引号，您可以通过将单词或短语括在双反引号 ( `` ) 中来转义它。

`` 转译反引号 `code` ``
\`\` 转译反引号 \`code` ``

## 水平线

要创建水平线，请在一行上使用三个或更多星号 ( \*\*\* )、破折号 ( --- ) 或下划线 ( \_\_\_ )。

---

## 链接

`[]()`

## URL 和电子邮件地址

\<https://www.baidu.com\>
\<dddd@qq.com>

## **_拓展语法_**

## 表格 {#table-el}

\|表头\|表头\|<br>
\|---\|---\|

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

如果想控制表格内容的显示位置用如下的显示语法：
\| :--- 靠右 | :----:居中 | 居左 ---: |
| Syntax | Description | Test Text |
| :--- | :----: | ---: |
| Header | Title | Here's this |
| Paragraph | Text | And more |

## 围栏代码块

\```(这里写语言)

这里写代码
\```

## 脚注

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

## 锚链接

\[Heading IDs](#heading-ids)
{#heading-ids}

[链接到表格](#table-el)

## Task Lists 任务列表

\- [ ] Write the press release
\- [ ] Update the website
\- [ ] Contact the media

## 删除线

`~~内容~~`
~~this is a strikethough~~

## 高亮

`==内容==`
==高亮==

## 下标

`H~2~O~2~`H~2~O~2~

## 上标

`X^2^` X^2^
