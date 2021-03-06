> 一般来说在一面或者二面，BFC和清除浮动经常一起考
>
> ⚠️一手英文资料才是权威

## BFC是什么？
- BFC（Block Formatting Context）块级格式化上下文

- 当元素在页面上水平或垂直排布时，它们之间如何相互影响，CSS有几套不同的规则，其中一套规则叫做**格式化上下文**（Formatting Context）。BFC是适用于**块级盒子**叠放的一套规则。
- A formatting context is the environment into which a set of related boxes are laid out.

- BFC规则：

  - 规定了页面必须自动包含突出的浮动元素（否则浮动元素中的内容可能会跑到可滚动区域之外）
  - 所有块级盒子的左边界默认与包含块的左边界对齐（如果文字顺序是从右向左，那么与包含块的右边界对齐）

  > In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the ['margin'](https://www.w3.org/TR/CSS2/box.html#propdef-margin) properties. Vertical margins between adjacent block-level boxes in a block formatting context [collapse](https://www.w3.org/TR/CSS2/box.html#collapsing-margins).
  >
  > In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's *line boxes* may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself [*may* become narrower](https://www.w3.org/TR/CSS2/visuren.html#bfc-next-to-float) due to the floats).

## 触发BFC的条件

> Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

- `<html>`根元素（本身就是BFC，不需要设置）

- `float`的值为`left`或`right`

  ```css
  float: left;
  float: right;
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

## body上加上`overflow:hidden`为什么没形成BFC阻止body下移?

这是我在测试的时候遇到的一个问题，然后找到的答案参考

https://segmentfault.com/q/1010000002645174

https://www.zhihu.com/question/35030317

https://www.w3.org/TR/CSS2/visuren.html#block-formatting

## BFC与float元素相互覆盖吗？

不会

https://segmentfault.com/q/1010000007581434

https://www.zhihu.com/question/456430251/answer/1856316756

## 浮动、清除浮动、闭合浮动

https://www.jianshu.com/p/8d8a50ad0167

## 牛客网近一月面经（202109）

- [ ] 小红书｜BFC与清除浮动
- [x] 小红书｜怎么理解 BFC？如何触发 BFC？
- [x] 小红书｜BFC的理解、如何触发
- [x] 网易｜你有用到BFC，它是什么？怎么才能触发BFC呢？
- [x] 字节跳动｜BFC与float元素相互覆盖吗？
- [ ] 字节跳动｜实现`三栏布局`, 用`float + BFC`和`flex`两种方式
- [ ] 网易｜浮动？清楚浮动方式？BFC?
- [ ] 转转｜BFC 还可以解决什么问题？
- [x] 美团｜BFC介绍一下
- [x] 小鹅通｜讲讲BFC
- [x] 百度｜介绍BFC
- [ ] 百度｜BFC的实现及应用
- [x] 蔚来汽车｜如何触发BFC
- [x] 什么是BFC? 详细说说
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

