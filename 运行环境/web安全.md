## 常见的web前端攻击方式有哪些？
### XSS（Cross-Site Scripting）跨站请求攻击
#### 情景模拟
- 一个博客网站，我发表一篇博客，其中嵌入`<script>`脚本
- 脚本内容：获取cookie，发送到我的服务器（服务器配合跨域）
- 发布这篇博客，有人查看它，我轻松收割访问者的cookie
#### XSS预防
- 替换特殊字符，如`<`变为`&lt;`，`>`变为`&gt;`
- `<script>`变为`&lt;script&gt;`，直接显示，而不会作为脚本执行
- 前端要替换，后端也要替换，都做总不会有错
### CSRF跨站请求伪造
#### 情景模拟
- 你正在购物，看中了某个商品，商品id是100
- 付费接口是xxx.com/pay?id=100，但没有任何验证
- 我是攻击者，我看中了一个商品，id是200
- 我向你发送一封电子邮件，邮件标题很吸引人
- 但邮件正文隐藏着`<img src=xxx.com/pay?id=200/>`
- 你一查看邮件，就帮我购买了id是200的商品
#### CSRF预防
- 使用post接口
- 增加验证，例如密码、短信验证码、指纹等

## 防抖 debounce
- 监听一个输入框的，文字变化后触发change事件
- 直接用keyup事件，则会频繁触发change事件
- 防抖：用户输入结束或暂停时，才会触发change事件