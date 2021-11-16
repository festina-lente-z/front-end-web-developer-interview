# CSS布局
## 盒模型的宽度如何计算
### 如下代码，请问`div1`的`offsetWidth`是多大？
```html
<style>
  #div1 {
    width: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px;
  }
</style>

<div id="div1"></div>
```
- offsetWidth = (内容宽度 + 内边距 + 边框)， 无外边距
- 因此答案是**122px**

### 如果让`offsetWidth = 100px`该怎么做？
- CSS中的`box-sizing`属性定义了应该的如何计算一个元素的总宽度和总高度
  - `content-box`是默认值。如果设置一个元素的宽为100px，那么这个元素的内容区(content)会有100px，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
  - `border-box`告诉浏览器：想要设置的边框和内边距的值是包含在width内的。
因此在样式中加上`box-sizing: border-box;`即可。
```css
#div1 {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
}
```
## margin纵向重叠的问题
### 如下代码，AAA 和 BBB 之间的距离是多少？
```html
<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```
```css
p {
  font-size: 16px;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 15px;
}
```
- 相邻元素的`margin-top`和`margin-bottom`会发生重叠
- 空白内容的`<p></p>`也会重叠
- 答案：15px

## margin负值的问题
### `margin-top`、`margin-right`、`margin-bottom`、`margin-left`分别设置负值会怎么样？
- `margin-top`负值，元素向上移动
- `margin-left`负值，元素向左移动
- `margin-right`负值，右侧元素左移，自身不受影响
- `margin-bottom`负值，下方元素上移，自身不受影响
????好像还要分情况考虑

## BFC的理解和应用
### 什么是BFC?
- Block Format Context，块级格式化上下文
- 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
### 形成BFC的常见条件
- float不是none
- position是absolute或fixed
- overflow不是visible
- display是flex inline-block等
### BFC的常见应用
- 清除浮动
- 去margin重叠
- 实现更健壮、更智能的自适应布局

## 如何实现圣杯布局和双飞翼布局
### 圣杯布局和双飞翼布局的目的
- 三栏布局，中间一栏最先加载和渲染（内容最重要）
- 两侧内容固定，中间内容随着宽度自适应
- 一般用于PC网页

### 圣杯布局和双飞翼布局的技术总结
- 使用float布局
- 两侧使用margin负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个用padding（圣杯布局），一个用margin（双飞翼布局）
### 圣杯布局步骤
0. 首先要设置宽度，center自适应，宽度为100%
1. 把center,left,right设置成float:left
2. footer清除浮动，可以给container创建一个bfc
3. 给父元素container设置padding
4. left,right设置margin负值
5. 调整，position:relitive,right(当position设置为relative时，right属性指定了元素的右边界离开其正常位置的偏移)

### 双飞翼布局步骤
- 首先要设置宽度，center自适应，宽度为100%
- center包裹一层div用于设置margin为两侧挪出位置
- 把center,left,right设置成float:left
- left,right设置margin负值（这里都是margin-left)
## 手写clearfix

## flex实现一个三点的色子
Flex 是 Flexible Box的缩写，意为”弹性布局“，用来为盒状模型提供最大的灵活性。
### flex常用语法（必须熟练掌握）
#### 容器的属性
- `flex-direction`：主轴（main axis）方向
- `justify-content`：主轴对齐方式
- `align-items`：交叉轴对齐方式
- `flex-wrap`：是否换行
#### 项目的属性
- `align-self`：子元素在交叉轴上的对齐方式

实现三点色子步骤：
- 圆点用span（不用块级元素）

# CSS定位
## absolute和relative分别依据什么定位？
### relative依据自身定位
### absolute依据最近一层的定位元素定位
- 定位元素
  - absolute、relative、fixed
  - body

## 居中对齐有哪些实现方式？
### 水平居中
- inline元素：`text-align: center`（text-align CSS属性定义行内内容（例如文字）如何相对它的块父元素对齐。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐。）
- block元素：`margin: auto`
- absolute元素：`left: 50%` + `margin-left`负值
### 垂直居中
- inline元素：`line-height`的值等于`height`值
- absolute元素：`top: 50%` + `margin-top`负值（必须要知道子元素的宽和高！）
- absolute元素：`transfrom: translate(-50%, -50%)`(水平垂直居中)
- absolute元素：`top`,`left`,`bottom`,`right`=0 + `margin: auto`
### 垂直居中

# CSS图文样式
## line-height如何继承
### line-height如何继承
- 写具体数值，如30px，则继承该值
- 写比例，如2，1.5，则继承该比例
- 写百分比，如200%，则继承计算出来的值

# CSS响应式
## rem是什么？
rem是一个长度单位
- px，绝对长度单位，最常用
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素，常用于响应式布局
## 响应式布局的常见方案？
- media-query，根据不同的屏幕宽度设置根元素font-size
- rem，基于根元素的相对单位

## vw/vh
- rem弊端
  - 阶梯性
### 网页视口尺寸
- `window.screen.height`：屏幕高度
- `window.innerHeight`：网页视口高度
- `document.body.clientHeight`：body高度

### vw/vh
- vh 网页视口高度的1/100
- vw 网页视口宽度的1/100
- vmax取两者最大值；vmin取两者最小值