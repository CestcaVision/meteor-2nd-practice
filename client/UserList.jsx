const {Avatar,Card}=mui;
UserList = React.createClass({
  render(){
    let allOnlineUsers = _.map(this.props.users,(user,key)=>{
      return (<li key={key}>
        <Avatar src={user.avatar}/>
        <span>{user.username}</span>
      </li>)
    })
    return (<Card>
      <span>在线人数{_.size(this.props.users)}</span>
      <ul>
      {allOnlineUsers}
      </ul>
    </Card>)
  }
})
