import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  edgeblock: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 40,
    justifyContent: 'space-between'
  },
  camblock: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
    left: 0,
    height: 155,
    justifyContent: 'space-between'
  }
})

export default styles
