import React,{Component, Fragment} from 'react'

import './style.css'

class Xiaojiejie extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: 'jspang',
      list: [
        '基础服务',
        '精油推背'
      ]
    }
  }
  render(){
    return (
      <Fragment>
        {/* add */}
        <div>
          <label htmlFor='jspang'>增加服务：</label>
          <input id='jspang' className='input' value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
          
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index+item} 
                    onClick={this.deleteItem.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}
                    >
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(e){
    // console.log(this)
    // this.state.inputVal = e.target.value

    this.setState({
      inputVal: e.target.value
    })
  }
  // 增加列表
  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  // 删除列表项
  deleteItem(index){
    // console.log(index)
    let areaList = this.state.list
    // 不要直接操作 this.state.list.splice，这样会影响性能
    areaList.splice(index, 1) // 删除一个
    this.setState({
      list: areaList
    })
  }
}

export default Xiaojiejie