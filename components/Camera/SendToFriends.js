import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { getPhoto } from '../../store'
import Orientation from 'react-native-orientation'
import UserFriends from '../User/UserFriends'
import CompleteCorpse from '../User/CompleteCorpse'
import styles from '../Style/FriendsListStyles'

class SendToFriends extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.unlockAllOrientations()
  }

  render () {
    const { navigate } = this.props.navigation
    const assignment = this.props.navigation.state.params
    let displayStage = null

    let displayTitle = null
    let displayText = null
    //Nav based on assignment
    if (assignment) {
      if (assignment.cell === 'bottom') {
        displayStage = <CompleteCorpse navigate={navigate} corpseInfo={assignment}/>
      } else {
        displayText = <Text style={{ fontSize: 20 }}>Choose Wisely...</Text>
        displayStage = <UserFriends navigate={navigate} corpseInfo={assignment}/>
      }
    } else {
      //Title shows if you its new
      displayTitle =  <View><TextInput defaultValue={'Enter Corpse Title'}/></View>
      displayText = <Text style={{ fontSize: 20 }}>Choose Wisely...</Text>
      displayStage = <UserFriends navigate={navigate} />
    }

    return (
      <View style={{ display: 'flex' }}>
        <Image
          style={{ height: '65%', width: '100%' }}
          source={{ uri: this.props.singlePhoto.path }}
          resizeMode={'contain'}
        />
        {displayTitle}
        <View style={styles.container}>
          {displayText}
          {displayStage}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singlePhoto: state.singlePhoto
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendToFriends)
