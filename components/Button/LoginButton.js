import FBSDK, { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk'
import React, { Component} from 'react'
import { View, Text } from 'react-native'
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
  componentDidMount () {
    this.props.loggedIn()
  }
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
          onLogoutFinished={() => alert (`See You Later ${this.props.dbUser}`)}
        />
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    fbUser: state.fbUser,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserData: () => {
    AccessToken.getCurrentAccessToken()
      .then((data) => {
        dispatch(fetchUser(data.accessToken))
          .then((user) => {
            dispatch(fetchFindOrCreateUser(user))
          })
      })
  },
  loggedIn: () => {
    AccessToken.getCurrentAccessToken()
      .then((data) => {
        if (data === null) {
          console.log('done')
        } else {
          dispatch(fetchUser(data.accessToken))
            .then((user) => {
              dispatch(fetchFindOrCreateUser(user))
            })
        }
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
