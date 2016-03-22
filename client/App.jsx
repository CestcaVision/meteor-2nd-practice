const {AppBar} = mui;
App= React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    return {currentUser: Meteor.user()}
  },
  componentWillMount(){
    let setNavBarState = function(){
      this.setState({renderNavBar:document.body.clientWidth>700})
    }.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  },
  getAppBar(){
    return(
      <AppBar title={this._getAppBarTitle()} onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>
    )
  },
  getLoginAppBar() {
    return (
      <AppBar title={this._getAppBarTitle()}
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        iconStyleRight={{marginTop: 0}}
        iconElementRight={<LogOutMenu currentUser={this.data.currentUser}/>}/>
    );
  },
  _onLeftIconButtonTouchTap(){
    this.refs.leftNav.handleToggle()
  },
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  _getAppBarTitle(){
    return this.context.router.isActive("/home")?"HOME":
           this.context.router.isActive("/signup")?"SIGNUP":
           this.context.router.isActive("/account")?"ACCOUNT":
           this.context.router.isActive("/chat")?"CHAT":
           this.context.router.isActive("/login")?"LOGIN":"HOME"
  },
  render(){
    return (<div>
        {this.state.renderNavBar?<NavBar currentUser={this.data.currentUser}/>:
        this.data.currentUser?this.getLoginAppBar():this.getAppBar()
      }
       <AppLeftNav ref='leftNav' currentUser={this.data.currentUser}/>
        {this.props.children}
      </div>)
  }
})
