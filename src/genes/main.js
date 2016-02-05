// import Algorithm from './Algorithm.js'

const Algorithm = require('./Algorithm.js')

const solution = [10, 2, 1]
const populationSize = 100

const algo = new Algorithm(populationSize, solution)

function run () {
  algo.step()
  if (!algo.optimum()) {
    console.log('-------------------------------------')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
    setTimeout(run, 10)
  } else {
    console.log('=====================================')
    console.log('Found solution!')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
  }
}

module.exports = run
