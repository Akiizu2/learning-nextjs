import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {
  SignIn,
  Navbar,
  Sidebar,
  Head,
  Loading,
} from '../feature'
import reducers from '../reducer'
import styles from '../theme/_app.scss';
import NotFound from './not-found';
import {
  initialize,
} from '../firebase'
import { getUser } from '../firebase/auth'

const store = createStore(reducers)
initialize()

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }

  }
  getUserRef
  state = {
    isInitializing: true,
    isSignedIn: false,
  }

  componentDidMount() {
    this.checkUserStatus()
  }

  checkUserStatus = () => {
    getUser(false, (user) => {
      const isSignedIn = (user.type === 'signed_in')
      this.setState({
        isSignedIn,
        isInitializing: false,
      })
    })
  }

  componentWillUnmount() {
    this.getUserRef()
  }

  renderApp = () => {
    const {
      Component,
      pageProps,
      router,
    } = this.props
    const { isSignedIn, isInitializing } = this.state
    if (router.pathname === '/_error') {
      return <NotFound />
    }
    if (isInitializing) {
      return <Loading />
    }
    if (!isSignedIn) {
      return <SignIn isSignedIn={this._onSignedIn} />
    }
    return (
      <React.Fragment>
        <Head />
        <Sidebar />
        <Navbar />
        <div className={styles.contentLayout}>
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container>
        <Provider store={store}>
          {this.renderApp()}
        </Provider>
      </Container >
    )
  }
}