const {Card,TextField,RaisedButton} = mui;
Account = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('userData');
    return {
      currentUser:Meteor.user()
    }
  },
  getInitialState(){
    return {
      user:{}
    }
  },
  handleSubmit(e){
    e.preventDefault();
    let account = this.refs.account.getValue();
    let url= `https://api.github.com/users/${account}`;
    HTTP.call('get',url,(err,res)=>{
      if(err){
        console.log(err);
        return;
      }
      this.setState({user:JSON.parse(res.content)})
    })
  },
  handleClick(e){
    e.preventDefault();
    Meteor.call('userProfile',this.state.user,(err)=>{
      if(err){
        console.log(err);
        return;
      }
      this.context.router.push('/home')
    })
  },
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  render(){
    let githubInfo;
    if(!_.isEmpty(this.state.user)){
      githubInfo = (<div>
        <UserInfo userinfo={this.state.user}/>
        <RaisedButton onClick={this.handleClick} label='保存'/>
        </div>)
    }else if (this.data.currentUser&&this.data.currentUser.avatar){
      githubInfo = (<div>
        <UserInfo userinfo={this.data.currentUser}/>
        </div>)
    }
    return (
      <Card>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='account'/>
      <RaisedButton type="submit" label="SEARCH GITHUB"/>
      </form>
      {githubInfo}
      </Card>
    )
  }
})
