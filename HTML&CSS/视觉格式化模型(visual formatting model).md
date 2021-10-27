> 参考：[visual formatting model](https://www.w3.org/TR/CSS22/visuren.html)
# 视觉格式化模型(visual formatting model)
## 什么是视觉格式化模型(visual formatting model)
- 视觉格式化模型(visual formatting model)是用来处理和在视觉媒体上显式文档时使用的**计算规则**。

## 视觉格式化模型(visual formatting model)功能
- 视觉格式化模型(visual formatting model)会根据**CSS盒子模型**将文档中的元素转换为一个个盒子。
- 视觉格式化模型(visual formatting model)会根据盒子的包含块(containing block)的边界来渲染盒子。
  > 通常，盒子会创建一个包含其后代元素的包含块，但是盒子并不由包含块所限制，当盒子的布局跑到包含块的外面时称为溢出(overflow)

## 每个盒子的布局由哪些因素决定？
- 盒子的尺寸
  - 精确指定
  - 由约束条件指定
  - 没有指定
- 盒子的类型
  - 行内盒子(inline)
  - 行内级盒子(inline-level)
  - 原子行内盒子(atomic inline-level)
  - 块盒子(block)
- 定位方案(positioning scheme)
  - 普通流(normal flow)定位
  - 浮动(float)定位
  - 绝对(absolute)定位
- 文档树中的其他元素
  - 当前盒子的子元素或兄弟元素
- 视口(viewport)尺寸与位置
- 所包含的图片的尺寸
- 其他的某些外部因素

## 常见名字中英对照及解析(CSS 2.2)
|英|中|解析|
|-|-|-|
|`block`|**块**|一个抽象的概念，一个块在文档流上占据一个独立的区域，块与块之间在垂直方向上按照顺序依次堆叠|
|`containing block`|**包含块**|包含其他盒子的块称为包含块|
|`box`|**盒子**|一个抽象的概念，由CSS引擎根据文档中的内容所创建，主要用于文档元素的定位、布局和格式化等用途。盒子与元素并不是一一对应的，**有时多个元素会合并生成一个盒子，有时一个元素会生成多个盒子（如匿名盒子）**|
|`block-level element`|**块级元素**|元素的`display`为`block`、`list-item`、`table`时，该元素将成为块级元素。元素是否是块级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局|
|`block-level box`|**块级盒子**|由块级元素生成。一个块级元素至少会生成一个块级盒子，但也有可能生成多个（例如列表项元素）。Block-level boxes are boxes that participate in a **BFC(block formatting context)**.|
|`block box`|**块盒子**|如果一个块级盒子同时也是一个块容器盒子，则称其为块盒子。除具名块盒子之外，还有一类块盒子是匿名的，成为匿名块盒子（Anonymous block box），匿名盒子无法被CSS选择符选中|
|`block container box`|**块容器盒子**|块容器盒子侧重于当前盒子作为“容器”的这一角色，它不参与当前块的布局和定位，它所描述的仅仅是当前盒子与其后代之间的关系。|
|`inline-level element`|**行内级元素**|`display`为`inline`、`inline-block`、`inline-table`的元素称为行内级元素。与块级元素一样，元素是否是行内级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局|
|`inline-level box`|**行内级盒子**|由行内级元素生成。行内级盒子包括行内盒子和原子行内盒子两种，区别在于该盒子是否参与行内格式化上下文的创建|
|`inline box`|**行内盒子**|参与行内格式化上下文创建的行内级盒子称为行内盒子。与块盒子类似，行内盒子也分为具名行内盒子和匿名行内盒子（anonymous inline box）两种|
|`atomic inline-level box`|**原子行内级盒子**|不参与行内格式化上下文创建的行内级盒子。原子行内级盒子一开始叫做原子行内盒子（atomic inline box），后被修正。原子行内级盒子的内容不会拆分成多行显示|
|`replaced element`|**可替换元素**|[可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)|

## block box,block container box,block-level box关系
- block container box（块容器盒子）
  - 元素是非可替换元素(non-replaced element)
  - `display: block|list-item|inline-block`
# 定位方案(positioning scheme)
## 普通流(normal flow)
> normal flow的翻译别名有很多，目前遇到的有：“文档流”、“常规流”、“普通流”、“正常流”
- block formatting of block-level boxes
- inline formatting of inline-level boxes
- relative positioning of block-level and inline-level boxes
## 浮动(float)
## 绝对(absolute)