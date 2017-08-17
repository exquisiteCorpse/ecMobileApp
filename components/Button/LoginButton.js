import FBSDK, { LoginButton, LoginManager } from 'react-native-fbsdk'
import React from 'react'
import { View } from 'react-native'

export const _fbAuth = () => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then((result) => {
    result.isCancelled ? alert('Login cancelled') : alert('Login success with permissions: ' +
      result.grantedPermissions.toString())
  }, (error) => { alert('Login fail with error: ' + error) })
}

const Login = () => {
  return (
    <View>
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert('Login failed with error: ' + result.error)
            } else if (result.isCancelled) {
              alert('Login was cancelled')
            } else {
              alert('Login was successful with permissions: ' + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={() => alert('User logged out')} />
    </View>
  )
}

export default Login
