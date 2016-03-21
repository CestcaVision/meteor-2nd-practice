const {Tab,Tabs}= mui;
NavBar = React.createClass({
  getInitialState(){
    return { tableIndex: ""}
  },
  contextTypes: {
    router:React.PropTypes.object.isRequired
  },
  handleTabsChange(value){
    this.context.router.push(value)
  },
  componentWillMount(){
    this.setState({
      tableIndex: this.getSelectedTab()
    })
  },
  componentWillReceiveProps(){
    this.setState({
      tableIndex: this.getSelectedTab()
    })
  },
  getSelectedTab(){
    return this.context.router.isActive("/home")?"/home":
           this.context.router.isActive("/signup")?"/signup":
           this.context.router.isActive("/account")?"/account":
           this.context.router.isActive("/login")?"/login":""
  },
  render(){
    let currentUser= this.props.currentUser;
    let logOutMenu = (currentUser)?<LogOutMenu currentUser={currentUser}/>:""
    return (<div>
      <Tabs value={this.state.tableIndex} onChange={this.handleTabsChange} >
      <Tab value="/home" label="主页"/>
      <Tab value={currentUser?'/account':'/signup'}
           label={currentUser?'我的账户':'注册'}/>
      <Tab value="/login" label="登录"/>
      </Tabs>
      {logOutMenu}
      </div>
    )}
})
