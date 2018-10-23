import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { validatePath } from '../routes'
import {
  SignIn,
  Navbar,
  Sidebar,
  Head,
} from '../feature'
import reducers from '../reducer'
import styles from '../theme/_app.scss';
import NotFound from './not-found';
import {
  initialize,
  getUser,
} from '../firebase'

const store = createStore(reducers)

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
    initialize()
    this.checkUserStatus()
  }

  checkUserStatus = () => {
    getUser((user) => {
      const isSignedIn = (user.type === 'signed_in')
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
    const isCorrectRoute = router.asPath === '/' || validatePath(router.asPath)
    if (!isCorrectRoute) {
      return <NotFound />
    }
    if (isInitializing) {
      return <h1>Loading...</h1>
    }
    if (isCorrectRoute && !isSignedIn) {
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