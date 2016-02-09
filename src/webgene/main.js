const Worker = require('worker!./Worker.js')
const worker = new Worker()

const gene = {
  run: (solution, populationSize) => {
    const cmd = {
      cmd: 'run',
      solution: solution,
      populationSize: populationSize
    }

    worker.onmessage = (params) => {
      if (params.data.cmd === 'progress') {
        console.log('-------------------------------------')
        console.log(`Generation: ${params.data.generation}, fittest: ${params.data.fittest.fitness}`)
        console.log(`${params.data.fittest.solution}`)
      }

      if (params.data.cmd === 'end') {
        console.log('#####################################')
        console.log('Found solution!')
        console.log(`Generation: ${params.data.generation}, fittest: ${params.data.fittest.fitness}`)
        console.log(`${params.data.fittest.solution}`)
        worker.terminate()
      }
    }

    worker.postMessage(cmd)
  }
}

module.exports = gene
