import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Test" icon="exit" route="/pages/one" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Check" icon="exit" route="/pages/one" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Test2" icon="exit" route="/pages/two" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Test3" icon="exit" route="/pages/two" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Test4" icon="exit" route="/pages/two" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
            <SidebarLink title="Test" route="/pages/two" onClick={this.hideSidebar} />
            <SidebarLink title="Testt" route="/pages/two" onClick={this.hideSidebar} />
            <SidebarLink title="ABC" route="/pages/two" onClick={this.hideSidebar} />
            <SidebarLink title="Lorel Impsum" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
          
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
