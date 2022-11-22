import io from 'socket.io-client'
import { config } from '../config/config'

const socket = io(config.API_URL, {
  withCredentials: true,
});

export default socket;