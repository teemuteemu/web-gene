// import Algorithm from './Algorithm.js'

const Algorithm = require('./Algorithm.js')

const solution = [3] // '+++.'
const populationSize = 20

const algo = new Algorithm(populationSize, solution)

function run () {
  algo.step()
  if (!algo.optimum()) {
    console.log('-------------------------------------')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
    setTimeout(run, 100)
  } else {
    console.log('=====================================')
    console.log('Found solution!')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
  }
}

module.exports = run
