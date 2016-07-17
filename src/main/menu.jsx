import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {Menu, MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import {
  ActionAccountCircle,
  ActionDateRange,
  ActionAssignment,
} from 'material-ui/svg-icons';

export default class MainMenu extends React.Component {
  render() {
    const style = {
      width: '100%',
      display: 'inline-block',
    };
    const itemStyle = {
      cursor: 'pointer',
    };
    return (
      <Drawer
        docked={false}
        open={this.props.enable}
        onRequestChange={open => this.props[open ? 'open' : 'close']()}
      >
        <Menu
          style={style}
          listStyle={style}
          autoWidth={false}
          onItemTouchTap={this.props.close}
        >
          <MenuItem
            leftIcon={<ActionAccountCircle />}
            onTouchTap={this.props.openLoginForm}
            style={itemStyle}
          >
            ログイン
          </MenuItem>
          <Divider />
          <MenuLink
            href="/"
            leftIcon={ActionDateRange}
          >
            時間割
          </MenuLink>
          <MenuLink
            href="/events"
            leftIcon={ActionAssignment}
          >
            イベント一覧
          </MenuLink>
        </Menu>
      </Drawer>
    );
  }
}

class MenuLink extends React.Component {
  render() {
    const style = {
      color: 'black',
      textDecoration: 'none',
    };
    return (
      <Link to={this.props.href} style={style}>
        <MenuItem
          leftIcon={<this.props.leftIcon/>}
          onTouchTap={this.props.onTouchTap}
        >
          {this.props.children}
        </MenuItem>
      </Link>
    );
  }
}
