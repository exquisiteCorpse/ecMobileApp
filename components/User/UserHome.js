import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import LikeButton from '../Button/LikeButton'
import styles from '../Style/UserHomeStyles'
import {connect} from 'react-redux'
import { fetchLikes, fetchCorpses, destroyLike, postNewLike } from '../../store'
import { imageUrl } from '../../store/url'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ShareDialog } from 'react-native-fbsdk'

const shareLinkContent = {
  contentType: 'link',
  contentUrl: 'https://facebook.com',
  contentDescription: 'Facebook sharing is easy!'
}

class UserHome extends Component {
  constructor() {
    super()
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
      contentDescription: 'Facebook sharing is easy!'
    }
    this.state = {shareLinkContent: shareLinkContent}
  }

  shareLinkWithShareDialog () {
    var tmp = this
    ShareDialog.canShow(this.state.shareLinkContent).then(
      (canShow) => {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent)
        }
      }
    ).then((result) => {
      if (result.isCancelled) {
        alert ('Share cancelled');
      } else {
        alert ('Share success with postId: ' + result.postId)
      }
    },
    (error) => {
      alert ('Share fail with error: ' + error)
    })
  }
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    /// likes set up for render will move to its own file
    const userLikes = []
    const likesCorpse = {}
    if (this.props.likes) {
      this.props.likes.forEach((like) => {
        if (like.userId === 1) {
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
      <ScrollView>
        <View style={styles.container}>
          {this.props.corpses.map((corpse) => {
            if (corpse.complete) {
              let userLike = userLikes.includes(corpse.id)
              return (
                <View key={corpse.id} style={styles.corpse}>
                  <View style={styles.imageCorpseTop}>
                    <Text style={styles.textCorpse}>{corpse.photos.map((photo, i) => { return photo.user.username }).join('|')}</Text>
                    <Text style={styles.titleCorpse}>{corpse.title}</Text>
                    <Text style={styles.textCorpse}>...</Text>
                  </View>
                  <View style={styles.viewCorpse}>
                    <Image
                      style={styles.viewCorpse}
                      source={{uri: `${imageUrl}corpse-${corpse.id}.jpeg`}}
                    />
                  </View>
                  <View style={styles.imageCorpseBottom}>
                    <LikeButton corpseId={corpse.id} userLike={userLike} userId='1' likes={likesCorpse[corpse.id]} style={styles} handleLike={this.props.handleLike}
                    />

                    <View >
                      <Icon name='facebook-square'
                        size={25}
                        color='#6495ed'
                        onPress={this.shareLinkWithShareDialog.bind(this)}
                      />
                    </View>
                  </View>
                </View>
              )
            }
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    corpses: state.corpses
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
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
      console.log('drop', corpseId, userId, userLike)
      dispatch(destroyLike(like))
    } else {
      console.log('post', corpseId, userId, userLike)
      dispatch(postNewLike(like))
    }
    console.log(corpseId, userId, userLike)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(UserHome)

/*

*/
