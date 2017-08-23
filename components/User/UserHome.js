import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import LikeButton from '../Button/LikeButton'
import styles from '../Style/UserHomeStyles'
import {connect} from 'react-redux'
import store, { getUserLoggedIn, fetchLikes, fetchCorpses, destroyLike, postNewLike, getUserApp } from '../../store'
import { imageUrl } from '../../store/url'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ShareDialog } from 'react-native-fbsdk'
// import socket from '../socket'

class UserHome extends Component {
  constructor () {
    super()
    this.shareLinkWithShareDialog = this.shareLinkWithShareDialog.bind(this)
  }

  componentDidMount () {
    this.props.fetchData()
    // socket.on('message', (message) => {
    //   dispatch(fetchLikes())
    //   console.log('action', message)
    // })
  }

  shareLinkWithShareDialog (imageInfo) {
    ShareDialog.canShow(imageInfo).then(
      (canShow) => {
        if (canShow) return ShareDialog.show(imageInfo)
      })
      .then((result) => {
        result.isCancelled
          ? alert('Share cancelled')
          : alert('Share success with postId: ' + result.postId)
      }, (error) => alert('Share fail with error: ' + error))
  }

  render () {
    /// likes set up for render will move to its own file
    const userLikes = []
    const likesCorpse = {}
    if (this.props.likes) {
      this.props.likes.forEach((like) => {
        if (like.userId === this.props.dbUser.id) {
          userLikes.push(like.corpseId)
        }
        if (likesCorpse[like.corpseId]) {
          likesCorpse[like.corpseId]++
        } else {
          likesCorpse[like.corpseId] = 1
        }
      })
    }

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          {this.props.corpses.map((corpse) => {
            if (corpse.complete) {
              let userLike = userLikes.includes(corpse.id)
              const imageInfo = {
                contentType: 'link',
                contentUrl: `${imageUrl}corpse-${corpse.id}.jpeg`,
                contentDescription: 'Recent completed Exquisite Corpse'
              }
              return (
                <View key={corpse.id} style={styles.corpse}>
                  <View style={styles.imageCorpseTop}>
                    <Text style={styles.titleCorpse}>{corpse.title}</Text>
                    <Text style={styles.textCorpse}>{corpse.photos.map((photo, i) => { return photo.user.username.split(' ').slice(0, 1) }).join(' | ')}</Text>
                  </View>
                  <View style={styles.viewCorpse}>
                    <Image
                      resizeMode='contain'
                      style={styles.viewCorpse}
                      source={{uri: `${imageUrl}corpse-${corpse.id}.jpeg`}}
                    />
                  </View>
                  <View style={styles.imageCorpseBottom}>
                    <LikeButton corpseId={corpse.id} userLike={userLike} userId={this.props.dbUser.id} likes={likesCorpse[corpse.id]} handleLike={this.props.handleLike} />
                    <View >
                      <Icon name='facebook-square'
                        style={{marginRight: 10}}
                        size={25}
                        color='black'
                        onPress={() => {
                          this.shareLinkWithShareDialog(imageInfo)
                        }}
                      />
                    </View>

                  </View>
                </View>
              )
            }
          }).reverse()}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    corpses: state.corpses,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => {
    dispatch(getUserLoggedIn())
    dispatch(fetchCorpses())
      .then(() => {
        dispatch(fetchLikes())
      })
  },

  handleLike (corpseId, userId, userLike) {
    const like = {
      corpseId: +corpseId,
      userId: +userId
    }
    if (userLike) {
      // socket.emit('message', like)
      dispatch(destroyLike(like))
    } else {
      // socket.emit('message', like)
      dispatch(postNewLike(like))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
