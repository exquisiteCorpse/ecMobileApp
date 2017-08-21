import FBSDK, { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk'
import React, { Component} from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import { fetchUser, fetchFindOrCreateUser, getUserLoggedIn } from '../../store'

export const _fbAuth = () => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
  .then((result) => {
    console.log('LOGIN MANAGER', result)
    result.isCancelled ? alert ('Login cancelled') : alert('Login success with permissions: ' +
      result.grantedPermissions.toString())
  }, (error) => { alert ('Login fail with error: ' + error) })
}

class Login extends Component {
  compnentDidMount(){
    this.props.fetchUserLoggedIn()
  }

  render () {
    let dbUser
    if (this.props.dbUser){
      dbUser = this.props.dbUser
      console.log(dbUser.username,'.............TEST..................')
    }
    //console.log(this.props.navigation.navigate('HomeScreen'), 'navigate is here')
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
          onLogoutFinished={() => alert (`Logged out as: ${this.props.dbUser.username}`)}
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
            //ownProps.navigation.navigate('NewCorpseScreen')
          })
      })
  },
  fetchUserLoggedIn: () => {
    dispatch(getUserLoggedIn())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
