import FBSDK, { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk'
import React, { Component} from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import { fetchUser, fetchFindOrCreateUser, releaseUserDB, releaseUserFB } from '../../store'

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
          onLogoutFinished={this.props.loggedOut}
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
  },
  loggedOut: () => {
    dispatch(releaseUserDB())
    dispatch(releaseUserFB())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
