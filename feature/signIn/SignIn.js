import React, { Component } from 'react';
import Head from 'next/head'

import styles from './signIn.module.scss'
import { Button, Input } from '../../component'
import { signIn } from '../../firebase'

class SignIn extends Component {
  state = {
    error: '',
    isLoading: false,
  }

  emailRef = React.createRef();
  passwordRef = React.createRef();

  _onSignedIn = async () => {
    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value
    if (!email || !password) {
      alert('Please fill required fields.')
    } else {
      this.setState({ isLoading: true }, async () => {
        try {
          await signIn(email, password)
        } catch (error) {
          alert(error.code)
        }
        this.setState({ isLoading: false })
      })

    }
  }

  onPressEnter = (e) => {
    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value
    if (e.key === 'Enter') {
      if (email && password) {
        this._onSignedIn()
      }
    }
  }

  render() {
    const { isLoading } = this.state
    return (
      <React.Fragment>
        <Head>
          <title>Sign In</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.signInBox}>
            <div className={styles.headerSection}>
              <div>AKI</div>
            </div>
            <div className={styles.formSection}>
              <Input
                inputref={this.emailRef}
                type="text"
                label="Email"
              />
              <Input
                inputref={this.passwordRef}
                onKeyPress={this.onPressEnter}
                type="password" label="Password"
              />
            </div>
            <div className={styles.actionSection}>
              <Button
                disabled={isLoading}
                onClick={this._onSignedIn}
                title={isLoading ? 'Loading...' : 'Sign in'}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;