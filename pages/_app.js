import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Router from 'next/router'

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
    isLoading: false,
    isCompleteLoading: false,
  }

  componentDidMount() {
    this.checkUserStatus()

    Router.events.on('routeChangeStart', () => {
      console.log('Route Start')
      this.setState({ isLoading: true })
    })
    Router.events.on('routeChangeComplete', () => {
      console.log('Route Finished')
      this.setState({ isLoading: false })
    })

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
    console.log('pageProps', this.props)
    const { isSignedIn, isInitializing } = this.state
    if (router.pathname === '/_error') {
      return <NotFound />
    }
    if (isInitializing) {
      return (
        <React.Fragment>
          <Head />
          <Loading isLoadingAnimated />
        </React.Fragment>
      )
    }
    if (!isSignedIn) {
      return <SignIn />
    }
    return (
      <React.Fragment>
        <Head />
        <Sidebar />
        <Navbar />
        <Loading isInitial={this.state.isLoading} />
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