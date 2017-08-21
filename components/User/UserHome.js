import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import LikeButton from '../Button/LikeButton'
import styles from '../Style/UserHomeStyles'
import {connect} from 'react-redux'
import store, { getUserLoggedIn, fetchLikes, fetchCorpses, destroyLike, postNewLike, getUserApp } from '../../store'
import { imageUrl } from '../../store/url'
class UserHome extends Component {
  componentDidMount () {
    this.props.fetchData()
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
                    <LikeButton corpseId={corpse.id} userLike={userLike} userId={this.props.dbUser.id} likes={likesCorpse[corpse.id]} style={styles} handleLike={this.props.handleLike} />
                    <Text>3 Share</Text>
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
    corpses: state.corpses,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch) => ({
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
