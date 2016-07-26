import React , {Component} from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import { fetchBucketList } from '../actions'
import { handleBucketListItem } from '../actions'
import { connect } from 'react-redux';
import '../index.css';

export default class Bucketlist extends Component{
constructor(){
  super()
    this.state = {
    name: '',
    bucketlistitemname: '',
    bucketlistId: null,
  }
  this.handleClick = this.handleClick.bind(this);
  this.changeName = this.changeName.bind(this);
  this.changeBucketListItemName = this.changeBucketListItemName.bind(this);
  this.renderBucketList = this.renderBucketList.bind(this);
  this.renderItems = this.renderItems.bind(this);
  this.handleAddItems = this.handleAddItems.bind(this);
}
componentDidMount(){
  this.props.getBucketlist()
}
changeName(e){
  this.setState({name: e.target.value})
}
changeBucketListItemName(e){
  this.setState({bucketlistitemname: e.target.value })
}

handleClick(){
  let objectBucketlist = Object.assign({}, {name: this.state.name});
  this.props.handleBucketList(objectBucketlist);
  console.log(objectBucketlist);
}
handleAddItems(){
  let objectBucketlistItem = Object.assign({}, {id: this.state.bucketlistId, name: this.state.bucketlistitemname});
  this.props.handleBucketListItem(objectBucketlistItem);
  console.log(objectBucketlistItem);
}
show(){
  this.setState({show: true})
}
close(){
  this.setState({show: false})
}
changeBucketList(id){
  this.setState({bucketlistId: id});
}
renderBucketList() {
  return this.props.bucketlists.map((bucketlist) => {
    return (<tr className="vert">
                <td className="mui--appbar-height">
                  <a href="#" className="white" onClick={this.changeBucketList.bind(this, bucketlist.id)}>
                    <div className="mui-divider-bottom"></div>
                    <h4>{bucketlist.name}</h4>
                    <h4>{bucketlist.items.length}</h4>
                    <div className="mui--divider-bottom"> </div>
                  </a>
                </td>
                <td className="mui--appbar-height">
                  <i className="material-icons bold">navigate_next</i>
                </td>
              </tr>);
  });
}
renderItems(){
  let id = this.state.bucketlistId;
  let bucketlistItem = this.props.bucketlists.find((bucketlist) => bucketlist.id === id );
  console.log(bucketlistItem);
  return bucketlistItem ? bucketlistItem.items.map((item) => {
    return (
    <div>
     <div className="mui-panel">
            <h4 className="left">{item.name}</h4>
          </div>

      </div>
            );
  }): null;
}
render(){
  return (
    <div className="mui-container-fluid">
      <div className="mui-row">
        <div className="mui-col-xs-6 mui-col-md-4">
          <div>
          </div>
          <div className="mui-appbar bgcolor">
            <table className="active">
              {this.renderBucketList()}
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
          {this.renderItems()}

        </div>
        <div>
         <button className="mui-btn mui-btn--primary align-down" onClick={this.show.bind(this)}> Add Item </button>
            <Modal show={this.state.show} onClose={this.close.bind(this)}>
            <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
            <div>
            </div>
            <div className="mui-textfield">
              <input type="text" value={`${this.state.bucketlistitemname}`} onChange={this.changeBucketListItemName}/>
              <label>Name</label>
            </div>
            <button type="Submit" onClick={this.handleAddItems}  className="mui-btn mui-btn--raised">
            Submit
            </button>
            </Modal>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bucketlists: state.bucketlist.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBucketlist: () => dispatch(fetchBucketList()),
    handleBucketListItem: (objectBucketlistItem) => dispatch(handleBucketListItem(objectBucketlistItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucketlist);