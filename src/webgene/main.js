const Worker = require('worker!./Worker.js')
const worker = new Worker()
const callbacks = {}

worker.onmessage = (params) => {
  const command = params.data.cmd

  if (callbacks.hasOwnProperty(command)) {
    callbacks[command](params.data)
  }
}

const gene = {
  run: (solution, populationSize) => {
    const cmd = {
      cmd: 'run',
      solution: solution,
      populationSize: populationSize
      // updateFreq: 5
    }

    worker.postMessage(cmd)
  },

  on: (message, handler) => {
    callbacks[message] = handler
  }
}

module.exports = gene
