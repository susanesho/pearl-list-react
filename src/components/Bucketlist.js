import React , {Component} from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import { handleBucketList } from '../actions'
import { connect } from 'react-redux';
import '../index.css';

export default class Bucketlist extends Component{
constructor(){
  super()
    this.state = {
    name: ''
  }
  this.handleClick = this.handleClick.bind(this);
  this.changeName = this.changeName.bind(this);
  // this.changeItem = this.changeItem.bind(this);
}
componentDidMount(){
  this.props.getBucketlist()
}
changeName(e){
  this.setState({name: e.target.value})
}
// changeItem(e){
//   this.setState({item: e.target.value})
// }
handleClick(){
  let objectBucketlist = Object.assign({}, this.state);
  this.props.handleBucketList(objectBucketlist);
  console.log(objectBucketlist);
}
show(){
  this.setState({show: true})
}
close(){
  this.setState({show: false})
}
render(){
  console.log('got here?')
  return (
    <div className="mui-container-fluid">
      <div className="mui-row">
        <div className="mui-col-xs-6 mui-col-md-4">
          <div>
          </div>
          <div className="mui-appbar bgcolor">
            <table className="active">
              <tr className="vert">
                <td className="mui--appbar-height">
                  <a href="" className="white">
                    <div className="mui-divider-bottom"></div>
                    <h4>name</h4>
                    <h4>sizes</h4>
                    <div className="mui--divider-bottom"> </div>
                  </a>
                </td>
                <td className="mui--appbar-height">
                  <i className="material-icons bold">navigate_next</i>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <button className="mui-btn mui-btn--primary align" onClick={this.show.bind(this)}>Add Bucketlist</button>
            <Modal
            show={this.state.show}
            onClose={this.close.bind(this)}>
            <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
            <div>
            </div>
            <div className="mui-textfield">
              <input type="text" value={`${this.state.name}`} name="name" onChange={this.changeName}/>
              <label>Name</label>
            </div>
            <button type="Submit" onClick={this.handleClick}  className="mui-btn mui-btn--raised">
            Submit
            </button>
            </Modal>
          </div>
        </div>
        <button className="mui-btn mui-btn--primary float" disabled>Recently Added Products</button>
        <div className="mui-col-xs-12 mui-col-md-8">
          <div className="mui-panel">
            <h4 className="left">name</h4>
            <h4 className="blue">Added sosos</h4>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bucketlist: state.bucketlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBucketList: (objectBucketlist) => dispatch(handleBucketList(objectBucketlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucketlist);