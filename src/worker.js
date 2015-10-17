'use strict'

// Edit this message and it should be hot-reloaded!
const message = 'Hello!'
postMessage(message)

if (module.hot) {
  module.hot.accept()
}
