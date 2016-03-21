const {IconMenu, MenuItem, IconButton}= mui;
const { NavigationMoreVert } = mui.SvgIcons;
LogOutMenu = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  handleSignOut(){
    Meteor.logout();
    this.context.router.push('/login')
  },
  render(){
    return (<IconMenu iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>} >
      <MenuItem primaryText={this.props.currentUser.username}/>
      <MenuItem primaryText="Sign Out" onTouchTap={this.handleSignOut}/>
    </IconMenu>)
  }
})
