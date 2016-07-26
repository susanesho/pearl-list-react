import React , {Component} from 'react';
import { connect } from 'react-redux';
import { handleSignup } from '../actions'

class Signup extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changeName(e){
    this.setState({name: e.target.value})
  }
  changePassword(e){
    this.setState({password: e.target.value})
  }
   changeEmail(e){
    this.setState({email: e.target.value})
  }

  handleClick(){
    let objectSignup = Object.assign({}, this.state);
    this.props.handleSignup(objectSignup);
    console.log(this.state);
  }

  render(){
   return (
      <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col">
      </div>
      <div className="mdl-cell mdl-cell--4-col">
        <div className="page-content paddit">
          <legend>Sign up a new user</legend>
          <div className="mui-textfield">
            <input type="text" value={`${this.state.name}`} name="name" onChange={this.changeName}/>
            <label>Name</label>
          </div>
          <div className="mui-textfield">
            <input type="text" name="_method" value={`${this.state.email}`} onChange={this.changeEmail}/>
             <label>Email</label>
           </div>
           <div className="mui-textfield">
             <input type="text"  name="_method" value={`${this.state.password}`}
             onChange={this.changePassword}/>
             <label>Password</label>
           </div>
           <button type="Submit" onClick={this.handleClick}  className="mui-btn mui-btn--raised">
           Submit
           </button>
        </div>
      </div>
      <div className="mdl-cell mdl-cell--4-col">
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignup: (signupObject) => dispatch(handleSignup(signupObject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);