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
    const {assignment, cell, stack} = this.props.navigation.state.params
    let displayStage = null
    let displayTitle = null

    // Nav based on assignment
    if (assignment) {
      // source = this.props.singlePhoto.path
      if (assignment.cell === 'bottom') {
        displayStage = <CompleteCorpse navigation={this.props.navigation} navigate={navigate} corpseInfo={assignment} cell={assignment.cell} stack={stack}/>
      } else {
        displayStage = <UserFriends navigate={navigate} corpseInfo={assignment} cell={assignment.cell} stack={stack}/>

      }
    } else {
      // Title shows if you its new
      displayTitle =
        <TextInput
          style={styles.input}
          defaultValue={'Title'}
          caretHidden
          selectTextOnFocus
          selectionColor={'#585f62'}
          underlineColorAndroid={'#585f62'}
          onSubmitEditing={(event) => {
            this.setState({corpseTitle: event.nativeEvent.text})
          }}
          maxLength={15}
        />
      if (this.state.corpseTitle.length) {
        displayStage = <UserFriends navigate={navigate} corpseTitle={this.state.corpseTitle} cell={cell} stack={stack}/>
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          {displayTitle}
        </View>
        <View style={styles.info}>
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
