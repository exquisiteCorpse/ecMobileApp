import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import styles from '../Style/FriendsListStyles'
import { Icon } from 'react-native-elements'

class EditFriends extends Component {
  componentDidMount () {
    this.props.fetchData(this.props.dbUser.id)
  }

  render () {
    const { friends } = this.props
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center' }}>

          {friends && friends.map(friend => {
            return (
              <View key={friend.id} style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 150, height: 30}}>
                  <Text>{friend.username}</Text>
                </View>
                <View style={{width: 50, height: 30}}>
                  <Icon
                    name='remove'
                    type='font-awesome'
                    color='black'
                    onPress={() => console.log('hello')} />
                </View>
              </View>)
          })}

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: (id) => {
    dispatch(fetchFriends(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditFriends)
