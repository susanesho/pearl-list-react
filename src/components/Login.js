import React , {Component} from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changePassword(e){
    this.setState({password: e.target.value})
  }
  changeUsername(e){
    this.setState({email: e.target.value})
  }
  handleClick(){
    let objectLogin = Object.assign({}, this.state);
    this.props.handleLogin(objectLogin);
  }
  render(){
   return (
      <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col">
      </div>
      <div className="mdl-cell mdl-cell--4-col">
        <div className="page-content paddit">
          <legend>Login in a new user</legend>
          <div className="mui-textfield">
            <input type="text" value={`${this.state.email}`} name="email" onChange={this.changeUsername}/>
            <label>Name</label>
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
    handleLogin: (loginObject) => dispatch(handleLogin(loginObject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);