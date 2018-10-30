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

  static async getInitialProps(props) {
    const user = await getUser(false)
    const { type } = user
    const isSignedIn = type !== 'signed_out'
    return {
      isSignedIn,
    }
  }

  state = {
    isLoading: false,
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props
    return (
      <Container>
        <Provider store={store}>
          <>
            <Head />
            {this.props.isSignedIn && <Sidebar />}
            {this.props.isSignedIn && <Navbar />}
            <Loading isInitial={this.state.isLoading} />
            <div className={styles.contentLayout}>
              {this.props.isSignedIn
                ? <Component {...pageProps} />
                : <SignIn />
              }
            </div>
          </>
        </Provider>
      </Container >
    )
  }
}