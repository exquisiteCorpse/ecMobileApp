import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TouchableHighlight } from 'react-native'
import styles from '../Style/UserHomeStyles'
import {connect} from 'react-redux'
import { fetchCorpes } from '../../store'
import { imageUrl } from '../../store/url'

class UserEdges extends Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    const { corpses } = this.props
    const navigate = this.props.navigation.navigate

    return (
      <ScrollView>
        <View style={styles.container}>
          {
            corpses.map(corpse => {
              if (corpse.id === 3) {
                return (
                  <View key={corpse.id} style={styles.corpse}>
                    <View style={styles.imageCorpseTop}>
                      <Text style={styles.textCorpse}>{corpse.photos.map((photo, i) => { return photo.user.username }).join('|')}</Text>
                      <Text style={styles.titleCorpse}>{corpse.title}</Text>
                      <Text style={styles.textCorpse}>...</Text>
                    </View>
                    <View style={styles.viewCorpse}>
                      {corpse.photos.map((photo) => {
                        return (
                          <TouchableHighlight key={photo.id} onPress={() => { navigate('EdgeCameraScreen') }}>
                            <Image
                              style={styles.imageCorpse}
                              source={{uri: `${imageUrl}/${photo.edgeUrl}`}}
                            />
                          </TouchableHighlight>
                        )
                      }).reverse()}
                    </View>
                  </View>
                )
              }
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    corpses: state.corpses
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchCorpes())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdges)
