'use strict'

const worker = new Worker('/static/bundle.js')
worker.onmessage = e => {
  alert(e.data)
}
