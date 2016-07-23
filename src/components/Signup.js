import React , {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changeUsername(e){
    this.setState({username: e.target.value})
  }
  changePassword(e){
    this.setState({password: e.target.value})
  }
   changeEmail(e){
    this.setState({email: e.target.value})
  }
  handleClick(){
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
            <input type="text" value={`${this.state.username}`} name="name" onChange={this.changeUsername}/>
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