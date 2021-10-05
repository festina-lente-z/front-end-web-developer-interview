> 一般来说在一面或者二面，BFC和清除浮动经常一起考

## BFC是什么？

- BFC（Block Formatting Context）块级格式化上下文
- 当元素在页面上水平或垂直排布时，它们之间如何相互影响，CSS有几套不同的规则，其中一套规则叫做**格式化上下文**（Formatting Context）。BFC是适用于**块级盒子**叠放的一套规则。
- BFC规则：
  - 规定了页面必须自动包含突出的浮动元素（否则浮动元素中的内容可能会跑到可滚动区域之外）
  - 所有块级盒子的左边界默认与包含块的左边界对齐（如果文字顺序是从右向左，那么与包含块的右边界对齐）

## 触发BFC的条件

- `<html>`根元素

- `float`的值不为`none`

  ```css
  float: left;
  float: right;
  float: inline-start;
  float: inline-end;
  ```

- `overflow`的值为`auto`、`scroll`或`hidden`

  ```css
  overflow: auto;
  overflow: scroll;
  overflow: hidden;
  ```

- `display`的值为`table-cell`、`table-caption`和`inline-block`中的任何一个

  ```css
  display: table-cell;
  display: table-caption;
  display: inline-block;
  ```

- `position`的值为`absolute`和`fixed`

  ```css
  position: absolute;
  position: fixed;
  ```

  

- [ ] 小红书｜BFC与清除浮动
- [ ] 小红书｜怎么理解 BFC？如何触发 BFC？
- [ ] 小红书｜BFC的理解、如何触发
- [ ] 网易｜你有用到BFC，它是什么？怎么才能触发BFC呢？
- [ ] 字节跳动｜BFC与float元素相互覆盖吗？
- [ ] 字节跳动｜实现`三栏布局`, 用`float + BFC`和`flex`两种方式
- [ ] 网易｜浮动？清楚浮动方式？BFC?
- [ ] 转转｜BFC 还可以解决什么问题？
- [ ] 美团｜BFC介绍一下
- [ ] 小鹅通｜讲讲BFC
- [ ] 百度｜介绍BFC
- [ ] 百度｜BFC的实现及应用
- [ ] 蔚来汽车｜如何触发BFC
- [ ] 什么是BFC? 详细说说
- [ ] shopee虾皮｜bfc概念和作用
- [ ] 字节跳动｜BFC，什么是BFC，有什么作用，应用场景
- [ ] 米哈游｜BFC有什么用？BFC化有哪一些方法？
- [ ] 阿里巴巴｜BFC介绍
- [ ] CVTE｜BFC是什么？怎么生成一个BFC？
- [ ] 网易｜margin塌陷问题，可以用BFC解决
- [ ] 爱奇艺｜什么是BFC？有什么特点？怎么产生BFC？
- [ ] BFC以及应用场景
- [ ] 触发BFC的条件
- [ ] 腾讯｜讲一下BFC布局，怎么触发

