const Algorithm = require('./Algorithm.js')

const run = function (algo, updateFreq) {
  while (!algo.optimum()) {
    algo.step()

    if (algo.generationCount % updateFreq === 0) {
      postStatusMessage('progress', algo)
    }
  }

  postStatusMessage('end', algo)
}

const postStatusMessage = function (type, algorithm) {
  const progress = {
    cmd: type,
    generation: algorithm.generationCount,
    fittest: {
      fitness: algorithm.population.getFittest().getFitness(),
      solution: algorithm.population.getFittest().toString()
    }
  }

  postMessage(progress)
}

onmessage = function (params) {
  switch (params.data.cmd) {
    case 'run':
      const updateFreq = params.data.updateFreq || 1
      const solution = params.data.solution
      const populationSize = params.data.populationSize
      const algorithm = new Algorithm(populationSize, solution)

      run(algorithm, updateFreq)
      break
  }
}
