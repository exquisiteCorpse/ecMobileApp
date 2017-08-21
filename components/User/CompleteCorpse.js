import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, getPhoto, postNewPhoto, completeCorpes, updateStatusAssignments } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image, Button } from 'react-native'
import styles from '../Style/FriendsListStyles'

class CompeleteCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    this.props.fetchFriendsData()
  }
  render () {

    const { singlePhoto } = this.props
    return (
      <View style={styles.container2}>
        <Text style={{textAlign: 'center'}}>Click To Complete</Text>
        <Button
          title='complete'
          color='#1e90ff'
          onPress={() => { this.props.postPhoto(singlePhoto) }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    singlePhoto: state.singlePhoto
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFriendsData: () => {
    dispatch(fetchFriends())
  },
  fetchPhoto: () => {
    dispatch(getPhoto())
  },
  postPhoto: (photoData) => {
    const body = {
      corpseId: ownProps.corpseInfo.assignment.corpseId,
      userId: ownProps.corpseInfo.assignment.assigneeId,
      cell: ownProps.corpseInfo.assignment.cell
    }
    dispatch(postNewPhoto(photoData, body))
      .then(() => {
        dispatch(completeCorpes(ownProps.corpseInfo.assignment.corpseId, {complete: true}))
        dispatch(updateStatusAssignments(ownProps.corpseInfo.assignment.id, {complete: true}))
      })

    ownProps.navigate('HomeScreen')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CompeleteCorpse)
