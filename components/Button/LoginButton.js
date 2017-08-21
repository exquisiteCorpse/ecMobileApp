import FBSDK, { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk'
import React, { Component} from 'react'
import { View } from 'react-native'
import {connect} from 'react-redux'
import { fetchUser, fetchFindOrCreateUser } from '../../store'

export const _fbAuth = () => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
  .then((result) => {
    console.log('LOGIN MANAGER', result)
    result.isCancelled ? alert ('Login cancelled') : alert('Login success with permissions: ' +
      result.grantedPermissions.toString())
  }, (error) => { alert ('Login fail with error: ' + error) })
}

class Login extends Component {
  render () {
    return (
      <View>
        <LoginButton

          readPermissions={['public_profile', 'email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert ('Login failed with error: ' + result.error)
              } else if (result.isCancelled) {
                alert ('Login was cancelled')
              } else {
                this.props.fetchUserData()
              }
            }
          }
          onLogoutFinished={() => alert (`Logged out as: ${this.props.fbUser.name}`)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fbUser: state.fbUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserData: () => {
    // LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    // .then(() => {
    AccessToken.getCurrentAccessToken()
      .then((data) => {
        dispatch(fetchUser(data.accessToken))
          .then((user) => {
            dispatch(fetchFindOrCreateUser(user))
          })
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
