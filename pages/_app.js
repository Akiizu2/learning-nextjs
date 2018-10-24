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
import { getUser, AUTH_CONST } from '../firebase/auth'

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

  state = {
    isInitializing: true,
    isSignedIn: false,
  }

  componentDidMount() {
    this.checkUserStatus()
  }

  checkUserStatus = () => {
    getUser(false, (user) => {
      const isSignedIn = (user.type === AUTH_CONST.SIGNIN)
      this.setState({
        isSignedIn,
        isInitializing: false,
      })
    })
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
      return <SignIn />
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