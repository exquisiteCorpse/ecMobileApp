import React, { Component } from 'react'
import { View, Image, Text, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../../store'
import Orientation from 'react-native-orientation'

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.lockToLandscape()
  }

  componentWillUnmount () {
    // remove lock

  }

  render () {
    const navigate = this.props.navigation.navigate
    const corpseInfo = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.captured}>
          <Image
            style={styles.image}
            source={{ uri: this.props.singlePhoto.path }}
          />
          <View style={styles.button}>
            <Button
              title='Approve'
              color='#228b22'
              onPress={() => {
                navigate('SendToFriendsScreen', corpseInfo)
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
      </View>
    )
  }
}

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
  },
  button: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center'
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
