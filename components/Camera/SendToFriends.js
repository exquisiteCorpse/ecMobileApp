import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { getPhoto, getUserLoggedIn } from '../../store'
import Orientation from 'react-native-orientation'
import UserFriends from '../User/UserFriends'
import CompleteCorpse from '../User/CompleteCorpse'
import styles from '../Style/FriendsListStyles'

class SendToFriends extends Component {
  constructor () {
    super()
    this.state = {
      corpseTitle: ''
    }
  }
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.unlockAllOrientations()
  }

  render () {
    const { navigate } = this.props.navigation
    const assignment = this.props.navigation.state.params
    let displayStage = null
    let displayTitle = null
    // Nav based on assignment
    if (assignment) {
      if (assignment.assignment.cell === 'bottom') {
        displayStage = <CompleteCorpse navigate={navigate} corpseInfo={assignment}/>
      } else {
        displayStage = <UserFriends navigate={navigate} corpseInfo={assignment}/>
      }
    } else {
      // Title shows if you its new
      displayTitle = <View>
        <TextInput
          defaultValue={'Enter Title'}
          onSubmitEditing={(event) => {
            this.setState({corpseTitle: event.nativeEvent.text})
          }}
          maxLength={15}
        /></View>
      if (this.state.corpseTitle.length) {
        displayStage = <UserFriends navigate={navigate} corpseTitle={this.state.corpseTitle}/>
      }
    }

    return (
      <View style={{ display: 'flex' }}>
        <Image
          style={{ height: '65%', width: '100%' }}
          source={{ uri: this.props.singlePhoto.path }}
          resizeMode={'contain'}
        />
        {displayTitle}
        <View >
          {displayStage}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singlePhoto: state.singlePhoto,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
    dispatch(getUserLoggedIn())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendToFriends)
