import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TouchableHighlight } from 'react-native'
import {connect} from 'react-redux'
import { fetchAssignments } from '../../store'
import { imageUrl } from '../../store/url'
import PhotoEdgeItem from '../Photo/PhotoEdgeItem'

/* -----------------    COMPONENT     ------------------ */

class UserEdges extends Component {
  componentDidMount () {
    this.props.fetchAssignmentsData()
  }

  render () {
    const { assignments } = this.props
    const navigate = this.props.navigation.navigate
    let cell = ''

    return (
      <View style={styles.container}>
        <ScrollView>
          {
            assignments
              .filter(assignment => assignment.assignorId === 1)
              .map(assignment => {
                if (assignment.cell === 'middle') {
                  cell = 'top'
                }
                if (assignment.cell === 'bottom') {
                  cell = 'middle'
                }
                return (
                  <TouchableHighlight key={assignment.photoId} onPress={() => { navigate('EdgeCameraScreen') }}>
                    <View key={assignment.photoId}>
                      <Image
                        style={styles.corpseEdge}
                        source={{uri: `${imageUrl}${assignment.corpseId}-${assignment.assignorId}-${cell}-edge.jpeg`}}
                      />
                    </View>
                  </TouchableHighlight>
                )
              })
          }
        </ScrollView>
      </View>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAssignmentsData: () => {
    dispatch(fetchAssignments())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdges)

/* -----------------    STYLES     ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  corpseEdge: {
    height: 120,
    width: 360,
    justifyContent: 'center'
  }
})
