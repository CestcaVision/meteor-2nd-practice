const{ SelectableContainerEnhance,List, ListItem,LeftNav}=mui;
let SelectableList = SelectableContainerEnhance(List);
AppLeftNav = React.createClass({
  getInitialState() {
 return {
   open:false,
   selectedIndex: '' };
},
handleUpdateSelectedIndex(e,index) {
  this.context.router.push(index);
  this.setState({
    open:false,
    selectedIndex: index
})
},
contextTypes: {
  router: React.PropTypes.object.isRequired
},

componentDidMount() {
  this.setState({
    selectedIndex: this._getSelectedIndex()
  })
},

componentWillReceiveProps() {
  this.setState({
    selectedIndex: this._getSelectedIndex()
  })
},
handleToggle(){
  this.setState({
    open:!this.state.open
  })
},
_getSelectedIndex() {
  return this.context.router.isActive('/home') ? '/home' :
    this.context.router.isActive('/signup') ? '/signup' :
    this.context.router.isActive('/account') ? '/account' :
    this.context.router.isActive('/chat') ? '/chat' :
    this.context.router.isActive('/login') ? '/login' : '';
},
  render(){
    let currentUser= this.props.currentUser;
    return (
      <LeftNav open={this.state.open}
               docked={false}
               onRequestChange={clickaway => this.setState({open})}>
      <SelectableList valueLink={{
          value: this.state.selectedIndex,
          requestChange: this.handleUpdateSelectedIndex}}>
      <ListItem
       value='/home' primaryText="HOME"/>
      <ListItem
      value={ currentUser ? '/account' : '/signup' }
            primaryText={ currentUser ? 'Account' : 'Sign up' }/>
      <ListItem
      value={ currentUser ? '/chat' : '/login' }
            primaryText={ currentUser ? 'Chat' : 'Log in' } />
      </SelectableList>
      </LeftNav>
    )
  }
})
