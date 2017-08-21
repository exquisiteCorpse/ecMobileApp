import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LikesButton extends Component {
  render () {
    let like = <Text >{this.props.likes} Likes</Text>
    if (this.props.userLike) {
      like = <Text style={this.props.style.textLikedCorpse}>{this.props.likes} Likes</Text>
    }
    return (
      <View>
        <TouchableOpacity

          onPress={() => this.props.handleLike(this.props.corpseId, this.props.userId, this.props.userLike)}
        >
          <Icon name='thumbs-o-up' size={20} color='#008b8b'></Icon>
          <Text>{like}</Text>

        </TouchableOpacity>
      </View>
    )
  }
}
