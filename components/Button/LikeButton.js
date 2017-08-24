import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../Style/UserHomeStyles'

const LikesButton = (props) => {
  let like = <Text >{props.likes} Likes</Text>
  let thumb = <Icon name='thumbs-o-up' style={{ marginLeft: 10 }} size={20} color='black' />
  if (props.userLike) {
    like = <Text style={styles.textLikedCorpse}>{props.likes} Likes</Text>
    thumb = <Icon name='thumbs-up' style={{ marginLeft: 10 }} size={20} color='black' />
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.handleLike(props.corpseId, props.userId, props.userLike)
        }}
      >
        {thumb}
        <Text style={styles.textLikedCorpse}>{like}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LikesButton
