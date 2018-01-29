import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';

export default class AppBarComponent extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div>
        <AppBar
            title="FIRE - First Instance Reporting Event"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={<IconButton><HomeIcon /></IconButton>}            
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Menu" />
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>Report</MenuItem>
          <MenuItem onClick={this.handleClose}>Complaint</MenuItem>
          <MenuItem onClick={this.handleClose}>Network</MenuItem>
        </Drawer>
      </div>
    );
  }
}