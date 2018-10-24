import React, { Component } from 'react';
import Head from 'next/head'

import styles from './signIn.module.scss'
import { Button, Input } from '../../component'
import { signIn } from '../../firebase/auth'

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
      this.setState({ error: 'Please fill required fields.' })
    } else {
      this.setState({
        isLoading: true,
        error: ''
      }, async () => {
        try {
          await signIn(email, password)
        } catch (error) {
          const { code, message } = error
          if (code === 'auth/invalid-email') {
            this.setState({ isLoading: false, error: 'Email is invalid format.' })
          } else if (code === 'auth/wrong-password') {
            this.setState({ isLoading: false, error: message })
          }
        }
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

  _validateField = () => {
    const isDirty = this.emailRef.current.attributes[0].value
    const isFocused = this.emailRef.current.attributes[1].value
    if (isFocused === "true" && isDirty === "true") {
      let error = ''
      const { valid } = this.emailRef.current.validity
      if (this.emailRef.current.value === '') {
        error = 'Email is required.'
      } else if (!valid) {
        error = 'Email is invalid format.'
      }
      this.setState({ error })
    }
  }

  render() {
    const {
      isLoading,
      error,
    } = this.state
    return (
      <React.Fragment>
        <Head>
          <title>Sign In</title>
        </Head>
        <div className={styles.container}>
          <div className={`${styles.signInBox} ${error !== '' ? styles.errorBox : ''}`}>
            <div className={styles.headerSection}>
              <div>AKI</div>
            </div>
            <div className={styles.formSection}>
              <Input
                inputref={this.emailRef}
                type="email"
                label="Email"
                error={error}
                onBlur={() => this._validateField()}
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