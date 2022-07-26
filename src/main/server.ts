import { server } from './application'
import { SERVER } from './config/constants'
import errorLogger from './utils/error-logger'

(async () => {
  try {
    server.listen(SERVER.PORT, async () => console.info(`Server running on port: ${SERVER.PORT}`))
  } catch (error) {
    errorLogger(error)
  }
})()
