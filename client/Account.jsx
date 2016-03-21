const {Card,TextField,RaisedButton} = mui;
Account = React.createClass({
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
  render(){
    let githubInfo;
    if(!_.isEmpty(this.state.user)){
      githubInfo = (<div>
        <UserInfo userinfo={this.state.user}/>
        <RaisedButton label='保存'/>
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
