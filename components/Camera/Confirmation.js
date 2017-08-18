import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { getPhoto, postNewPhoto, makeNewCorpe, makeNewAssign } from '../../store'
import Orientation from 'react-native-orientation'
import UserFriends from '../User/UserFriends'
import styles from '../Style/FriendsListStyles'


class Confirmation extends React.Component {
  componentDidMount() {

  }

  render() {
    return(
      <View>
        <Text>Corpse sent successfully!</Text>
        <Text>Get excited, you will receive the final Exquisite Corpse back when complete</Text>
      </View>
    )
  }

}
