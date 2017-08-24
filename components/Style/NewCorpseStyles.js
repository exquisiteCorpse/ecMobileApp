import { StyleSheet } from 'react-native'

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
  edge: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 40,
    justifyContent: 'space-between'
  },
  options: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  optionButtons: {
    marginLeft: 10,
    marginRight: 10,
    width: '30%'
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
