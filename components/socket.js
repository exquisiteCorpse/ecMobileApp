import io from 'socket.io-client'
import {socketUrl} from '../store/url'

const socket = io(socketUrl)

socket.on('connect', function () {
  console.log('Connected!')
})

export default socket
