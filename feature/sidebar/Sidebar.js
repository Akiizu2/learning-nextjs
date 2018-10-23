import React, { Component } from 'react';
import Link from 'next/link'

import styles from './sidebar.module.scss';
import routes from '../../routes'

class Sidebar extends Component {
  state = {
    isReady: false,
  }

  renderMenuItem = () => {
    if (this.state.isReady) {
      const { state } = window.history
      const { url } = state
      return routes.map((route, index) => (
        <Link key={route.path + index} href={route.path}>
          <div className={`${styles.menuItem} ${url === route.path ? styles.active : ''}`}>
            <i className="material-icons">
              {route.icon}
            </i>
          </div>
        </Link>
      ))
    }
    return null
  }

  componentDidMount() {
    this.setState({
      isReady: true,
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.menuList}>
          {this.renderMenuItem()}
        </div>
      </div>
    );
  }
}

export default Sidebar;