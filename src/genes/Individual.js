'use strict'

const brainfuck = require('brainfuck-javascript')

class Individual {
  constructor (solution) {
    this.solution = solution
    const genesLength = 1 + Math.ceil(Math.random() * 100)
    this.genes = Array.from(Array(genesLength).keys()).map((i) => { return this.generateRandomGene() })
  }

  generateRandomGene () {
    // const possible = '<>+-.,[]'
    const possible = '<>+-.,'
    return possible.charAt(Math.floor(Math.random() * possible.length))
  }

  getGene (index) {
    return this.genes[index]
  }

  setGene (index, val) {
    this.genes[index] = val
  }

  getOutput () {
    const bfCode = this.genes.join('')
    const bfOutput = brainfuck(bfCode)
    return bfOutput
  }

  getFitness () {
    let fitness = 0
    const output = this.getOutput()

    if (output.length === this.solution.length) {
      fitness++
      output.forEach((out, i) => {
        const difference = Math.abs(out - this.solution[i])
        fitness = fitness + (this.solution[i] - difference)
      })
    }

    return fitness
  }

  toString () {
    const bfCode = this.genes.join('')
    const bfOutput = this.getOutput()
    return `'${bfCode}' = [${bfOutput}]`
  }
}

module.exports = Individual
