const {Card,TextField, RaisedButton}=mui;
MessageForm = React.createClass({
  getInitialState(){
    return {
      inputValue:""
    }
  },
  handleInput(){
    this.setState({
      inputValue: this.refs.message.getValue()
    })
  },
  handleSubmit(e){
    e.preventDefault();
    let message = this.refs.message.getValue();
    let currentUser = this.props.currentUser;
    let username = currentUser.username;
    let avatar = currentUser.avatar;
    Meteor.call('messagesAdd',username,avatar,message,(err)=>{
      if(err){
        console.log(err);
        return;
      }
      this.setState({
        inputValue: ""
      })
    })
  },
  render(){
    return (<Card>
      <form onSubmit={this.handleSubmit}>
      <TextField value={this.state.inputValue} onChange={this.handleInput} ref='message'/><RaisedButton type="submit" primary={true} label="发送"/>
      </form>
      </Card>
    )
  }
})
