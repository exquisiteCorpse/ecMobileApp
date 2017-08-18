import React, { Component } from 'react'
import { View, Image, Text, Button, StyleSheet, Dimensions } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../store'
import Orientation from 'react-native-orientation'

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    console.log(this.props)
  }

  componentWillUnmount () {
    // remove lock
    Orientation.unlockAllOrientations()
  }

  render () {
    const navigate = this.props.navigation.navigate

    return (
      <View style={styles.container}>
        <View style={styles.captured}>
          <Image
            style={styles.image}
            source={{ uri: this.props.singlePhoto.path }}
          />
        </View>
        <View
          style={{height: '35%'}}>
          <View style={{flexGrow: 1}} />
          <Button
            title='Approve'
            color='#228b22'
            onPress={() => {
              navigate('SendToFriendsScreen')
            }}
          />
          <Button
            title='Re-take'
            color='#ff0000'
            onPress={() => {
              navigate('AppCameraScreen')
            }}
          />
        </View>

      </View>
    )
  }
}
//  style={{width: '100%', height: '75%'}}
// NewCorpse.navigationOptions = ({ navigation }) => ({
//   title: 'Camera'
// })

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  captured: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'space-between'
  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(NewCorpse)
