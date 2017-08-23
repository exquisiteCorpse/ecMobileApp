import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../Style/UserHomeStyles'

export default class LikesButton extends Component {
  render () {
    let like = <Text >{this.props.likes} Likes</Text>
    let thumb = <Icon name='thumbs-o-up' size={20} color='#008b8b'></Icon>
    if (this.props.userLike) {
      like = <Text style={styles.textLikedCorpse}>{this.props.likes} Likes</Text>
      thumb = <Icon name='thumbs-up' size={20} color='#008b8b'></Icon>
    }
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.handleLike(this.props.corpseId, this.props.userId, this.props.userLike)
          }}
        >
          {thumb}
          <Text style={styles.textLikedCorpse}>{like}</Text>

        </TouchableOpacity>
      </View>
    )
  }
}
