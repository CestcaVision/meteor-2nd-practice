UserInfo = React.createClass({
  render(){
    let userinfo= this.props.userinfo;
    return (
      <div>
      <img src={userinfo.avatar_url}/>
      <b>followers:</b><span>{userinfo.followers}</span>
      </div>
    )
  }
})
