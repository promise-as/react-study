import React,{Component, Fragment} from 'react'

import XiaojiejieItem from './XiaojiejieItem'

import './style.css'

class Xiaojiejie extends Component {
  constructor(props){
    
    super(props)
    console.log(this)
    // 写在 constructor 里面比写在标签里面性能好
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.state = {
      inputVal: 'jspang',
      list: [
        '基础服务',
        '精油推背'
      ]
    }
  }

  static getDerivedStateFromProps (){
    console.log('getDerivedStateFromProps  -- 组件将要挂载')
    return null;
  }

  componentDidMount(){
    console.log('componentDidMount -- 组件挂载完成')
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate -- 组件将要更新完成')

    return true;
  }

  render(){
    console.log('render -- 组件将要渲染')

    return (
      <Fragment>
        {/* add */}
        <div>
          <label htmlFor='jspang'>增加服务：</label>
          <input 
            id='jspang' 
            className='input' 
            value={this.state.inputVal} 
            onChange={this.inputChange}
            ref = {input => this.input = input}  
          />
          <button onClick={this.addList}>增加服务</button>
        </div>
          
        <ul ref = {ul => this.ul = ul}>
          {
            this.state.list.map((item, index) => {
              return (
                <XiaojiejieItem
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem}
                 />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(){
    this.setState({
      inputVal: this.input.value
    })
  }
  // 增加列表
  addList(){
    this.setState({ // this.setState 是异步方法
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    
  }
  // 删除列表项
  deleteItem(index){
    let areaList = this.state.list
    // 不要直接操作 this.state.list.splice，这样会影响性能
    areaList.splice(index, 1) // 删除一个
    this.setState({
      list: areaList
    })
  }
}

export default Xiaojiejie