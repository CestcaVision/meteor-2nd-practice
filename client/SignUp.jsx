const {TextField, RaisedButton}=mui;
SignUp = React.createClass({
  contextTypes:{
   router: React.PropTypes.object.isRequired
  },
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    Accounts.createUser({
      username:username,
      password:password
    },(err)=>{
      if(err){
        console.log(err);
        return;
      }
      this.context.router.push('/account')
    })
  },
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='username'/>
      <TextField ref='password'/>
      <RaisedButton type='submit' label="注册"/>
      </form>
      </div>
    )
  }
})
