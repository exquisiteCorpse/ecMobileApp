import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, getPhoto, postNewPhoto, completeCorpes, updateStatusAssignments, dropAssignment } from '../../store'
import { Text, View, Button } from 'react-native'
import styles from '../Style/CompleteStyles'
import { NavigationActions } from 'react-navigation'

class CompeleteCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
  }
  render () {
    const { singlePhoto } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.message}>It's done! Click To Complete!</Text>
        <View style={styles.option}>
          <Button
            title='complete'
            color='black'
            onPress={() => {
              this.props.postPhoto(singlePhoto)
            }}
          />
        </View>
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
      corpseId: ownProps.corpseInfo.corpseId,
      userId: ownProps.corpseInfo.assigneeId,
      cell: ownProps.corpseInfo.cell
    }
    dispatch(postNewPhoto(photoData, body))
      .then(() => {
        dispatch(dropAssignment({ id: ownProps.corpseInfo.id, complete: true }))
        dispatch(completeCorpes(ownProps.corpseInfo.corpseId, {complete: true}))
        dispatch(updateStatusAssignments(ownProps.corpseInfo.id, {complete: true}))
      })
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'UserEdgesScreen' })
      ]
    })
    ownProps.navigation.dispatch(resetAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CompeleteCorpse)
