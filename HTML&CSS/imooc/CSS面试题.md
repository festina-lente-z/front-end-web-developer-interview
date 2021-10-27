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

## margin负值的问题

## BFC的理解和应用

## float布局的问题，以及clearfix

## flex布局的问题