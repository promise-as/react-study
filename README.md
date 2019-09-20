## 踩坑之路

### `react`异步执行的坑

- 如果在同一个方法中使用`this.setState`和`ref`，首先会先执行`ref`再执行`this.setState`

- 解决方法是：在`this.setState`回调函数中执行`ref`

  ```js
  this.setState({ 更新数据代码 }, () => { ref代码 })
  ```

  